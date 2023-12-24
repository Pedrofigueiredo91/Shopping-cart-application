'use client'
import React from "react";
import { CartContext } from "./CartContext";
import { useCartActions } from "../hooks/useCartActions";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useCartActions();

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};