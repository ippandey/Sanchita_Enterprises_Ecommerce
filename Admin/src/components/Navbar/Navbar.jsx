import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex justify-between items-center py-4 px-16">
        {/* Logo section */}
        <div className="text-2xl flex items-center gap-3">
          <FaShoppingBag />
          <p className="font-cormorant uppercase font-medium tracking-wide">
            Sanchita Enterprises
          </p>
        </div>

        {/* Search section */}
        <div className="flex items-center gap-10 md:gap-4">
          <button className="text-2xl hover:bg-black hover:text-white rounded-full p-2 duration-200">
            <CiSearch />
          </button>

          {/* Login Button */}
          <button className="w-24 h-10 text-center font-work text-[#202025] border-[1px] border-[#202025] rounded-md hover:bg-[#202025] hover:text-white">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
