import { React, useState } from "react";
import { Link } from "react-router-dom";
// import products from "../../data/products";
import { useData } from "../../Context/DataContext";
import { FaStar, FaRegStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NewArrivals = () => {
  const { products } = useData();
  const newArrivals = products.slice(1, 5);
  const [hoveredProductId, setHoveredProductId] = useState(null);

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
            New Arrivals
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
            Shop Top Sellers
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
          {newArrivals.map((product) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className="block"
            >
              <AnimatePresence>
                <motion.div
                  className="border p-4 shadow-md rounded-lg relative"
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
                  <p className="text-[#555555] text-sm font-work text-center mb-2">
                    {product.description}
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

export default NewArrivals;
