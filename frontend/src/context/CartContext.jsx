import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pet) => {
    setCartItems([...cartItems, pet]);
  };

  const removeFromCart = (petId) => {
    setCartItems(cartItems.filter(item => item._id !== petId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      getTotalAmount
    }}>
      {children}
    </CartContext.Provider>
  );
};
