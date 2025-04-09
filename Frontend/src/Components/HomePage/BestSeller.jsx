import { React, useState } from "react";
// import products from "../../data/products";
import { useData } from "../../Context/DataContext";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const BestSeller = () => {
  const { products } = useData();
  const fiveStarProducts = products.filter((product) => product.ratings >= 0);
  const BestSellerList = fiveStarProducts.slice(0, 5);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  // Ye isliye kiya hai kyuki abhi tak products ka rating nahi set kiya gya hai, so come here after you set ratings for products
  return (
    <section className="overflow-hidden relative">
      <div className="m-20">
        {/* Heading section */}
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.p
            className="text-[#7e7e84] font-work text-sm uppercase mb-4"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            Trusted Products
          </motion.p>

          <motion.h1
            className="text-[44px] font-cormorant capitalize text-[#202025]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            Best Seller Chemicals
          </motion.h1>
        </motion.div>

        {/* Products section */}
        <motion.div
          className="flex gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} //
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {BestSellerList.map((product) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className="block"
            >
              <AnimatePresence>
                <motion.div
                  className="border p-4 shadow-md rounded-lg relative bg-[#f7f4f3]"
                  onMouseEnter={() => setHoveredProductId(product._id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  {product.originalPrice > product.price && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-3 py-1 rounded">
                      Sale -{" "}
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      %
                    </span>
                  )}
                  {hoveredProductId === product._id && (
                    <button className="absolute top-44 left-1/2 transform -translate-x-1/2 w-4/5 bg-white text-[#333333] hover:bg-[#333333] hover:text-white px-4 py-2 rounded-sm shadow-md">
                      Add to Cart
                    </button>
                  )}
                  <img
                    src={
                      hoveredProductId === product._id
                        ? product.gallery[1]
                        : product.gallery[0]
                    }
                    alt={product.title}
                    className="w-full object-cover mb-4 rounded-md transition-all"
                  />
                  <h3 className="text-lg font-medium text-center font-work text-[#333333]">
                    {product.title}
                  </h3>
                  <p className="text-[#555555] font-work text-center mb-2 text-sm">
                    {product.category}
                  </p>
                  <p className="text-[#666666] text-base flex justify-center gap-4 mb-4">
                    <span className="flex gap-[2px]">
                      {Array.from({ length: 5 }).map((_, index) =>
                        index < product.ratings ? (
                          <FaStar key={index} className="text-[#333333]" />
                        ) : (
                          <FaRegStar
                            key={index}
                            className="text-[#666666] rounded-sm"
                          />
                        )
                      )}
                    </span>
                  </p>
                  <div className="flex gap-2 items-center justify-center mb-2">
                    <span className="text-xl font-semibold text-[#333333] font-work">
                      ₹{product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="font-semibold text-[#666666] font-work line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BestSeller;
