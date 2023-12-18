import Image from "next/image";
import Cart from '../../components/cart'
import Products from "../../components/products";
import { CartProvider } from "../../context/CartContext";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CartProvider>
        <Products/>
        <Cart/>
      </CartProvider>
    </main>
  );
}
