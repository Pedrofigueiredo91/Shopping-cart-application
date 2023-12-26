'use client'
import React from "react";
import { CartContext } from "./CartContext";
import { useCartActions } from "../hooks/useCartActions";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cart = useCartActions();

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};