// import items from "razorpay/dist/types/items";
// import React, { createContext, useState, useContext, useEffect } from "react";
// import { MenuItem } from "../interface";

// interface CartContextData {
//   cartItems: MenuItem[] | null;
//   getItemQuantity: (id: number) => number;
//   increaseCartQantity: (args: MenuItem) => void;
//   decreaseCartQantity: (args: MenuItem) => void;
//   removeFromCart: (args: MenuItem) => void;
// }

// const CartContext = createContext<CartContextData | null>(null);

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cartItems, setCartItems] = useState<MenuItem[]>([]);

//   const getItemQuantity = (id: number) => {
//     return cartItems.find((item: MenuItem) => item.id == id)?.qan || 0;
//   };

//   const increaseCartQantity = (product: MenuItem) => {
//     setCartItems((currItems: MenuItem[]) => {
//       if (currItems.find((item) => item.id === product.id) == null) {
//         return [...currItems, { ...product, qan: product.qan + 1 }];
//       } else {
//         return currItems?.map((item: MenuItem) => {
//           if (item.id == product.id) {
//             return { ...item, qan: item.qan + 1 };
//           } else {
//             return item;
//           }
//         });
//       }
//     });
//   };

//   const decreaseCartQantity = (product: MenuItem) => {
//     setCartItems((currItems: MenuItem[]) => {
//       if (currItems.find((item) => item.id === product.id)?.qan == 1) {
//         return currItems.filter((item) => item.id !== product.id);
//       } else {
//         return currItems?.map((item: MenuItem) => {
//           if (item.id == product.id) {
//             return { ...item, qan: item.qan - 1 };
//           } else {
//             return item;
//           }
//         });
//       }
//     });
//   };

//   const removeFromCart = (product: MenuItem) => {
//     setCartItems((currItems: MenuItem[]) => {
//       return currItems.filter((item) => item.id !== product.id);
//     });
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         getItemQuantity,
//         increaseCartQantity,
//         decreaseCartQantity,
//         removeFromCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("!! useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

import React, { createContext, useState, useContext, useEffect } from "react";
import { MenuItem } from "../interface";

interface CartContextData {
  cartItems: MenuItem[] | null;
  getItemQuantity: (id: number) => number;
  increaseCartQantity: (args: MenuItem) => void;
  decreaseCartQantity: (args: MenuItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  cartLength: number; // Length of cart
}

const CartContext = createContext<CartContextData | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<MenuItem[]>(() => {
    // Initialize from local storage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sync to local storage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item: MenuItem) => item.id === id)?.qan || 0;
  };

  const increaseCartQantity = (product: MenuItem) => {
    setCartItems((currItems: MenuItem[]) => {
      if (currItems.find((item) => item.id === product.id) == null) {
        return [...currItems, { ...product, qan: 1 }]; // Start with quantity 1
      } else {
        return currItems.map((item: MenuItem) => {
          if (item.id === product.id) {
            return { ...item, qan: item.qan + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQantity = (product: MenuItem) => {
    setCartItems((currItems: MenuItem[]) => {
      if (currItems.find((item) => item.id === product.id)?.qan === 1) {
        return currItems.filter((item) => item.id !== product.id);
      } else {
        return currItems.map((item: MenuItem) => {
          if (item.id === product.id) {
            return { ...item, qan: item.qan - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currItems: MenuItem[]) => {
      return currItems.filter((item) => item.id !== id);
    });
  };
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        getItemQuantity,
        increaseCartQantity,
        decreaseCartQantity,
        removeFromCart,
        clearCart,
        cartLength: cartItems.length, // Length of the cart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("!! useCart must be used within a CartProvider");
  }
  return context;
};
