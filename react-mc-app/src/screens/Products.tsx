import { useState, useMemo, useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";

import { MenuItem } from "../interface";
import { menuData, categories } from "../constants/menuData";
import { ProductCard } from "../components";

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

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const filteredProducts = useMemo(() => {
    const searchTerms = searchQuery.toLowerCase().split(" ");

    return menuData.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

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

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
                    : "bg-white text-black   dark:bg-gray-800 dark:text-white"
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

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Products;
