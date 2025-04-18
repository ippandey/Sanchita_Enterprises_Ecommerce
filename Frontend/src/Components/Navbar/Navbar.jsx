import React, { useState, useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin, PiUserCircleLight } from "react-icons/pi";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { CartContext } from "../../Context/CartContext";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { cartCount } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const NavbarMenu = [
    { title: "Home", path: "/home" },
    { title: "Shop", path: "/shop" },
    { title: "Blogs", path: "#blogs" },
    { title: "Contact", path: "#contact" },
  ];

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path.startsWith("#")) {
      // Go to home then scroll
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(path);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100); // Give time for home to render
    } else {
      navigate(path);
    }
    setOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container flex justify-between items-center py-4 px-4 md:px-16">
          {/* Logo Section */}
          <div className="text-xl md:text-2xl lg:text-3xl flex items-center gap-2">
            <Link to="/home" className="flex items-center gap-2">
              <FaShoppingBag />
              <p className="font-cormorant uppercase font-medium tracking-wide text-base md:text-lg lg:text-xl">
                Sanchita Enterprises
              </p>
            </Link>
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="inline-block px-2 uppercase hover:underline font-work text-sm font-medium"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="text-2xl hover:bg-black hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>

            <Link to="/cart">
              <button className="text-2xl hover:bg-black hover:text-white rounded-full p-2 duration-200 relative">
                <PiShoppingCartThin />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-2xl hover:bg-black hover:text-white rounded-full p-2 duration-200"
                >
                  <PiUserCircleLight />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg overflow-hidden">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm font-work text-gray-700 hover:bg-gray-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 font-work text-sm text-red-600 hover:bg-gray-200"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="hidden md:block">
                <button className="w-24 h-10 text-center font-medium font-work text-[#202025] border border-[#202025] rounded-md hover:bg-[#202025] hover:text-white transition">
                  Login
                </button>
              </Link>
            )}

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <MdMenu
                className="text-3xl cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>
        </div>
      </nav>

      <ResponsiveMenu open={open} setOpen={setOpen} user={user} />
    </>
  );
};

export default Navbar;
