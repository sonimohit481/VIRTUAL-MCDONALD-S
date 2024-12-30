import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";

import {
  initializePayment,
  processOrder,
  verifyPayment,
} from "../services/paymentService";
import { useAuth } from "../context/AuthContext";
import { MenuItem } from "../interface";
import { PaymentModal } from "../components";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    clearCart,
    removeFromCart,
    increaseCartQantity,
    decreaseCartQantity,
  } = useCart();

  const { user } = useAuth();

  const navigate = useNavigate();

  const [cart, setCart] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<
    "preparing" | "verified" | "failed"
  >("preparing");

  useEffect(() => {
    if (cartItems) {
      setCart(cartItems);
    }
    setLoading(false);
  }, [cartItems]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qan, 0);
  };

  const handleCheckout = async () => {
    if (!user) {
      navigate("/auth");
      return;
    }

    try {
      setIsProcessing(true);

      const userDetails = {
        name: user.name || "Guest",
        email: user.email || "temp@temp.com",
        phone: "0987654321",
      };

      await initializePayment(cart, userDetails, async (response, orderId) => {
        setShowModal(true);
        setModalMessage("Verifying payment...");
        setModalType("preparing");
        setIsProcessing(false);

        try {
          const verified = await new Promise(
            (resolve) =>
              setTimeout(
                async () => resolve(await verifyPayment(response, orderId)),
                2000
              ) // Simulate delay
          );

          if (verified) {
            setModalMessage("Payment verified! Processing your order...");
            setModalType("verified");
            setTimeout(async () => {
              await processOrder(cart, user.$id);
              setModalMessage("Order placed successfully!");
              setCart([]);
              localStorage.setItem("cart", "[]");

              setShowModal(false);
              navigate("/orders");
            }, 2000);
          } else {
            setModalMessage("Payment verification failed! Please try again.");
            setModalType("failed");
            setTimeout(() => setShowModal(false), 3000);
          }
        } catch (error) {
          console.error("Verification error:", error);
          setModalMessage("An error occurred during payment verification.");
          setModalType("failed");
          setTimeout(() => setShowModal(false), 3000);
        }
      });
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("Checkout failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-8">
            Add some delicious items from our menu!
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PaymentModal
        isVisible={showModal}
        message={modalMessage}
        type={modalType}
        onClose={() => setShowModal(false)}
      />

      <div className="flex justify-between items-center mb-8 ">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Your Cart
        </h1>
        <button
          onClick={clearCart}
          className="text-red-600 hover:text-red-700 font-semibold"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4 ">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 flex gap-4 dark:bg-gray-800 dark:text-white"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    // onClick={() => removeItem(item.id)}
                    className="text-gray-400"
                  >
                    <ImCancelCircle
                      size={24}
                      className="dark:bg-gray-800 dark:text-white hover:text-red-600"
                    />
                  </button>
                </div>
                <p className="text-gray-600 text-sm mb-2 dark:bg-gray-800 dark:text-white">
                  {item.serving_size} • {item.nutrition.energy}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseCartQantity(item)}
                      // onClick={() => updateQuantity(item.id, item.qan - 1)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded"
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.qan}</span>
                    <button
                      onClick={() => increaseCartQantity(item)}
                      // onClick={() => updateQuantity(item.id, item.qan + 1)}
                      className="bg-yellow-400 hover:bg-gray-200 text-gray-700 font-bold py-1 px-3 rounded"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-bold text-gray-900 dark:bg-gray-800 dark:text-white">
                    ₹{(item.price * item.qan).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4 dark:bg-gray-800 dark:text-white">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600 dark:bg-gray-800 dark:text-white">
                <span>Subtotal</span>
                <span>₹{calculateTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:bg-gray-800 dark:text-white">
                <span>Delivery Fee</span>
                <span>₹40.00</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:bg-gray-800 dark:text-white">
                <span>Tax (5%)</span>
                <span>₹{(calculateTotal() * 0.05).toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{(calculateTotal() * 1.05 + 40).toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className={`w-full flex justify-center items-center py-3 px-4 rounded ${
                isProcessing
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-400 hover:bg-yellow-500"
              } text-gray-900 font-bold`}
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 mr-2"></div>
                  Processing...
                </>
              ) : (
                "Proceed to Checkout"
              )}
            </button>
            <Link
              to="/products"
              className="block text-center mt-4 text-yellow-600 hover:text-yellow-700 font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
