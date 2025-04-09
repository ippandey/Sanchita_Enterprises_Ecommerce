import React, { useState } from "react";
import AllProducts from "./../assets/AllProducts.jpg";
import Categories from "./../Components/ShopPage/Categories";
import Filters from "../Components/ShopPage/Filters";
import Products from "../Components/ShopPage/Products";
import { useData } from "../Context/DataContext";
import { motion } from "framer-motion";

const Shop = () => {
  const { products } = useData();

  const [filters, setFilters] = useState({
    availability: [],
    size: [],
    category: [],
    price: [0, 10000],
  });

  const handleFilterChange = (updatedFilters) => {
    setFilters({
      availability: updatedFilters.availability || [],
      size: updatedFilters.size || [],
      category: updatedFilters.category || [],
      price: updatedFilters.price || [0, 10000],
    });
  };

  return (
    <section className="border-b border-[#202025]">
      {/* Image section */}
      <div className="relative text-center overflow-hidden">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          exit={{ scale: 1.2 }}
          transition={{ duration: 2 }}
        >
          <img
            src={AllProducts}
            alt="All Products"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Breadcrumb */}
        <div className="absolute top-5 left-6 text-white text-base font-work">
          Home / Shop
        </div>

        {/* Centered Content */}
        <div className="absolute flex flex-col inset-0 items-center justify-center">
          <h3 className="font-cormorant text-[44px] text-white font-medium">
            All Products
          </h3>
          <p className="font-work font-normal text-base text-white">
            Shop now, not later. High-quality solutions tailored for textile
            manufacturing and other industries.
          </p>
        </div>
      </div>

      {/* Categories */}
      <Categories />

      {/* Main Content */}
      <div className="flex flex-wrap gap-10 m-16">
        <Filters onFilterChange={handleFilterChange} />
        <div className="flex-1">
          <Products filters={filters} productList={products} />
        </div>
      </div>
    </section>
  );
};

export default Shop;
