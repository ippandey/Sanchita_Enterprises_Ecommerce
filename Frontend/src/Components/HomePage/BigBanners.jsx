// import React from "react";
// import bigpic1 from "./../../assets/bigpic1.webp";
// import bigpic2 from "./../../assets/bigpic2.webp";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const BigBanners = () => {
//   const BigBannersList = [
//     {
//       id: 1,
//       image: bigpic1,
//       heading: "High-Performance Chemicals",
//     },
//     {
//       id: 2,
//       image: bigpic2,
//       heading: "Custom Textile Solutions",
//     },
//   ];

//   return (
//     <section>
//       <div className="flex">
//         {BigBannersList.map((product) => (
//           <div className="relative overflow-hidden" key={product.id}>
//             {/* Motion Image with Overlay Inside */}
//             <div className="relative">
//               <motion.img
//                 src={product.image}
//                 alt={product.heading}
//                 className="w-full"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//               />
//               <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
//             </div>

//             {/* Text Content */}
//             <div className="absolute bottom-6 left-6 p-5 z-10">
//               <h3 className="text-4xl text-white font-cormorant font-medium pb-3">
//                 {product.heading}
//               </h3>
//               <Link to="/shop">
//                 <button className="uppercase text-white text-sm font-work underline font-medium">
//                   shop now
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BigBanners;

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
    <section className="px-4 sm:px-6 lg:px-20 py-10">
      <div className="flex flex-col md:flex-row gap-6">
        {BigBannersList.map((product) => (
          <div
            key={product.id}
            className="relative overflow-hidden flex-1 rounded-md shadow-md"
          >
            {/* Image with Motion */}
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
              <motion.img
                src={product.image}
                alt={product.heading}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-black/50 z-0"></div>
            </div>

            {/* Text Content */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-cormorant font-medium mb-3">
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
