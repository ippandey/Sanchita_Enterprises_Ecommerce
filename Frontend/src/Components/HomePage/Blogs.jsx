import React, { useState } from "react";
import blog_pic1 from "./../../assets/blog_pic1.webp";
import blog_pic2 from "./../../assets/blog_pic2.webp";
import blog_pic3 from "./../../assets/blog_pic3.webp";
import { motion } from "framer-motion";

const BlogCards = [
  {
    id: 1,
    image: blog_pic1,
    tag: "Innovation",
    comments: 3,
    title: "The Future of Textile Chemicals: Trends & Innovations",
    description:
      "Discover the latest advancements in textile chemistry, from smart fabrics to eco-friendly dyeing techniques. Learn how innovation is shaping the future of the industry and what it means for manufacturers and consumers alike.",
  },
  {
    id: 2,
    image: blog_pic2,
    tag: "Sustainability",
    comments: 1,
    title: "A Step Towards Green Manufacturing",
    description:
      "Sustainable manufacturing is more than just a trend—it's a necessity. Explore how companies are reducing their environmental footprint through biodegradable chemicals, water-saving processes, and renewable resources.",
  },
  {
    id: 3,
    image: blog_pic3,
    tag: "Application",
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
    <section id="blogs" className="px-4 sm:px-6 lg:px-20 py-10">
      <div>
        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-cormorant font-medium mb-4">
            From Expert Formulations to Textile Innovations
          </h1>
          <p className="text-gray-500 font-work text-sm sm:text-base">
            Stay Updated with the Latest in Textile Chemicals
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {BlogCards.map((item) => (
            <div key={item.id} className="overflow-hidden">
              <motion.img
                src={item.image}
                alt={item.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-56 sm:h-60 object-cover rounded-md mb-5"
              />

              <div className="flex gap-6 text-sm mb-4 text-gray-500">
                <p>{item.tag}</p>
                <p>{item.comments} Comments</p>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                {item.title}
              </h3>

              {expanded === item.id ? (
                <div className="bg-gray-100 p-4 rounded-md mb-3">
                  <p className="text-gray-700 mb-3 text-sm sm:text-base">
                    {item.description}
                  </p>
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
