import axios from "../lib/axios";
import { config } from "../config";
import { CartItem } from "../interface";
import orderService from "../appwrite/config";

const RAZORPAY_KEY_ID = config.razorpay.keyId;

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
    const totalAmount = Math.floor((subtotal + tax + deliveryFee) * 100);

    const orderResponse = await axios.post("/create-order", {
      amount: totalAmount,
      currency: "INR",
      receipt: `Receipt_${Date.now()}`,
      notes: {
        customer_name: userDetails.name,
        customer_email: userDetails.email,
      },
    });

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: totalAmount,
      currency: "INR",
      description: `Order payment for ${cart.length} items`,
      name: "Mc Donald Clone React",
      image: "/logo.png",
      order_id: orderResponse.data.id,
      handler: (response: any) =>
        onPaymentComplete(response, orderResponse.data.id),
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.phone,
      },
      theme: { color: "#F5Ca0B" },
      config: {
        display: {
          blocks: {
            banks: {
              name: "USE THIS FOR FAKE PAYMENTS",
              instruments: [
                {
                  method: "wallet",
                  wallets: ["jiomoney"],
                },
                {
                  method: "wallet",
                  wallets: ["airtelmoney"],
                },
              ],
            },
          },
          sequence: ["block.banks"],
          preferences: {
            show_default_blocks: true,
          },
        },
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  } catch (error) {
    console.error("Payment initialization failed:", error);
    throw error;
  }
};

export const verifyPayment = async (response: any, orderId: string) => {
  try {
    const verifyResponse = await axios.post("/verify-payment", {
      razorpay_payment_id: response.razorpay_payment_id,
      razorpay_order_id: response.razorpay_order_id,
      razorpay_signature: response.razorpay_signature,
      order_id: orderId,
    });

    return verifyResponse.data.verified;
  } catch (error) {
    console.error("Payment verification failed:", error);
    throw error;
  }
};

export const processOrder = async (cart: CartItem[], userId: string) => {
  const summary = summarizeCart(cart);
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
  const names = cart.map((item) => item.name).join(", ");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return {
    names,
    totalItems,
  };
};
