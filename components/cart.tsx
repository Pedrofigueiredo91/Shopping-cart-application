import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart: React.FC = () => {
  const context = useContext(CartContext);

  if (!context) {
    return <p>Cart cannot be loaded at the moment.</p>;
  }

  const { cartItems, removeFromCart, updateQuantity, calculateTotal } = context;

  return (
    <div className="bg-gray-100 h-screen py-8 mt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4 sm:flex-col-2">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr className='flex flex-col sm:flex-row'>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className='flex flex-col sm:flex-row'>
                      <td className="py-4 flex flex-col">
                        <div className="flex items-center">
                          <img className="h-16 w-16 mr-4 object-fill" src={item.thumbnail} alt="Product" />
                          <span className="font-semibold">{item.title}</span>
                        </div>
                      </td>
                      <td className="py-4">£{item.price.toFixed(2)}</td>
                      <td className="py-4 flex flex-col">
                        <div className="flex items-center">
                          <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="border rounded-md py-2 px-4 mr-2">-</button>
                          <span className="text-center w-8">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="border rounded-md py-2 px-4 ml-2">+</button>
                        </div>
                      </td>
                      <td className="py-4">£{(item.quantity * item.price).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>£{calculateTotal().toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">£{calculateTotal().toFixed(2)}</span>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
