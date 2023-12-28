"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../types/types";
import { useCart } from "../hooks/useCart";
const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Data could not be retrieved from the API");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  const calculateDiscountedPrice = (
    price: number,
    discountPercentage: number
  ): number => {
    return price - price * (discountPercentage / 100);
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error : {error}</div>;

  return (
    <div className="max-w-7xl mx-auto mt-10 grid gap-4 p-4 grid-cols-1 md:grid-cols-2 lg:xl:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative m-6 p-5 py-12 bg-white rounded-lg shadow-lg transform duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
        >
          <div className="w-64 h-64 p-4 group">
            <Image
              width={500}
              height={500}
              src={product.thumbnail}
              alt="product thumbnail"
              className="w-full h-full rounded-lg object-cover duration-200 group-hover:scale-110"
            />
          </div>
          <h1 className="text-gray-900 font-semibold text-xl tracking-tight mb-3">{product.title}</h1>
          <p className="mb-5">{product.description}</p>
          <h2 className="mb-5 font-semibold">
            £
            {calculateDiscountedPrice(
              product.price,
              product.discountPercentage
            ).toFixed(2)}
            <span className="ml-2 line-through text-gray-400">
              £{product.price}
            </span>{" "}
          </h2>
          <button
            className="p-2 px-6 bg-teal-500 text-white rounded-md hover:bg-teal-600"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
          <div className="absolute top-5 right-2 p-2 px-5 bg-red-600 text-white font-semibold uppercase">
            {Math.round(product.discountPercentage)}% Off
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
