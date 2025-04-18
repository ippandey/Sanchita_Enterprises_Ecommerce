import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTopButton = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const winHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / winHeight) * 100;
    setScrollPercent(scrolled);
    setIsVisible(scrollTop > 0); // Show only after scrolling
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 28;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (scrollPercent / 100) * circumference;

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      className={`fixed bottom-6 right-6 z-50 bg-white shadow-lg rounded-full p-2 flex items-center justify-center transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ width: radius * 2, height: radius * 2 }}
    >
      <svg
        height={radius * 2}
        width={radius * 2}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "rotate(-90deg)",
        }}
      >
        <circle
          stroke="#e0e0e0"
          fill="white"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#000"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ transition: "stroke-dashoffset 0.3s ease" }}
        />
      </svg>
      <BsArrowUp className="text-xl text-black z-10" />
    </motion.button>
  );
};

export default ScrollToTopButton;
