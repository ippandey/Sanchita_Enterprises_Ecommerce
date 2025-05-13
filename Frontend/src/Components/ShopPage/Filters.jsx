// import { useState, useEffect } from "react";
// import { FaChevronRight } from "react-icons/fa";

// const Filters = ({ onFilterChange }) => {
//   const [filters, setFilters] = useState({
//     stock: null,
//     size: [],
//     category: [],
//     price: [0, 10000],
//   });

//   const [dropdowns, setDropdowns] = useState({
//     availability: false,
//     price: false,
//     size: false,
//     category: true,
//   });

//   // Toggle dropdown visibility
//   const toggleDropdown = (section) => {
//     setDropdowns((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   // Check if any filter is applied
//   const isAnyFilterApplied =
//     filters.stock !== null ||
//     filters.size.length > 0 ||
//     filters.category.length > 0 ||
//     filters.price[0] !== 0 ||
//     filters.price[1] !== 10000;

//   // Update filters
//   const handleCheckboxChange = (filterType, value) => {
//     setFilters((prevFilters) => {
//       const updatedFilter =
//         filterType === "stock"
//           ? value
//           : prevFilters[filterType].includes(value)
//           ? prevFilters[filterType].filter((item) => item !== value)
//           : [...prevFilters[filterType], value];

//       const newFilters = { ...prevFilters, [filterType]: updatedFilter };
//       onFilterChange(newFilters);
//       return newFilters;
//     });
//   };

//   const handleRadioChange = (value) => {
//     setFilters((prevFilters) => {
//       const newFilters = { ...prevFilters, stock: value };
//       onFilterChange(newFilters);
//       return newFilters;
//     });
//   };

//   // Update price range
//   const handlePriceChange = (e, index) => {
//     setFilters((prevFilters) => {
//       const newPrice = [...prevFilters.price];
//       newPrice[index] = Number(e.target.value);

//       const newFilters = { ...prevFilters, price: newPrice };
//       onFilterChange(newFilters);
//       return newFilters;
//     });
//   };

//   // Clear all filters
//   const clearFilters = () => {
//     setFilters({
//       stock: null,
//       size: [],
//       category: [],
//       price: [0, 10000],
//     });
//     onFilterChange({
//       stock: null,
//       size: [],
//       category: [],
//       price: [0, 10000],
//     });
//     localStorage.removeItem("filters");
//   };

//   return (
//     <div className="p-4 border rounded-md w-72">
//       {/* Filter Header */}
//       <div className="flex justify-between items-center mb-4 font-semibold">
//         <h2 className="text-xl font-semibold font-cormorant ">Filter:</h2>
//         {isAnyFilterApplied && (
//           <button
//             onClick={clearFilters}
//             className="text-[#444444] font-work text-sm font-normal underline underline-offset-4"
//           >
//             Clear all
//           </button>
//         )}
//       </div>

//       {/* Display Applied Filters as Tags */}
//       <div className="flex flex-wrap gap-2 mb-2 border-b pb-4 font-work font-normal">
//         {filters.stock !== null && (
//           <span className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center">
//             {filters.stock ? "In stock" : "Out of stock"}
//             <button
//               onClick={() => handleCheckboxChange("stock", null)}
//               className="ml-2 text-gray-950"
//             >
//               ×
//             </button>
//           </span>
//         )}
//         {filters.price[0] !== 0 || filters.price[1] !== 10000 ? (
//           <span className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center">
//             ${filters.price[0]} - ${filters.price[1]}
//             <button onClick={clearFilters} className="ml-2 text-gray-950">
//               ×
//             </button>
//           </span>
//         ) : null}
//         {filters.size.map((size) => (
//           <span
//             key={size}
//             className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center"
//           >
//             {size}
//             <button
//               onClick={() => handleCheckboxChange("size", size)}
//               className="ml-2 text-gray-950"
//             >
//               ×
//             </button>
//           </span>
//         ))}
//         {filters.category.map((category) => (
//           <span
//             key={category}
//             className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center"
//           >
//             {category}
//             <button
//               onClick={() => handleCheckboxChange("category", category)}
//               className="ml-2 text-gray-950"
//             >
//               ×
//             </button>
//           </span>
//         ))}
//       </div>

//       {/* Availability Filter */}
//       <div className="mb-6 font-work border-b pb-4 pt-2">
//         <h3
//           className="font-medium flex justify-between cursor-pointer"
//           onClick={() => toggleDropdown("availability")}
//         >
//           Availability
//           <FaChevronRight
//             className={`transition-transform ${
//               dropdowns.availability ? "rotate-90" : ""
//             }`}
//           />
//         </h3>
//         {dropdowns.availability && (
//           <div className="mt-2 space-y-2">
//             <label className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 name="stock"
//                 value="true"
//                 checked={filters.stock === true}
//                 onChange={() => handleRadioChange(true)}
//                 className="w-4 h-4"
//               />
//               <span>In Stock</span>
//             </label>
//             <label className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 name="stock"
//                 value="false"
//                 checked={filters.stock === false}
//                 onChange={() => handleRadioChange(false)}
//                 className="w-4 h-4"
//               />
//               <span>Out of Stock</span>
//             </label>
//             <label className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 name="stock"
//                 value="null"
//                 checked={filters.stock === null}
//                 onChange={() => handleRadioChange(null)}
//                 className="w-4 h-4"
//               />
//               <span>All</span>
//             </label>
//           </div>
//         )}
//       </div>

//       {/* Price Range */}
//       <div className="mb-6 font-work border-b pb-4">
//         <h3
//           className="font-medium flex justify-between cursor-pointer"
//           onClick={() => toggleDropdown("price")}
//         >
//           Price
//           <FaChevronRight
//             className={`transition-transform ${
//               dropdowns.price ? "rotate-90" : ""
//             }`}
//           />
//         </h3>
//         {dropdowns.price && (
//           <div className="mt-2 space-y-2">
//             <input
//               type="range"
//               min="0"
//               max="10000"
//               value={filters.price[0]}
//               onChange={(e) => handlePriceChange(e, 0)}
//               className="w-full"
//             />
//             <input
//               type="range"
//               min="0"
//               max="10000"
//               value={filters.price[1]}
//               onChange={(e) => handlePriceChange(e, 1)}
//               className="w-full"
//             />
//             <div className="flex justify-between text-sm">
//               <span>₹{filters.price[0]}</span>
//               <span>₹{filters.price[1]}</span>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Size Filter */}
//       <div className="mb-6 font-work border-b pb-4">
//         <h3
//           className="font-medium flex justify-between cursor-pointer"
//           onClick={() => toggleDropdown("size")}
//         >
//           Size
//           <FaChevronRight
//             className={`transition-transform ${
//               dropdowns.size ? "rotate-90" : ""
//             }`}
//           />
//         </h3>
//         {dropdowns.size && (
//           <div className="mt-2 space-y-2">
//             {["Small", "Medium", "Large"].map((size) => (
//               <label key={size} className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   checked={filters.size.includes(size)}
//                   onChange={() => handleCheckboxChange("size", size)}
//                   className="w-4 h-4"
//                 />
//                 <span>{size}</span>
//               </label>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Category Filter */}
//       <div className="mb-6 font-work border-b pb-4">
//         <h3
//           className="font-medium flex justify-between cursor-pointer"
//           onClick={() => toggleDropdown("category")}
//         >
//           Category
//           <FaChevronRight
//             className={`transition-transform ${
//               dropdowns.category ? "rotate-90" : ""
//             }`}
//           />
//         </h3>
//         {dropdowns.category && (
//           <div className="mt-2 space-y-2">
//             {[
//               "Dye",
//               "Solvent",
//               "Reagent",
//               "Alkaline Agent",
//               "Bleaching Agent",
//               "Finishing Agent",
//               "Neutralizing Agent",
//               "Reducing Agent",
//               "Bio-polishing Agent",
//               "Lubricant",
//               "Cleaning Agent",
//               "Additives",
//               "Brightening Agent",
//               "Mordant",
//               "Fixative",
//               "Softening Agent",
//               "Coating Agent",
//             ].map((category) => (
//               <label key={category} className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   checked={filters.category.includes(category)}
//                   onChange={() => handleCheckboxChange("category", category)}
//                   className="w-4 h-4"
//                 />
//                 <span>{category}</span>
//               </label>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Filters;

import { useState } from "react";
import { FaChevronRight, FaFilter, FaTimes } from "react-icons/fa";

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    stock: null,
    size: [],
    category: [],
    price: [0, 10000],
  });

  const [dropdowns, setDropdowns] = useState({
    availability: false,
    price: false,
    size: false,
    category: true,
  });

  const [mobileOpen, setMobileOpen] = useState(false); // For mobile drawer

  const toggleDropdown = (section) => {
    setDropdowns((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleMobileDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const isAnyFilterApplied =
    filters.stock !== null ||
    filters.size.length > 0 ||
    filters.category.length > 0 ||
    filters.price[0] !== 0 ||
    filters.price[1] !== 10000;

  const handleCheckboxChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilter =
        filterType === "stock"
          ? value
          : prevFilters[filterType].includes(value)
          ? prevFilters[filterType].filter((item) => item !== value)
          : [...prevFilters[filterType], value];

      const newFilters = { ...prevFilters, [filterType]: updatedFilter };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleRadioChange = (value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters, stock: value };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handlePriceChange = (e, index) => {
    setFilters((prevFilters) => {
      const newPrice = [...prevFilters.price];
      newPrice[index] = Number(e.target.value);

      const newFilters = { ...prevFilters, price: newPrice };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const clearFilters = () => {
    const reset = {
      stock: null,
      size: [],
      category: [],
      price: [0, 10000],
    };
    setFilters(reset);
    onFilterChange(reset);
    localStorage.removeItem("filters");
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden flex items-center gap-2 text-sm text-gray-700 mb-4"
        onClick={toggleMobileDrawer}
      >
        <FaFilter />
        Filters
      </button>

      {/* Overlay on mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleMobileDrawer}
        ></div>
      )}

      {/* Filters Panel */}
      <div
        className={`fixed md:static top-0 right-0 z-50 md:z-auto h-full md:h-auto w-4/5 md:w-72 bg-white md:bg-transparent border md:border-none p-4 transform transition-transform duration-300 ease-in-out
        ${mobileOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}
      >
        {/* Close Button on Mobile */}
        <div className="flex justify-between items-center md:hidden mb-4">
          <h2 className="text-xl font-cormorant font-semibold">Filter</h2>
          <button onClick={toggleMobileDrawer}>
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Rest of your filter JSX goes here... */}
        {/* Example: */}
        <div className="flex justify-between items-center mb-4 font-semibold">
          <h2 className="text-xl font-semibold font-cormorant hidden md:block">
            Filter:
          </h2>
          {isAnyFilterApplied && (
            <button
              onClick={clearFilters}
              className="text-[#444444] font-work text-sm font-normal underline underline-offset-4"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Display Applied Filters as Tags */}
        <div className="flex flex-wrap gap-2 mb-2 border-b pb-4 font-work font-normal">
          {filters.stock !== null && (
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center">
              {filters.stock ? "In stock" : "Out of stock"}
              <button
                onClick={() => handleCheckboxChange("stock", null)}
                className="ml-2 text-gray-950"
              >
                ×
              </button>
            </span>
          )}
          {filters.price[0] !== 0 || filters.price[1] !== 10000 ? (
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center">
              ${filters.price[0]} - ${filters.price[1]}
              <button onClick={clearFilters} className="ml-2 text-gray-950">
                ×
              </button>
            </span>
          ) : null}
          {filters.size.map((size) => (
            <span
              key={size}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center"
            >
              {size}
              <button
                onClick={() => handleCheckboxChange("size", size)}
                className="ml-2 text-gray-950"
              >
                ×
              </button>
            </span>
          ))}
          {filters.category.map((category) => (
            <span
              key={category}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center"
            >
              {category}
              <button
                onClick={() => handleCheckboxChange("category", category)}
                className="ml-2 text-gray-950"
              >
                ×
              </button>
            </span>
          ))}
        </div>

        {/* Availability Filter */}
        <div className="mb-6 font-work border-b pb-4 pt-2">
          <h3
            className="font-medium flex justify-between cursor-pointer"
            onClick={() => toggleDropdown("availability")}
          >
            Availability
            <FaChevronRight
              className={`transition-transform ${
                dropdowns.availability ? "rotate-90" : ""
              }`}
            />
          </h3>
          {dropdowns.availability && (
            <div className="mt-2 space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="stock"
                  value="true"
                  checked={filters.stock === true}
                  onChange={() => handleRadioChange(true)}
                  className="w-4 h-4"
                />
                <span>In Stock</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="stock"
                  value="false"
                  checked={filters.stock === false}
                  onChange={() => handleRadioChange(false)}
                  className="w-4 h-4"
                />
                <span>Out of Stock</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="stock"
                  value="null"
                  checked={filters.stock === null}
                  onChange={() => handleRadioChange(null)}
                  className="w-4 h-4"
                />
                <span>All</span>
              </label>
            </div>
          )}
        </div>

        {/* Price Range */}
        <div className="mb-6 font-work border-b pb-4">
          <h3
            className="font-medium flex justify-between cursor-pointer"
            onClick={() => toggleDropdown("price")}
          >
            Price
            <FaChevronRight
              className={`transition-transform ${
                dropdowns.price ? "rotate-90" : ""
              }`}
            />
          </h3>
          {dropdowns.price && (
            <div className="mt-2 space-y-2">
              <input
                type="range"
                min="0"
                max="10000"
                value={filters.price[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max="10000"
                value={filters.price[1]}
                onChange={(e) => handlePriceChange(e, 1)}
                className="w-full"
              />
              <div className="flex justify-between text-sm">
                <span>₹{filters.price[0]}</span>
                <span>₹{filters.price[1]}</span>
              </div>
            </div>
          )}
        </div>

        {/* Size Filter */}
        <div className="mb-6 font-work border-b pb-4">
          <h3
            className="font-medium flex justify-between cursor-pointer"
            onClick={() => toggleDropdown("size")}
          >
            Size
            <FaChevronRight
              className={`transition-transform ${
                dropdowns.size ? "rotate-90" : ""
              }`}
            />
          </h3>
          {dropdowns.size && (
            <div className="mt-2 space-y-2">
              {["Small", "Medium", "Large"].map((size) => (
                <label key={size} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.size.includes(size)}
                    onChange={() => handleCheckboxChange("size", size)}
                    className="w-4 h-4"
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Category Filter */}
        <div className="mb-6 font-work border-b pb-4">
          <h3
            className="font-medium flex justify-between cursor-pointer"
            onClick={() => toggleDropdown("category")}
          >
            Category
            <FaChevronRight
              className={`transition-transform ${
                dropdowns.category ? "rotate-90" : ""
              }`}
            />
          </h3>
          {dropdowns.category && (
            <div className="mt-2 space-y-2">
              {[
                "Dye",
                "Solvent",
                "Reagent",
                "Alkaline Agent",
                "Bleaching Agent",
                "Finishing Agent",
                "Neutralizing Agent",
                "Reducing Agent",
                "Bio-polishing Agent",
                "Lubricant",
                "Cleaning Agent",
                "Additives",
                "Brightening Agent",
                "Mordant",
                "Fixative",
                "Softening Agent",
                "Coating Agent",
              ].map((category) => (
                <label key={category} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.category.includes(category)}
                    onChange={() => handleCheckboxChange("category", category)}
                    className="w-4 h-4"
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Filters;
