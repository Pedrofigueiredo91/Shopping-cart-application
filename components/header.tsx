"use client";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="relative">
            <Link rel="stylesheet" href="/cart" >
              <AiOutlineShoppingCart/>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
