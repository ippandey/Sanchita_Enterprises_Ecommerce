import { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ListProduct from "../ListProduct/ListProduct";
import AddProduct from "../AddProduct/AddProduct";
import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import Welcome from "../Welcome/Welcome";
import { getProducts } from "../../services/api";
import { RxHamburgerMenu } from "react-icons/rx";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    navigate("/listproduct");
  };

  // 🧠 Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        showSidebar
      ) {
        setShowSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSidebar]);

  return (
    <div className="flex h-screen relative">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed z-30 md:static bg-gray-100 w-64 h-full transition-transform duration-300 ease-in-out ${
          showSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <Sidebar />
      </div>

      {/* Backdrop overlay on small screens */}
      {showSidebar && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden" />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Top bar on mobile */}
        <div className="md:hidden flex items-center justify-between p-4 shadow z-10 bg-white">
          <button onClick={() => setShowSidebar(!showSidebar)}>
            <RxHamburgerMenu size={24} />
          </button>
          <span className="font-semibold text-lg">Admin Dashboard</span>
        </div>

        {/* Route content */}
        <div className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route index element={<Welcome />} />
            <Route
              path="addproduct"
              element={<AddProduct onAdd={handleAddProduct} />}
            />
            <Route path="listproduct" element={<ListProduct />} />
            <Route path="owner-profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
