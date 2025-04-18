import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import dyeing_agents from "./../../assets/dyeing_agents.webp";
import printing_chemicals from "./../../assets/printing_chemicals.webp";
import solvents from "./../../assets/solvents.webp";
import bleaching_agents from "./../../assets/bleaching_agents.webp";
import softening_agents from "./../../assets/softening_agents.webp";

const ShopByCategories = () => {
  const navigate = useNavigate();

  const CategoryList = [
    { img: dyeing_agents, title: "Dye" },
    { img: printing_chemicals, title: "Printing Chemicals" },
    { img: bleaching_agents, title: "Bleaching Agents" },
    { img: softening_agents, title: "Alkaline Agents" },
    { img: solvents, title: "Solvents" },
  ];

  const handleCategoryClick = (category) => {
    navigate(`/shop?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="overflow-hidden relative bg-[#f9f7f0]">
      <div className="mx-4 sm:mx-20 my-10 pb-14">
        {/* Heading Section */}
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
            Explore Cadiant
          </motion.p>

          <motion.h1
            className="text-[32px] sm:text-[44px] font-cormorant capitalize text-[#202025]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            Shop By Categories
          </motion.h1>
        </motion.div>

        {/* Categories Carousel/Grid */}
        <motion.div
          className="flex gap-4 overflow-x-auto sm:flex-wrap sm:justify-center no-scrollbar"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {CategoryList.map((item, index) => (
            <AnimatePresence key={index}>
              <motion.div
                className="text-center cursor-pointer min-w-[180px] sm:w-[18%] flex-shrink-0"
                onClick={() => handleCategoryClick(item.title)}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, ease: "easeOut" },
                  },
                }}
              >
                <div className="relative w-full h-40 mb-2 rounded-md overflow-hidden">
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-md"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 z-10" />
                </div>

                {/* Title below image */}
                <motion.p
                  className="text-lg text-primaryBlack font-cormorant font-medium italic mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {item.title}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ShopByCategories;
