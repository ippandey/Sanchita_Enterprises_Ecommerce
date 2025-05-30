// import React, { useState } from "react";
// import faq_pic from "./../../assets/faq_pic.webp";

// const FAQ = () => {
//   const faqs = [
//     {
//       question: "What is your return policy?",
//       answer:
//         "We offer a 30-day return policy for unused and unopened products in their original packaging. Please contact our support team to initiate a return.",
//     },
//     {
//       question: "What Are Your Products Made",
//       answer:
//         "Our products are formulated using high-quality raw materials, ensuring efficiency and compliance with industry standards. Each product comes with a detailed specification sheet.",
//     },
//     {
//       question: "How can I track my order?",
//       answer:
//         'Once your order is dispatched, you will receive a tracking link via email. You can also track your order status in the "My Orders" section of your account.',
//     },
//     {
//       question: "How should I store the chemicals?",
//       answer:
//         "Our products should be stored in a cool, dry place, away from direct sunlight and moisture. Refer to the product label for specific storage guidelines.",
//     },
//     {
//       question: "Are your products environmentally friendly?",
//       answer:
//         "We strive to use eco-friendly formulations wherever possible and ensure our products meet safety and environmental regulations.",
//     },
//   ];

//   const [openIndex, setOpenIndex] = useState(0);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };
//   return (
//     <section className="border-b border-gray-800">
//       {/* Heading section */}
//       <div className="m-20">
//         <div className="mb-8">
//           <p className="text-[#7e7e84] font-work uppercase mb-4">faqs</p>
//           <h1 className="text-[44px] box-border font-thin capitalize font-cormorant">
//             Frequently Asked Questions
//           </h1>
//         </div>

//         {/* Main Content */}
//         <div className="flex">
//           {/* Image section */}
//           <div className="justify-start w-1/2">
//             <img src={faq_pic} alt="" />
//           </div>

//           {/* Questions section */}
//           <div className="w-1/2 px-10">
//             {faqs.map((faq, index) => (
//               <div key={index} className="shadow p-4">
//                 <div
//                   className="flex justify-between items-center cursor-pointer"
//                   onClick={() => toggleFAQ(index)}
//                 >
//                   {/* Question */}
//                   <h3 className="text-[28px] italic font-cormorant">
//                     {faq.question}
//                   </h3>
//                   {/* Toggle Icon */}
//                   <button className="text-xl font-bold text-gray-600">
//                     {openIndex === index ? "-" : "+"}
//                   </button>
//                 </div>
//                 {/* Answer */}
//                 {openIndex === index && (
//                   <p className=" text-gray-600 font-work my-5">{faq.answer}</p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

import React, { useState } from "react";
import faq_pic from "./../../assets/faq_pic.webp";

const FAQ = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for unused and unopened products in their original packaging. Please contact our support team to initiate a return.",
    },
    {
      question: "What Are Your Products Made",
      answer:
        "Our products are formulated using high-quality raw materials, ensuring efficiency and compliance with industry standards. Each product comes with a detailed specification sheet.",
    },
    {
      question: "How can I track my order?",
      answer:
        'Once your order is dispatched, you will receive a tracking link via email. You can also track your order status in the "My Orders" section of your account.',
    },
    {
      question: "How should I store the chemicals?",
      answer:
        "Our products should be stored in a cool, dry place, away from direct sunlight and moisture. Refer to the product label for specific storage guidelines.",
    },
    {
      question: "Are your products environmentally friendly?",
      answer:
        "We strive to use eco-friendly formulations wherever possible and ensure our products meet safety and environmental regulations.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="border-b border-gray-800 bg-white">
      <div className="px-4 sm:px-8 lg:px-20 py-16 max-w-screen-xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-[#7e7e84] font-work uppercase mb-2">FAQs</p>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-thin capitalize font-cormorant">
            Frequently Asked Questions
          </h1>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={faq_pic}
              alt="FAQ illustration"
              className="w-full h-auto rounded-xl shadow"
            />
          </div>

          {/* Questions */}
          <div className="w-full lg:w-1/2 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow-sm bg-[#f9f6f1]"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl sm:text-2xl font-cormorant italic">
                    {faq.question}
                  </h3>
                  <button className="text-2xl font-bold text-gray-600">
                    {openIndex === index ? "−" : "+"}
                  </button>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-700 font-work text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
