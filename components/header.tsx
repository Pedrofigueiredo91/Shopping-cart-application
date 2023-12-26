"use client";

import React from "react";
import Link from "next/link";
import Container from "./container";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const Header: React.FC = () => {
  return (
    <div className="bg-bodycolor h-20 mg:mb-20">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Link href={"/"}>
          <h3 className="text-3xl font-semibold ">Tangent</h3>
        </Link>
        <div className="w-full hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 ">
          <FiSearch />
          <input
            type="text"
            placeholder="Search for products"
            className="placeholder:text-sm flex-1 outline-none"
          />
        </div>
        <Link href={"/"}>
          <div className="bg-bgLight text-gray-500 flex items-center justify-center p-1.5 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-black duration-200">
            <AiOutlineUser className="text-2xl" />
            <p className="text-sm font-semibold ">Login/Register</p>
          </div>
        </Link>
        <Link rel="stylesheet" href="/cart">
          <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 boder-[1px] border-black relative">
            <AiOutlineShoppingCart className=" text-2xl" />
            <p className="text-sm font-semi-bold">£5.00</p>
            <span className="bg-white text-black rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-white">
              0
            </span>
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default Header;
