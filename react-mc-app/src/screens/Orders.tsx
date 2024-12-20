import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

import orderService from "../appwrite/config";

interface Order {
  $id: string;
  userId: string;
  itemNames: string;
  totalItems: number;
  total: number;
  status: string;
  createdAt: string;
}

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState<{
    isVisible: boolean;
    orderId: string | null;
  }>({
    isVisible: false,
    orderId: null,
  });

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;
      try {
        const orderData = await orderService.getOrdersByUser(user.$id);
        setOrders(
          orderData?.map((order: any) => ({
            ...order,
            createdAt: new Date(order.createdAt),
          }))
        );
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [user]);

  const totalCost = orders.reduce((sum, order) => sum + order.total, 0);
  const totalItems = orders.length;

  const handleDeleteOrder = async () => {
    if (!deleteModal.orderId) return;
    try {
      const success = await orderService.deleteOrder(deleteModal.orderId);
      if (success) {
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order.$id !== deleteModal.orderId)
        );
        setDeleteModal({ isVisible: false, orderId: null });
      } else {
        alert("Failed to delete the order. Try again.");
      }
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900 dark:text-gray-200 ">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Your Orders
      </h1>

      {/* Orders Summary */}
      <div className="mb-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex justify-between items-center">
        <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          <p>
            Total Orders: <span className="text-yellow-600">{totalItems}</span>
          </p>
          <p>
            Total Cost: <span className="text-yellow-600">₹{totalCost}</span>
          </p>
        </div>
        <Link
          to="/products"
          className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600"
        >
          Shop More
        </Link>
      </div>

      {/* Orders List */}
      {orders.length === 0 ? (
        <div className="text-center py-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No orders found
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.$id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-500">
                    Order #{order.$id.slice(-5)}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      order.status === "delivered"
                        ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200"
                        : order.status === "processing"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {order.status.charAt(0).toUpperCase() +
                      order.status.slice(1)}
                  </span>
                  <button
                    onClick={() =>
                      setDeleteModal({ isVisible: true, orderId: order.$id })
                    }
                    className="text-red-500 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="border-t pt-4 dark:border-gray-700">
                <div className="space-y-2">
                  {order?.itemNames?.split(",").map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>
                        {index + 1}: {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t mt-4 pt-4 dark:border-gray-700">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹{order.total}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModal.isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 w-96">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Are you sure you want to delete this order?
            </h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() =>
                  setDeleteModal({ isVisible: false, orderId: null })
                }
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteOrder}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
