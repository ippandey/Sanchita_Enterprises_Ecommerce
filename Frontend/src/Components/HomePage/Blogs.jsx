// import React from "react";
// import blog_pic1 from "./../../assets/blog_pic1.webp";
// import blog_pic2 from "./../../assets/blog_pic2.webp";
// import blog_pic3 from "./../../assets/blog_pic3.webp";
// import { motion } from "motion/react";

// const BlogCards = [
//   {
//     id: 1,
//     image: blog_pic1,
//     tag: "Innovation ",
//     comments: 3,
//     title: "The Future of Textile Chemicals: Trends & Innovations",
//   },

//   {
//     id: 2,
//     image: blog_pic2,
//     tag: "Sustainability ",
//     comments: 1,
//     title: "A Step Towards Green Manufacturing",
//   },
//   {
//     id: 3,
//     image: blog_pic3,
//     tag: "Application ",
//     comments: 2,
//     title: "Choosing the Right Chemicals for Fabric Treatment",
//   },
// ];

// const Blogs = () => {
//   return (
//     <section>
//       <div className="m-20">
//         {/* Heading section */}
//         <div className="mb-12">
//           <h1 className="text-5xl font-cormorant font-medium mb-4">
//             From Expert Formulations to Textile Innovations
//           </h1>
//           <p className="text-gray-500 font-work">
//             Stay Updated with the Latest in Textile Chemicals
//           </p>
//         </div>

//         {/* Blogs Card */}
//         <div className="flex gap-10">
//           {BlogCards.map((item, index) => (
//             <div key={index} className="w-1/3 overflow-hidden">
//               <motion.img
//                 src={item.image}
//                 alt="BlogPic1"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className="w-full mb-5"
//               />
//               <div className="flex gap-10 mb-5">
//                 <p className="text-gray-500">{item.tag}</p>
//                 <p className="text-gray-500">{item.comments} Comments</p>
//               </div>

//               <h3 className="text-2xl mb-5">{item.title}</h3>
//               <button className="uppercase underline text-gray-700 font-medium text-sm">
//                 More Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blogs;

import React, { useState } from "react";
import blog_pic1 from "./../../assets/blog_pic1.webp";
import blog_pic2 from "./../../assets/blog_pic2.webp";
import blog_pic3 from "./../../assets/blog_pic3.webp";
import { motion } from "framer-motion";

const BlogCards = [
  {
    id: 1,
    image: blog_pic1,
    tag: "Innovation ",
    comments: 3,
    title: "The Future of Textile Chemicals: Trends & Innovations",
    description:
      "Discover the latest advancements in textile chemistry, from smart fabrics to eco-friendly dyeing techniques. Learn how innovation is shaping the future of the industry and what it means for manufacturers and consumers alike.",
  },
  {
    id: 2,
    image: blog_pic2,
    tag: "Sustainability ",
    comments: 1,
    title: "A Step Towards Green Manufacturing",
    description:
      "Sustainable manufacturing is more than just a trend—it's a necessity. Explore how companies are reducing their environmental footprint through biodegradable chemicals, water-saving processes, and renewable resources.",
  },
  {
    id: 3,
    image: blog_pic3,
    tag: "Application ",
    comments: 2,
    title: "Choosing the Right Chemicals for Fabric Treatment",
    description:
      "Selecting the right chemicals for fabric treatment can enhance durability, comfort, and sustainability. This guide breaks down the best options for different textile applications, ensuring optimal results without compromising safety.",
  },
];

const Blogs = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section>
      <div className="m-20">
        {/* Heading section */}
        <div className="mb-12">
          <h1 className="text-5xl font-cormorant font-medium mb-4">
            From Expert Formulations to Textile Innovations
          </h1>
          <p className="text-gray-500 font-work">
            Stay Updated with the Latest in Textile Chemicals
          </p>
        </div>

        {/* Blogs Card */}
        <div className="flex gap-10">
          {BlogCards.map((item) => (
            <div key={item.id} className="w-1/3 overflow-hidden">
              <motion.img
                src={item.image}
                alt={item.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full mb-5"
              />
              <div className="flex gap-10 mb-5">
                <p className="text-gray-500">{item.tag}</p>
                <p className="text-gray-500">{item.comments} Comments</p>
              </div>

              <h3 className="text-2xl mb-5">{item.title}</h3>

              {expanded === item.id ? (
                <div className="bg-gray-100 p-4 rounded-md mb-3">
                  <p className="text-gray-700 mb-3">{item.description}</p>
                  <button
                    className="uppercase underline text-gray-700 font-medium text-sm"
                    onClick={() => toggleExpand(item.id)}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <button
                  className="uppercase underline text-gray-700 font-medium text-sm"
                  onClick={() => toggleExpand(item.id)}
                >
                  More Details
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
