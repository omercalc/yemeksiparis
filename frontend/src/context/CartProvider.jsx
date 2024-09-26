import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevItems) => [...prevItems, product]);
  };

  return (
    <CartContext.Provider value={{cart, handleAddToCart, }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;
