import React from "react";
import bigpic1 from "./../../assets/bigpic1.webp";
import bigpic2 from "./../../assets/bigpic2.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BigBanners = () => {
  const BigBannersList = [
    {
      id: 1,
      image: bigpic1,
      heading: "High-Performance Chemicals",
    },
    {
      id: 2,
      image: bigpic2,
      heading: "Custom Textile Solutions",
    },
  ];

  return (
    <section>
      <div className="flex">
        {BigBannersList.map((product) => (
          <div className="relative overflow-hidden" key={product.id}>
            {/* Motion Image with Overlay Inside */}
            <div className="relative">
              <motion.img
                src={product.image}
                alt={product.heading}
                className="w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
            </div>

            {/* Text Content */}
            <div className="absolute bottom-6 left-6 p-5 z-10">
              <h3 className="text-4xl text-white font-cormorant font-medium pb-3">
                {product.heading}
              </h3>
              <Link to="/shop">
                <button className="uppercase text-white text-sm font-work underline font-medium">
                  shop now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BigBanners;
