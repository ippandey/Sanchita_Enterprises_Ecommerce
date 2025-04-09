import React from "react";
import { motion } from "framer-motion";
import dyeing_agents from "./../../assets/dyeing_agents.webp";
import printing_chemicals from "./../../assets/printing_chemicals.webp";
import solvents from "./../../assets/solvents.webp";
import bleaching_agents from "./../../assets/bleaching_agents.webp";
import softening_agents from "./../../assets/softening_agents.webp";

const Categories = () => {
  const CategoryList = [
    { img: dyeing_agents, title: "Dyeing Agents", products: 42 },
    { img: printing_chemicals, title: "Printing Chemicals", products: 35 },
    { img: bleaching_agents, title: "Bleaching Agents", products: 27 },
    { img: softening_agents, title: "Softening Agents", products: 31 },
    { img: solvents, title: "Solvents", products: 18 },
  ];

  return (
    <div className="mx-20 my-10">
      {/* Heading Section */}
      <div className="mb-10">
        <p className="text-[#7e7e84] font-work uppercase mb-2">
          Explore Cadiant
        </p>
        <h1 className="text-[44px] font-cormorant italic">
          Shop By Categories
        </h1>
      </div>

      {/* Categories Grid */}
      <motion.div
        className="flex gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {CategoryList.map((item, index) => (
          <motion.div
            key={index}
            className="relative text-center overflow-hidden cursor-pointer w-[250px] h-[250px] flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, delay: index * 0.2 },
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Image Wrapper with Overflow Hidden */}

            <motion.img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Title and Product Count (Appears on Hovering Entire Card) */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center"
              whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
            >
              <p className="font-work font-normal text-base text-white">
                {item.title}
              </p>
              <p className="text-white font-work text-sm mt-2 opacity-100">
                {item.products} Items
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Categories;
