import { useState } from "react";
import { CartItem, Product } from "../types/types";

export const useCartActions = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product): void => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      return existingItem
        ? prevItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number): void => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number): void => {
    setCartItems(prevItems => prevItems.map(item => item.id === productId ? { ...item, quantity } : item));
  };

  const calculateDiscountedPrice = (price: number, discountPercentage: number): number => {
    return price - (price * discountPercentage) / 100;
  };

  const calculateTotal = (): number => {
    return cartItems.reduce((total, item) => total + calculateDiscountedPrice(item.price, item.discountPercentage) * item.quantity, 0);
  };

  const calculateTotalDiscount = () => {
    return cartItems.reduce((totalDiscount, item) => {
      const discountForItem = item.price * (item.discountPercentage / 100) * item.quantity;
      return totalDiscount + discountForItem;
    }, 0);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    calculateTotal,
    calculateTotalDiscount
  };
};
