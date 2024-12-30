import { useState } from "react";

import { MenuItem } from "../interface";
import { MdInfoOutline } from "react-icons/md";
import Modal from "./Modal";
import { useCart } from "../context/CartContext";

export const ProductCard = ({ product }: { product: MenuItem }) => {
  const [showModal, setShowModal] = useState(false);
  const { getItemQuantity, increaseCartQantity, decreaseCartQantity } =
    useCart();

  const quantity = getItemQuantity(product.id);

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 relative flex flex-col justify-between">
      <button
        onClick={() => setShowModal(true)}
        className="absolute top-2 right-2  p-2 bg-white bg-opacity-75 rounded-full hover:bg-opacity-100"
      >
        <MdInfoOutline color="black" size={20} />
      </button>

      <div className="aspect-w-16 aspect-h-9 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
          loading="lazy"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 dark:text-white">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-red-600">
            ₹{product.price.toFixed(2)}
          </p>

          {/* Cart Controls */}
          {quantity === 0 ? (
            <button
              onClick={() => increaseCartQantity(product)}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseCartQantity(product)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold p-2 rounded"
              >
                -
              </button>
              <span className="font-semibold">{quantity}</span>
              <button
                onClick={() => increaseCartQantity(product)}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold p-2 rounded"
              >
                +
              </button>
            </div>
          )}
        </div>
        <div className="text-xs text-gray-500 dark:text-white">
          <p>Serving: {product.serving_size}</p>
          <p>Calories: {product.nutrition.energy}</p>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        product={product}
        quantity={quantity}
        addToCart={increaseCartQantity}
        removeFromCart={decreaseCartQantity}
      />
    </div>
  );
};
