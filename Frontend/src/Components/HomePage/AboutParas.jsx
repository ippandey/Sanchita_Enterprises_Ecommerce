import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const AboutParas = () => {
  return (
    <section>
      <motion.div
        className="flex m-20 gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <AnimatePresence>
          {/* Para 1 */}
          <motion.div
            className="flex flex-col items-center justify-center p-4"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: "easeOut" },
              },
            }}
          >
            <FaCheckCircle className="mb-3 size-8" />
            <h3 className="text-center mb-4">QUALITY ASSURED</h3>
            <p className="text-center text-[#666666]">
              We deliver top-grade chemicals tailored for the textile industry.
              Designed to meet your manufacturing needs, our products ensure
              reliability, efficiency, and affordability at every step.
            </p>
          </motion.div>

          {/* Para 2 */}
          <motion.div
            className="flex flex-col items-center justify-center p-4"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: "easeOut" },
              },
            }}
          >
            <FaRegLightbulb className="mb-3 size-8" />
            <h3 className="text-center mb-4">DRIVING INNOVATION</h3>
            <p className="text-center text-[#666666]">
              We create products that empower textile manufacturers to excel.
              From dyeing to finishing, our solutions are crafted to enhance
              processes and adapt to your evolving needs, making innovation
              effortless.
            </p>
          </motion.div>

          {/* Para 3 */}
          <motion.div
            className="flex flex-col items-center justify-center p-4"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: "easeOut" },
              },
            }}
          >
            <FaLeaf className="mb-3 size-8" />
            <h3 className="text-center mb-4">ECO-FOCUSED</h3>
            <p className="text-center text-[#666666]">
              Sustainability is at the core of our mission. Our eco-friendly
              formulations and practices minimize environmental impact while
              delivering outstanding performance for your textile needs.
            </p>
          </motion.div>

          {/* Para 4 */}
          <motion.div
            className="flex flex-col items-center justify-center p-4"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: "easeOut" },
              },
            }}
          >
            <FaBalanceScale className="mb-3 size-8" />
            <h3 className="text-center mb-4">TRUST GUARANTEED</h3>
            <p className="text-center text-[#666666]">
              We believe in honest and transparent operations. From sourcing to
              pricing, every step is clear and designed to build your confidence
              in choosing us as your trusted partner.
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default AboutParas;
