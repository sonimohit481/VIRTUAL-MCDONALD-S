import { CartItem } from "../screens/Products";
import config from "../config";

const RAZORPAY_KEY_ID = config.razorpay.keyId;

interface PaymentOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

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
    const orderResponse = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: totalAmount,
        cart,
        userDetails,
      }),
    });

    const orderData = await orderResponse.json();

    if (!orderData.id) {
      throw new Error("Failed to create order");
    }

    // Initialize Razorpay options
    const options: PaymentOptions = {
      key: RAZORPAY_KEY_ID,
      amount: totalAmount,
      currency: "INR",
      name: "McDonald's Clone",
      description: `Order payment for ${cart.length} items`,
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
        color: "#F59E0B", // Yellow theme color
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  } catch (error) {
    console.error("Payment initialization failed:", error);
    throw error;
  }
};

const handlePaymentSuccess = async (response: any, orderId: string) => {
  try {
    const verifyResponse = await fetch("/api/verify-payment", {
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

    if (data.success) {
      // Clear cart and redirect to success page
      localStorage.setItem("cart", "[]");
      window.location.href = "/order-success";
    } else {
      throw new Error("Payment verification failed");
    }
  } catch (error) {
    console.error("Payment verification failed:", error);
    window.location.href = "/order-failed";
  }
};
