"use client"
import React, { useEffect, useState } from "react";

import { Product } from "../types/types";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
      }finally{ 
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error : {error}</div>;

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.thumbnail} alt="product.title" />
          <h3>{product.title}</h3>
          <p>{product.rating}</p>
          <p>£{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
