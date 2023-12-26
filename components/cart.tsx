import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart: React.FC = () => {
  const context = useContext(CartContext);

  if (!context) {
    return <p>Cart cannot be loaded at the moment.</p>;
  }

  const { cartItems, removeFromCart, updateQuantity, calculateTotal } = context;

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <h2>{item.title}</h2>
                <img src={item.thumbnail} alt={`${item.title}`} />
                <p>Original Price: £{item.price.toFixed(2)}</p>
                <p>Discount: {item.discountPercentage.toFixed(0)}%</p>
                <p>Final Price: £{(item.price - (item.price * item.discountPercentage / 100)).toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
              </li>
            ))}
          </ul>
          <div>
            <strong>Total: £{calculateTotal().toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;