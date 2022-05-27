import React from "react";
import { AiOutlineHeart, AiOutlineMail, AiFillCaretDown } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Navbar = () => {
  return (
    <div>
      <div className="bg-sky-400 md:w-full w-auto flex items-center justify-between pr-6 pl-6 py-2 z-[100} flex-wrap md:flex-nowrap">
        <h1 className="text-white text-4xl cursor-pointer">GrabOne</h1>
        <div className="text-white cursor-pointer rounded text-2xl mr-4">
          <button>
            <HiOutlineLocationMarker />
          </button>
          <button className="text-xl py-2"> Auckland </button>
          <button className="py-2">
            <AiFillCaretDown />
          </button>
          <button className="px-4 py-2">
            <AiOutlineHeart />
          </button>
          <button className="px-4 py-2">
            <FiShoppingCart />
          </button>
          <button className="ml-4">
            <CgProfile />
          </button>
          <button className="mr-4">
            <AiFillCaretDown />
          </button>
          <button className="mr-2">
            <AiOutlineMail />
          </button>
          <button className="text-xl">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
