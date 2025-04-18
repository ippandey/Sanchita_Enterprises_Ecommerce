import React, { useEffect, useState } from "react";
import CarouselPic1_3 from "./../../assets/CarouselPic1_3.jpg";
import CarouselPic2_2 from "./../../assets/CarouselPic2_2.jpg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ImageSlider = () => {
  const images = [
    {
      src: CarouselPic1_3,
      title: "Guards Up",
      heading: "Premium Textile Chemicals",
      subheading: "for Superior Dyeing & Finishing.",
      description: "Vibrant colors, durable fabrics, eco-friendly processing.",
      alignment: "right",
    },
    {
      src: CarouselPic2_2,
      title: "New",
      heading: "Advanced Textile Solutions",
      subheading: "Enhancing Fabric Performance & Sustainability.",
      description: "Better dye absorption, stronger fabrics, eco-friendly.",
      alignment: "left",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const prev = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px] sm:h-[450px] md:h-[600px] overflow-hidden">
      {/* Image Section */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="w-full h-full absolute"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 1 }}
        >
          <img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Persistent Background Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      {/* Text Overlay */}
      <AnimatePresence>
        <div
          key={currentIndex}
          className={`absolute inset-y-0 px-4 sm:px-8 md:px-10 py-6 flex flex-col justify-center text-[#333333] ${
            images[currentIndex].alignment === "right"
              ? "right-0 sm:text-right items-end"
              : "left-0 sm:text-left items-start"
          } w-full sm:w-3/4 md:w-1/2`}
        >
          <motion.p
            key={currentIndex + "-p"}
            className="text-xs sm:text-sm tracking-wide uppercase font-work mb-2 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {images[currentIndex].title}
          </motion.p>

          <motion.h1
            key={currentIndex + "-h1"}
            className="text-2xl sm:text-4xl md:text-5xl font-cormorant font-semibold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >
            {images[currentIndex].heading}
          </motion.h1>

          <motion.h2
            key={currentIndex + "-h2"}
            className="text-lg sm:text-2xl md:text-4xl mb-4 sm:mb-6 font-cormorant italic text-[#333333]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            {images[currentIndex].subheading}
          </motion.h2>

          <motion.p
            key={currentIndex + "-desc"}
            className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-[#333333]"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.6 }}
          >
            {images[currentIndex].description}
          </motion.p>

          <motion.button
            key={currentIndex + "-btn"}
            onClick={() => navigate("/shop")}
            className={`mb-6 sm:mb-8 px-4 py-2 sm:px-6 sm:py-3 bg-white text-black font-semibold uppercase cursor-pointer tracking-wide w-2/3 sm:w-1/3 font-work rounded-md hover:bg-gray-200 transition
              ${
                images[currentIndex].alignment === "right"
                  ? "ml-auto"
                  : "mr-auto"
              }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            Shop All
          </motion.button>
        </div>
      </AnimatePresence>

      {/* Left & Right Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6">
        <button
          className="p-2 rounded-full shadow bg-gray-400/20"
          onClick={prev}
        >
          <FiChevronLeft size={30} />
        </button>
        <button
          className="p-2 rounded-full shadow bg-gray-400/20"
          onClick={next}
        >
          <FiChevronRight size={30} />
        </button>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-3 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className="w-12 sm:w-16 h-[2px] bg-gray-400 relative overflow-hidden"
            >
              {currentIndex === i && (
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gray-900"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 5,
                    ease: "linear",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
