'use client'
import React from 'react';
import { useCart } from '../context/CartContext';
import { CartItem } from '../types/types';

const Cart: React.FC = () => {
    const { items, updateQuantity, removeFromCart } = useCart();

    const getTotalPrice = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className=''>
            {items.map(item => (
                <div key={item.id}>
                    <img src={item.thumbnail} alt={item.title} />
                    <p>{item.title}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
            <div>Total: £{getTotalPrice().toFixed(2)}</div>
        </div>
    );
};

export default Cart;