// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useData } from "../Context/DataContext";
// import { useAuth } from "../Context/AuthContext";
// import { CartContext } from "../Context/CartContext";
// import { TiTick } from "react-icons/ti";
// import ProductDetails from "../Components/ProductPage/ProductDetails";
// import FAQSection from "../Components/ProductPage/FAQSection";
// import ReviewForm from "../Components/ProductPage/ReviewForm";

// const ProductPage = () => {
//   const { id } = useParams();
//   const { products } = useData();
//   const { user } = useAuth();
//   const { addToCart } = useContext(CartContext);
//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/products/${id}`);
//         setProduct(response.data);
//       } catch (err) {
//         setError("Product not found!");
//       }
//     };

//     if (products.length) {
//       const foundProduct = products.find((item) => item._id === id);
//       foundProduct ? setProduct(foundProduct) : fetchProduct();
//     } else {
//       fetchProduct();
//     }
//   }, [id, products]);

//   if (error) return <p>{error}</p>;
//   if (!product) return <p>Product not found!</p>;

//   const incrementQuantity = () => setQuantity(quantity + 1);
//   const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

//   // Add to Cart Handler
//   const handleAddToCart = () => {
//     if (!user) return alert("Please login to add items to cart");
//     if (!selectedSize) return alert("Please select a size");

//     addToCart(product._id, selectedSize, quantity);
//   };

//   const productDetails = {
//     vendor: "Versed Skin",
//     type: "Cleansing Balm",
//     pickupAvailable: true,
//     pickupLocation: "Shop location",
//     readyTime: "24 hours",
//   };

//   const shippingInfo = [
//     "No EU import duties.",
//     "Ships within 1-2 business days.",
//     "Ships in our fully recyclable and biodegradable signature boxes.",
//   ];

//   const features = [
//     { icon: "📦", text: "Free Shipping & Exchanges" },
//     { icon: "🔒", text: "Flexible and secure payment, pay on delivery" },
//     { icon: "🛡️", text: "2 Year Warranty" },
//     { icon: "🎉", text: "600,000 happy customers" },
//   ];

//   return (
//     <main className="p-8">
//       <p className="text-sm mb-4 mx-10">Home / {product.title}</p>
//       <div className="container flex flex-wrap lg:flex-nowrap gap-8">
//         {/* Left Image Section */}
//         <aside className="h-screen w-1/2 mx-10">
//           <div className="border">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full object-cover"
//             />
//           </div>
//           <div className="flex gap-5 mt-8">
//             {product.gallery?.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Gallery ${index}`}
//                 className="w-20 h-20 border object-cover cursor-pointer"
//               />
//             ))}
//           </div>
//         </aside>

//         {/* Right Section */}
//         <div className="w-full lg:w-1/2">
//           <h1 className="text-4xl font-medium mb-4 font-cormorant">
//             {product.title}
//           </h1>

//           <p className="text-gray-700 mb-8">
//             <span className="text-yellow-500 font-work">★★★★★</span>{" "}
//             {product.ratings} reviews
//           </p>

//           <div className="flex items-center gap-5 mb-8 font-work text-lg">
//             <p className="text-xl font-semibold">₹{product.price}</p>
//             <p className="text-gray-500 line-through">
//               ₹{product.originalPrice}
//             </p>
//             <p className="bg-[#d73f0f] text-white rounded-sm p-1">
//               Sale {product.sale}
//             </p>
//           </div>

//           {/* Size Selector */}
//           <div className="my-4 font-work">
//             <p className="font-semibold mb-4">
//               Size: {selectedSize || "Select a size"}
//             </p>
//             <div className="flex gap-4">
//               {product.sizes?.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-4 py-2 border rounded ${
//                     selectedSize === size
//                       ? "border-black bg-gray-100"
//                       : "border-gray-300"
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity Selector */}
//           <div className="flex mb-8 gap-4">
//             <div className="flex border-2 rounded">
//               <button
//                 onClick={decrementQuantity}
//                 className="w-8 h-12 flex items-center justify-center font-semibold text-xl hover:bg-gray-100"
//               >
//                 -
//               </button>
//               <input
//                 type="text"
//                 value={quantity}
//                 readOnly
//                 className="w-8 h-12 text-center mx-1 text-xl"
//               />
//               <button
//                 onClick={incrementQuantity}
//                 className="w-8 h-12 flex items-center justify-center text-xl hover:bg-gray-100 font-semibold"
//               >
//                 +
//               </button>
//             </div>

//             {/* Add to Cart Button */}
//             <button
//               onClick={handleAddToCart}
//               className="bg-[#202025] font-work h-12 w-full text-white rounded hover:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
//           </div>

//           {/* Buy It Now Button */}
//           <button className="w-full bg-[#202025] font-work uppercase h-12 text-white rounded mb-12 hover:bg-gray-700">
//             BUY IT NOW
//           </button>

//           {/* Pickup Information */}
//           {productDetails.pickupAvailable && (
//             <div className="text-sm text-gray-700 mb-4 border-b pb-8">
//               <p className="flex items-center gap-1 mb-2 font-work text-base">
//                 <TiTick className="text-green-600 text-2xl rotate-6" /> Pickup
//                 available at {productDetails.pickupLocation}
//               </p>
//               <p className="ml-7 mb-2">
//                 Usually ready in {productDetails.readyTime}
//               </p>
//               <p className="text-gray-600 hover:text-[#202025] ml-7 underline cursor-pointer">
//                 View store information
//               </p>
//             </div>
//           )}

//           {/* Features & Shipping Info */}
//           <div className="py-6">
//             <ul className="mb-6 space-y-4 font-work border-b pb-8">
//               {features.map((feature, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center gap-4 text-gray-800"
//                 >
//                   <span className="text-xl">{feature.icon}</span>
//                   {feature.text}
//                 </li>
//               ))}
//             </ul>
//             <h4 className="font-semibold text-gray-800 mb-2">
//               Shipping Information
//             </h4>
//             <ul className="list-disc pl-5 space-y-2 text-gray-700">
//               {shippingInfo.map((info, index) => (
//                 <li key={index}>{info}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Additional Sections */}
//       <ProductDetails />
//       <FAQSection />
//       <ReviewForm />
//     </main>
//   );
// };

// export default ProductPage;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useData } from "../Context/DataContext";
import { useAuth } from "../Context/AuthContext";
import { CartContext } from "../Context/CartContext";
import { TiTick } from "react-icons/ti";
import ProductDetails from "../Components/ProductPage/ProductDetails";
import FAQSection from "../Components/ProductPage/FAQSection";
import ReviewForm from "../Components/ProductPage/ReviewForm";

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useData();
  const { user } = useAuth();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");
  const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_URL}/products/${id}`);
        setProduct(response.data);
        setSelectedImage(response.data.image);
      } catch (err) {
        setError("Product not found!");
      }
    };

    if (products.length) {
      const foundProduct = products.find((item) => item._id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.image);
      } else {
        fetchProduct();
      }
    } else {
      fetchProduct();
    }
  }, [id, products]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found!</p>;

  // Get all images without repeating the main image
  const gallery = product.gallery || [];

  // Ensure product.image is the first one in the list, but no duplicates
  const allImages = [
    product.image,
    ...gallery.filter((img) => img !== product.image),
  ];

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    if (!user) return alert("Please login to add items to cart");
    if (!selectedSize) return alert("Please select a size");
    addToCart(product._id, selectedSize, quantity);
  };

  const productDetails = {
    vendor: "Versed Skin",
    type: "Cleansing Balm",
    pickupAvailable: true,
    pickupLocation: "Shop location",
    readyTime: "24 hours",
  };

  const shippingInfo = [
    "No EU import duties.",
    "Ships within 1-2 business days.",
    "Ships in our fully recyclable and biodegradable signature boxes.",
  ];

  const features = [
    { icon: "📦", text: "Free Shipping & Exchanges" },
    { icon: "🔒", text: "Flexible and secure payment, pay on delivery" },
    { icon: "🛡️", text: "2 Year Warranty" },
    { icon: "🎉", text: "600,000 happy customers" },
  ];

  return (
    <main className="p-4 sm:p-6 md:p-8">
      <p className="text-sm mb-4 mx-4 sm:mx-6 md:mx-10">
        Home / {product.title}
      </p>
      <div className="container flex flex-col lg:flex-row gap-8">
        {/* Left Image Section */}
        <aside className="w-full lg:w-1/2 px-4 sm:px-6 md:px-10">
          <div className="border">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full object-cover rounded-lg max-h-[600px]"
            />
          </div>
          <div className="flex gap-3 mt-4 flex-wrap">
            {allImages.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setSelectedImage(img)}
                alt={`Thumbnail ${index}`}
                className={`w-20 h-20 border object-cover cursor-pointer rounded-md hover:scale-105 transition ${
                  selectedImage === img ? "ring-2 ring-black" : ""
                }`}
              />
            ))}
          </div>
        </aside>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-10">
          <h1 className="text-3xl md:text-4xl font-medium mb-4 font-cormorant">
            {product.title}
          </h1>

          <p className="text-gray-700 mb-6 text-sm md:text-base">
            <span className="text-yellow-500 font-work">★★★★★</span>{" "}
            {product.ratings} reviews
          </p>

          <div className="flex items-center gap-4 mb-6 font-work text-lg">
            <p className="text-xl font-semibold">₹{product.price}</p>
            <p className="text-gray-500 line-through">
              ₹{product.originalPrice}
            </p>
            <p className="bg-[#d73f0f] text-white rounded-sm p-1">
              Sale {product.sale}
            </p>
          </div>

          {/* Size Selector */}
          <div className="my-4 font-work">
            <p className="font-semibold mb-3">
              Size: {selectedSize || "Select a size"}
            </p>
            <div className="flex flex-wrap gap-3">
              {product.sizes?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? "border-black bg-gray-100"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector & Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex border-2 rounded">
              <button
                onClick={decrementQuantity}
                className="w-8 h-12 flex items-center justify-center font-semibold text-xl hover:bg-gray-100"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 h-12 text-center text-xl"
              />
              <button
                onClick={incrementQuantity}
                className="w-8 h-12 flex items-center justify-center text-xl hover:bg-gray-100 font-semibold"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-[#202025] font-work h-12 w-full text-white rounded hover:bg-gray-700"
            >
              ADD TO CART
            </button>
          </div>

          {/* Pickup Info */}
          {productDetails.pickupAvailable && (
            <div className="text-sm text-gray-700 mb-6 border-b pb-6">
              <p className="flex items-center gap-1 font-work text-base">
                <TiTick className="text-green-600 text-2xl rotate-6" />
                Pickup available at {productDetails.pickupLocation}
              </p>
              <p className="ml-7">
                Usually ready in {productDetails.readyTime}
              </p>
              <p className="text-gray-600 hover:text-[#202025] ml-7 underline cursor-pointer">
                View store information
              </p>
            </div>
          )}

          {/* Features & Shipping */}
          <div className="py-6">
            <ul className="mb-6 space-y-4 font-work border-b pb-8">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-800"
                >
                  <span className="text-xl">{feature.icon}</span>
                  {feature.text}
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-gray-800 mb-2">
              Shipping Information
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {shippingInfo.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Extra Sections */}
      <ProductDetails />
      <FAQSection />
      <ReviewForm />
    </main>
  );
};

export default ProductPage;
