import Razorpay from "razorpay";
// import crypto from "crypto";

const razorpay = new Razorpay({
  key_id: import.meta.env.VITE_RAZORPAY_KEY_ID,
  key_secret: import.meta.env.VITE_RAZORPAY_KEY_SECRET,
});

export const createOrder = async (req: any, res: any) => {
  try {
    const { amount, cart, userDetails } = req.body;

    const options = {
      amount,
      currency: "INR",
      receipt: `order_${Date.now()}`,
      notes: {
        cart: JSON.stringify(cart),
        userDetails: JSON.stringify(userDetails),
      },
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error("Order creation failed:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
};

// export const verifyPayment = (req: any, res: any) => {
//   try {
//     const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
//       req.body;

//     const body = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
//       .update(body.toString())
//       .digest("hex");

//     const isAuthentic = expectedSignature === razorpay_signature;

//     if (isAuthentic) {
//       // Save order details to database here
//       res.json({ success: true });
//     } else {
//       res.status(400).json({ success: false });
//     }
//   } catch (error) {
//     console.error("Payment verification failed:", error);
//     res.status(500).json({ success: false });
//   }
// };
