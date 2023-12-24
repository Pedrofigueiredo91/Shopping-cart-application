
import { useState } from "react";
import { CartItem, Product } from "../types/types";

export const useCartActions = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.id === product.id);
        if (existingItem) {
          return prevItems.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            
          );
        }
        return [...prevItems, {
          id: product.id,
          title: product.title, 
          price: product.price,
          thumbnail: product.thumbnail, // note: include default thumbnail on final build//
          quantity: 1,
          
        }];
      });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems =>
        prevItems.filter(item => item.id !== productId)
      );
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
  };

  return { cartItems, addToCart, removeFromCart, updateQuantity };
};
