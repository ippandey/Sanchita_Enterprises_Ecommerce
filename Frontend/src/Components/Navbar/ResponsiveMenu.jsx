import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const NavbarMenu = [
  { title: "Home", path: "/home" },
  { title: "Shop", path: "/shop" },
  { title: "Blogs", path: "#blogs" },
  { title: "Contact", path: "#contact" },
];

const ResponsiveMenu = ({ open, setOpen, user }) => {
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
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-[#1a1a1a] text-white rounded-xl p-6 w-[80%] max-w-sm shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col items-center gap-6 text-sm uppercase font-medium">
              {NavbarMenu.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="hover:underline"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
              {!user && (
                <li>
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
