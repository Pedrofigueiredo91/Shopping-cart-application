"use client";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <nav >
        <div >
          <div >
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
