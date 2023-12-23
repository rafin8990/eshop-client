/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/carts")
      .then((res) => res.json())
      .then((data) => setCartData(data));
  }, []);

  const updateCartData = (newCartData) => {
    setCartData(newCartData);
  };


  return (
    <CartContext.Provider value={{ cartData,updateCartData}}>
      {children}
    </CartContext.Provider>
  );
};
