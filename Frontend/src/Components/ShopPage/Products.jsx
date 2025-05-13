// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaStar, FaRegStar } from "react-icons/fa";
// import { PiLineVerticalBold } from "react-icons/pi";
// import { FaAngleRight } from "react-icons/fa6";
// import { FaAngleLeft } from "react-icons/fa6";

// const Products = ({ filters = {}, productList = [] }) => {
//   const filteredProducts = productList.filter((product) => {
//     if (!product) return false;

//     const selectedStock = filters.stock;
//     const selectedSizes = Array.isArray(filters.size) ? filters.size : [];
//     const selectedCategories = Array.isArray(filters.category)
//       ? filters.category
//       : [];
//     const priceRange = Array.isArray(filters.price)
//       ? filters.price.map(Number)
//       : [0, 10000];
//     if (product.price < priceRange[0] || product.price > priceRange[1])
//       return false;

//     const productSizes = Array.isArray(product.sizes) ? product.sizes : [];
//     const productCategory = product.category || "";

//     if (selectedStock === true && product.stock <= 0) return false; // Show only in-stock
//     if (selectedStock === false && product.stock > 0) return false; // Show only out-of-stock

//     if (
//       selectedSizes.length > 0 &&
//       !selectedSizes.some((size) => productSizes.includes(size))
//     )
//       return false;
//     if (
//       selectedCategories.length > 0 &&
//       !selectedCategories.includes(productCategory)
//     )
//       return false;
//     if (product.price < priceRange[0] || product.price > priceRange[1])
//       return false;

//     return true;
//   });

//   const [hoveredProductId, setHoveredProductId] = useState(null);
//   const [gridCols, setGridCols] = useState(3); // Default 3 products per row
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 12;

//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
//   const paginatedProducts = filteredProducts.slice(
//     (currentPage - 1) * productsPerPage,
//     currentPage * productsPerPage
//   );

//   return (
//     <div className="flex flex-col w-full">
//       {/* Grid Structure & Total Products */}
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex gap-2">
//           <button
//             onClick={() => setGridCols(2)}
//             className={`p-3 flex border ${
//               gridCols === 2
//                 ? "bg-gray-300 text-primaryBlack"
//                 : "bg-white text-gray-500"
//             }`}
//           >
//             <div className="flex items-center -space-x-3">
//               <PiLineVerticalBold />
//               <PiLineVerticalBold />
//             </div>
//           </button>
//           <button
//             onClick={() => setGridCols(3)}
//             className={`p-2 flex border  ${
//               gridCols === 3
//                 ? "bg-gray-300 text-primaryBlack"
//                 : "bg-white text-gray-500"
//             }`}
//           >
//             <div className="flex items-center -space-x-3">
//               <PiLineVerticalBold />
//               <PiLineVerticalBold />
//               <PiLineVerticalBold />
//             </div>
//           </button>
//           <button
//             onClick={() => setGridCols(4)}
//             className={`p-2 flex border  ${
//               gridCols === 4
//                 ? "bg-gray-300 text-primaryBlack"
//                 : "bg-white text-gray-500"
//             }`}
//           >
//             <div className="flex items-center -space-x-3">
//               <PiLineVerticalBold />
//               <PiLineVerticalBold />
//               <PiLineVerticalBold />
//               <PiLineVerticalBold />
//             </div>
//           </button>
//         </div>
//         <p className="text-gray-600 font-work">
//           {filteredProducts.length} Products
//         </p>
//       </div>

//       {/* Product Grid with Fixed Class Names */}
//       <div
//         className={`grid gap-6 flex-1 ${
//           gridCols === 2
//             ? "grid-cols-2"
//             : gridCols === 3
//             ? "grid-cols-3"
//             : "grid-cols-4"
//         }`}
//       >
//         {paginatedProducts.length > 0 ? (
//           paginatedProducts.map((product) => (
//             <Link
//               key={product._id}
//               to={`/products/${product._id}`}
//               className="block"
//             >
//               <div
//                 className="border p-4 shadow-md rounded-lg relative"
//                 onMouseEnter={() => setHoveredProductId(product._id)}
//                 onMouseLeave={() => setHoveredProductId(null)}
//               >
//                 {product.originalPrice > product.price && (
//                   <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-3 py-1 rounded">
//                     Sale -{" "}
//                     {Math.round(
//                       ((product.originalPrice - product.price) /
//                         product.originalPrice) *
//                         100
//                     )}
//                     %
//                   </span>
//                 )}
//                 {hoveredProductId === product._id && (
//                   <button className="absolute top-44 left-1/2 transform -translate-x-1/2 w-4/5 bg-white text-[#333333] hover:bg-[#333333] hover:text-white px-4 py-2 rounded-md shadow-md">
//                     Add to Cart
//                   </button>
//                 )}
//                 <img
//                   src={
//                     hoveredProductId === product._id
//                       ? product.gallery[1]
//                       : product.gallery[0]
//                   }
//                   alt={product.title}
//                   className="w-full object-cover mb-4 rounded-md transition-all"
//                 />
//                 <h3 className="text-lg font-medium text-center font-work text-[#333333]">
//                   {product.title}
//                 </h3>
//                 <p className="text-[#555555] font-work text-center mb-2 text-sm">
//                   {product.category}
//                 </p>
//                 <p className="text-[#555555] text-sm font-work text-center mb-2">
//                   {product.description}
//                 </p>
//                 <p className="text-[#666666] text-base flex justify-center gap-4 mb-4">
//                   <span className="flex gap-[2px]">
//                     {Array.from({ length: 5 }).map((_, index) =>
//                       index < product.ratings ? (
//                         <FaStar key={index} className="text-[#333333]" />
//                       ) : (
//                         <FaRegStar
//                           key={index}
//                           className="text-[#666666] rounded-sm"
//                         />
//                       )
//                     )}
//                   </span>
//                 </p>
//                 <div className="flex gap-2 items-center justify-center mb-2">
//                   <span className="text-xl font-semibold text-[#333333] font-work">
//                     ₹{product.price}
//                   </span>
//                   {product.originalPrice > product.price && (
//                     <span className="font-semibold text-[#666666] font-work line-through">
//                       ₹{product.originalPrice}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className="text-center text-gray-600 w-full">
//             No products match the selected filters.
//           </p>
//         )}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-center items-center mt-6 space-x-2">
//           <button
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-4 py-3 border disabled:opacity-50"
//           >
//             <FaAngleLeft />
//           </button>
//           {Array.from({ length: totalPages }).map((_, index) => {
//             const page = index + 1;
//             return (
//               <button
//                 key={page}
//                 onClick={() => setCurrentPage(page)}
//                 className={`px-4 py-2 border ${
//                   currentPage === page
//                     ? "bg-[#333333] text-white"
//                     : "bg-white text-[#333333]"
//                 }`}
//               >
//                 {page}
//               </button>
//             );
//           })}
//           <button
//             onClick={() =>
//               setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//             }
//             disabled={currentPage === totalPages}
//             className="px-4 py-3 border disabled:opacity-50"
//           >
//             <FaAngleRight />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { PiLineVerticalBold } from "react-icons/pi";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Products = ({ filters = {}, productList = [] }) => {
  const filteredProducts = productList.filter((product) => {
    if (!product) return false;

    const selectedStock = filters.stock;
    const selectedSizes = Array.isArray(filters.size) ? filters.size : [];
    const selectedCategories = Array.isArray(filters.category)
      ? filters.category
      : [];
    const priceRange = Array.isArray(filters.price)
      ? filters.price.map(Number)
      : [0, 10000];

    if (product.price < priceRange[0] || product.price > priceRange[1])
      return false;

    const productSizes = Array.isArray(product.sizes) ? product.sizes : [];
    const productCategory = product.category || "";

    if (selectedStock === true && product.stock <= 0) return false;
    if (selectedStock === false && product.stock > 0) return false;

    if (
      selectedSizes.length > 0 &&
      !selectedSizes.some((size) => productSizes.includes(size))
    )
      return false;

    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(productCategory)
    )
      return false;

    return true;
  });

  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [gridCols, setGridCols] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="flex flex-col w-full">
      {/* Grid Control & Product Count */}
      <div className="flex justify-between items-center mb-4">
        <div className="hidden md:flex gap-2">
          {[2, 3, 4].map((col) => (
            <button
              key={col}
              onClick={() => setGridCols(col)}
              className={`p-2 flex border ${
                gridCols === col
                  ? "bg-gray-300 text-primaryBlack"
                  : "bg-white text-gray-500"
              }`}
            >
              <div className="flex items-center -space-x-3">
                {Array.from({ length: col }).map((_, i) => (
                  <PiLineVerticalBold key={i} />
                ))}
              </div>
            </button>
          ))}
        </div>
        <p className="text-gray-600 font-work">
          {filteredProducts.length} Products
        </p>
      </div>

      {/* Responsive Product Grid */}
      <div
        className={`grid gap-6 flex-1 
        grid-cols-2 
        md:grid-cols-${gridCols}
      `}
      >
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <Link
              key={product._id}
              to={`/products/${product._id}`}
              className="block"
            >
              <div
                className="border p-4 shadow-md rounded-lg relative"
                onMouseEnter={() => setHoveredProductId(product._id)}
                onMouseLeave={() => setHoveredProductId(null)}
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
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-600 w-full">
            No products match the selected filters.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-3 border disabled:opacity-50"
          >
            <FaAngleLeft />
          </button>
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 border ${
                  currentPage === page
                    ? "bg-[#333333] text-white"
                    : "bg-white text-[#333333]"
                }`}
              >
                {page}
              </button>
            );
          })}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-3 border disabled:opacity-50"
          >
            <FaAngleRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
