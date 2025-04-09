import React, { useState, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useData } from "../../Context/DataContext"; // Fetching products from context

const Essentials = () => {
  const { products, loading, error } = useData(); // Using API data
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Extracting the first 4 unique categories
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  )
    .slice(0, 4) // Showing only the first 4 categories
    .map((category, index) => ({
      id: index + 1,
      name: category,
    }));

  // Set the first category as default when products load
  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0].name);
    }
  }, [categories]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const currentProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <section className="overflow-hidden relative">
      <div className="m-20">
        {/* Heading & Category Buttons */}
        <div className="items-center justify-center mb-8">
          <h2 className="text-center font-cormorant mb-8 text-[44px] font-medium">
            Our Essentials
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className={`px-3 py-2 text-base font-work font-medium transition-all
              ${
                selectedCategory === category.name
                  ? " text-black"
                  : " text-gray-500 hover:text-black"
              }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Loading/Error Messages */}
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Product Cards */}
        {!loading && !error && (
          <div className="flex gap-5">
            {currentProducts.map((product) => (
              <Link
                key={product._id}
                to={`/product/${product._id}`}
                className="block"
              >
                <div className="bg-[#f7f4f3] shadow-md rounded-md w-52 mb-10">
                  <img src={product.image} alt={product.title} />
                  <h3 className="text-lg font-medium text-center rounded-md font-work text-[#333333]">
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
                          <FaRegStar key={index} className="text-[#666666]" />
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
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Shop All Button */}
        <Link to="/shop">
          <div className="flex justify-center">
            <button className="uppercase text-[#252525] border-[1px] border-[#252525] rounded-md w-36 h-12 hover:bg-[#252525] hover:text-white text-base">
              Shop All
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Essentials;
