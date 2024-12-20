import orderService from "../appwrite/config";
import { config } from "../config";
import { CartItem } from "../interface";

const RAZORPAY_KEY_ID = config.razorpay.keyId;
const URL = config.api.baseUrl;

export const initializePayment = async (
  cart: CartItem[],
  userDetails: any,
  onPaymentComplete: (response: any, orderId: string) => void
) => {
  try {
    const subtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.05;
    const deliveryFee = 40;
    const totalAmount = (subtotal + tax + deliveryFee) * 100;

    const orderResponse = await fetch(`${URL}/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: totalAmount,
        currency: "INR",
        receipt: `Receipt_${Date.now()}`,
        notes: {
          customer_name: userDetails.name,
          customer_email: userDetails.email,
        },
      }),
    });

    const orderData = await orderResponse.json();
    if (!orderData.id) throw new Error("Failed to create order");

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: totalAmount,
      currency: "INR",
      description: `Order payment for ${cart.length} items`,
      name: "Mc Donald Clone React",
      image:
        "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/logo.png",
      order_id: orderData.id,
      handler: (response: any) => onPaymentComplete(response, orderData.id),
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.phone,
      },
      theme: { color: "#F5Ca0B" },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  } catch (error) {
    console.error("Payment initialization failed:", error);
  }
};

export const verifyPayment = async (response: any, orderId: string) => {
  try {
    const verifyResponse = await fetch(`${URL}/verify-payment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_order_id: response.razorpay_order_id,
        razorpay_signature: response.razorpay_signature,
        order_id: orderId,
      }),
    });

    const data = await verifyResponse.json();
    if (data.verified) return true;
    else throw new Error("Payment verification failed");
  } catch (error) {
    console.error("Payment verification failed:", error);
    throw error;
  }
};

export const processOrder = async (cart: CartItem[], userId: string) => {
  const summary = summarizeCart(cart);
  console.log("Item Names:", summary.names);
  console.log("Total Items:", summary.totalItems);
  try {
    const total = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const orderResponse = await orderService.createOrder({
      userId,
      itemNames: summary.names,
      totalItems: summary.totalItems,
      total,
      status: "delivered",
    });

    if (!orderResponse)
      throw new Error("Failed to create the order in Appwrite");
    return orderResponse;
  } catch (error) {
    console.error("Order processing failed:", error);
    throw error;
  }
};

const summarizeCart = (cart: CartItem[]) => {
  const names = cart.map((item) => item.name).join(", "); // Get a comma-separated string of item names
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // Calculate total quantity of items

  return {
    names,
    totalItems,
  };
};
