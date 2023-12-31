import React, { useContext, useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { FaMinus, FaPlus, } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import Image from "next/image";

const Cart: React.FC = () => {
  const context = useContext(CartContext);

  const [isToastShown, setIsToastShown] = useState(false);

  if (!context) {
    return <p>Cart cannot be loaded at the moment.</p>;
  }

  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    calculateTotal,
    calculateTotalDiscount,
  } = context;

  const confirmRemoval = (itemId: number) => {
    if (!isToastShown) {
      setIsToastShown(true);
      toast(
        (t) => (
          <div className="rounded-md bg-white p-3">
            <h3 className="text-lg">
              Are you sure you want to delete this item from your cart?
            </h3>
            <div className="flex justify-around mt-4">
              <button
                className="px-4 py-2 rounded-md bg-white"
                onClick={() => {
                  toast.dismiss(t.id);
                  setIsToastShown(false);
                }}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
                onClick={() => {
                  removeFromCart(itemId);
                  toast.dismiss(t.id);
                  setIsToastShown(false);
                }}
              >
                Yes, I'm sure
              </button>
            </div>
          </div>
        ),
        {
          id: "removal-confirmation",
          duration: Infinity,
        }
      );
    }
  };
  return (
    <section className="items-center py-24 bg-gray-50 font-poppins">
      <Toaster />
      <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
        <h2 className="mb-10 text-4xl font-bold text-center">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-xl text-center mb-4">Your cart is empty.</p>
        ) : (
          <div className="mb-10">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-wrap items-center pb-8 mb-8 -mx-4 border-b border-gray-200 xl:justify-between border-opacity-40"
              >
                <div className="w-full mb-4 md:mb-0 h-96 md:h-44 md:w-56">
                  <Image
                    alt="Thumbnail"
                    width={192}
                    height={192}
                    quality={95}
                    priority={true}
                    src={item.thumbnail}
                    className="object-cover w-full h-full rounded-lg "
                  />
                </div>
                <div className="w-full px-4 mb-6 md:w-96 xl:mb-0">
                  <a
                    className="block mb-5 text-xl font-medium hover:underline"
                    href="#"
                  >
                    {item.title}
                  </a>
                  <div className="flex flex-wrap"></div>
                </div>
                <div className="w-full px-4 mt-6 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
                  <div className="flex items-center">
                    <h2 className="mr-4 font-medium">Qty:</h2>
                    <div className="inline-block display: items-center px-4 font-semibold text-black border border-gray-300 rounded-md">
                      <button
                        onClick={() =>
                          item.quantity === 1
                            ? confirmRemoval(item.id)
                            : updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <FaMinus />
                      </button>
                      <input
                        type="number"
                        className="w-12 px-2 py-4 text-center border-0 rounded-md bg-gray-50"
                        value={item.quantity}
                        readOnly
                      />
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="py-2 pl-2 bg-inherit border-l border-gray-300 hover:text-gray-700"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 xl:w-auto">
                  <span className="text-gray-400 line-through mr-2">
                    £{(item.quantity * item.price).toFixed(2)}
                  </span>
                  <span className="text-xl font-medium text-black position-fixed">
                    £
                    {(
                      (item.price -
                        (item.price * item.discountPercentage) / 100) *
                      item.quantity
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
            <div className="px-10 py-3 bg-gray-100 rounded-md ">
              <div className="flex justify-between">
                <span className="font-medium">Total</span>
                <div className="text-right"></div>
                <span className="font-bold text-gray-500 line-through">
                  £{calculateTotalDiscount().toFixed(2)}
                </span>
                <span className="font-bold ">
                  £{calculateTotal().toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="text-right">
          <Link
            href={"/"}
            className="inline-block w-full px-8 py-4 mb-4 mr-6 font-bold text-center uppercase transition duration-200 bg-gray-100 border rounded-md hover:bg-gray-200 md:mb-0 md:w-auto"
          >
            Continue Shopping
          </Link>
          <Link
            href={"/"}
            className="inline-block w-full px-8 py-4 font-bold text-center text-white uppercase transition duration-200 bg-blue-500 rounded-md md:w-auto hover:bg-blue-600 "
          >
            Go to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
