import { useState, useMemo, useEffect } from "react";
import { MdInfoOutline } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { IoSearch } from "react-icons/io5";

import { menuData, categories } from "../constants/menuData";
import Modal from "../components/Modal";
import { CartItem, MenuItem } from "../interface";

// Helper function remains the same
const getCategoryDescription = (category: string): string => {
  switch (category) {
    case "Burgers":
      return "Our signature burgers made with premium ingredients and special sauces";
    case "Wraps":
      return "Delicious wraps filled with fresh ingredients and unique flavors";
    case "Snacks":
      return "Perfect sides and small bites to complement your meal";
    case "Sides":
      return "Classic accompaniments to complete your McDonald's experience";
    case "Desserts":
      return "Sweet treats and delightful desserts to end your meal";
    case "Beverages":
      return "Refreshing drinks and beverages to quench your thirst";
    default:
      return "";
  }
};
// Add cart hooks
const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const getItemQuantity = (productId: number) => {
    return cart.find((item) => item.id === productId)?.quantity || 0;
  };

  return { cart, addToCart, removeFromCart, getItemQuantity };
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Memoize filtered products to prevent unnecessary recalculations
  const filteredProducts = useMemo(() => {
    const searchTerms = searchQuery.toLowerCase().split(" ");

    return menuData.filter((item) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      // Search filter - check if all search terms are found
      const matchesSearch = searchTerms.every((term) =>
        [
          item.name,
          item.description,
          item.category,
          item.price.toString(),
        ].some((field) => field.toLowerCase().includes(term))
      );

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Group products by category when showing all
  const groupedProducts = useMemo(() => {
    if (selectedCategory !== "All") return null;

    return filteredProducts.reduce((acc, product) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {} as Record<string, MenuItem[]>);
  }, [filteredProducts, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Menu</h1>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="md:w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search menu items..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 dark:bg-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" */}
              <div className="absolute left-3 top-2.5 h-5 w-5 text-gray-400">
                <IoSearch size={22} />
              </div>
              {searchQuery && (
                <button
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 "
                  onClick={() => setSearchQuery("")}
                >
                  <div className="h-5 w-5">
                    <ImCancelCircle size={22} />
                  </div>
                </button>
              )}
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide ">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-yellow-400 text-gray-900 font-semibold  "
                    : "bg-gray-100 text-gray-600   dark:bg-gray-800 dark:text-white"
                } `}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Category Description */}
        {selectedCategory !== "All" && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6 dark:bg-gray-800 ">
            <h2 className="font-semibold text-lg text-gray-900 mb-1  dark:text-white">
              {selectedCategory}
            </h2>
            <p className="text-gray-600 text-sm  dark:text-white">
              {getCategoryDescription(selectedCategory)}
            </p>
          </div>
        )}
      </div>

      {/* Products Grid */}
      {selectedCategory === "All" && groupedProducts ? (
        // Grouped view when "All" is selected
        Object.entries(groupedProducts).map(([category, products]) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))
      ) : (
        // Regular grid for filtered products
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {filteredProducts.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">
            No items found matching your criteria.
          </p>
          <button
            className="mt-4 text-yellow-600 hover:text-yellow-700"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

// Update ProductCard component
const ProductCard = ({ product }: { product: MenuItem }) => {
  const [showModal, setShowModal] = useState(false);
  const { addToCart, removeFromCart, getItemQuantity } = useCart();
  const quantity = getItemQuantity(product.id);

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 relative flex flex-col justify-between">
      {/* Info Icon */}
      <button
        onClick={() => setShowModal(true)}
        className="absolute top-2 right-2 z-10 p-2 bg-white bg-opacity-75 rounded-full hover:bg-opacity-100"
      >
        <MdInfoOutline color="black" size={20} />
      </button>

      {/* Product Image */}
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
        <div className="flex items-center justify-between ">
          <p className="text-lg font-bold text-red-600">
            ₹{product.price.toFixed(2)}
          </p>

          {/* Cart Controls */}
          {quantity === 0 ? (
            <button
              onClick={() => addToCart(product)}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold p-2 rounded"
              >
                -
              </button>
              <span className="font-semibold">{quantity}</span>
              <button
                onClick={() => addToCart(product)}
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

      {/* Product Details Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        product={product}
        quantity={quantity}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      {/* <ModalInfo /> */}
    </div>
  );
};

export default Products;
