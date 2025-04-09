import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { CiViewList } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="h-screen px-10 py-5 m-5 border-r shadow-md">
      {/* Add Product */}
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="flex items-center justify-center font-work rounded-md bg-gray-100 gap-5 cursor-pointer text-xl font-light mb-5 p-5 shadow-sm">
          <PiShoppingCartSimpleBold />
          <p>Add Product</p>
        </div>
      </Link>

      {/* List Product */}
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="flex items-center justify-center font-work rounded-md bg-gray-100 gap-5 cursor-pointer text-xl font-light mb-5 p-5 shadow-sm">
          <CiViewList />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
