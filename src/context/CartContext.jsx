import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Optional: avoid duplicates
    const isAlreadyAdded = cartItems.find(item => item.id === product.id);
    if (!isAlreadyAdded) {
      setCartItems([...cartItems, product]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
