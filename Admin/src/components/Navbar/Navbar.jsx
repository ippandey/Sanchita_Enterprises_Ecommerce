import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { LuCircleUserRound } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center py-4 px-6 sm:px-8 md:px-10">
        {/* Logo section */}
        <Link
          to="/"
          className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl"
        >
          <FaShoppingBag className="text-xl sm:text-2xl" />
          <p className="font-cormorant uppercase font-medium tracking-wide whitespace-nowrap">
            Sanchita Enterprises
          </p>
        </Link>

        {/* Search and Profile */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button className="text-xl sm:text-2xl hover:bg-black hover:text-white rounded-full p-2 duration-200">
            <CiSearch />
          </button>

          <Link
            to="/owner-profile"
            className="text-xl sm:text-2xl hover:bg-black hover:text-white rounded-full p-2 duration-200"
          >
            <LuCircleUserRound />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
