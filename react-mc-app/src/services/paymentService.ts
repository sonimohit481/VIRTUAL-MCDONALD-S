import { config } from "../config";
import { PaymentOptions } from "../interface";
import { CartItem } from "../screens/Products";

const RAZORPAY_KEY_ID = config.razorpay.keyId;
const URL = config.api.baseUrl;

export const initializePayment = async (
  cart: CartItem[],
  userDetails: {
    name: string;
    email: string;
    phone: string;
  }
) => {
  try {
    // Calculate total amount (including tax and delivery)
    const subtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.05;
    const deliveryFee = 40;
    const totalAmount = (subtotal + tax + deliveryFee) * 100; // Convert to paise

    // Create order on your backend
    const orderResponse = await fetch(`${URL}/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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

    if (!orderData.id) {
      throw new Error("Failed to create order");
    }

    const options: PaymentOptions = {
      key: RAZORPAY_KEY_ID,
      amount: totalAmount,
      currency: "INR",

      description: `Order payment for ${cart.length} items`,
      name: "Mc Donald Clone React", //your business name
      image:
        "https://raw.githubusercontent.com/sonimohit481/VIRTUAL-MCDONALD-S/main/images/logo.png",
      order_id: orderData.id,
      handler: function (response) {
        handlePaymentSuccess(response, orderData.id);
      },
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.phone,
      },
      theme: {
        color: "#F5Ca0B",
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  } catch (error) {
    console.error("Payment initialization failed:", error);
  }
};

const handlePaymentSuccess = async (response: any, orderId: string) => {
  try {
    const verifyResponse = await fetch(`${URL}/verify-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_order_id: response.razorpay_order_id,
        razorpay_signature: response.razorpay_signature,
        order_id: orderId,
      }),
    });

    const data = await verifyResponse.json();
    if (true) {
      if (data.verified) {
        // Clear cart and redirect to success page
        localStorage.setItem("cart", "[]");
        window.location.href = "/products";
      } else {
        throw new Error("Payment verification failed");
      }
    }
  } catch (error) {
    console.error("Payment verification failed:", error);
    alert("Payment verification failed!!");
    window.location.href = "/order-failed";
  }
};
