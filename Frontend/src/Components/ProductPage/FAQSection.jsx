import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is The Shipping Free?",
      answer:
        "Yes, we offer free shipping on all orders above $50. For orders below $50, a flat shipping fee of $5 applies.",
    },
    {
      question: "When Will I Receive My Item?",
      answer:
        "Orders are typically processed within 1-2 business days and delivered within 5-7 business days.",
    },
    {
      question: "Can I Change Or Return My Item?",
      answer:
        "Yes, you can return or exchange items within 30 days of delivery. Ensure that the product is in its original condition.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-5xl font-cormorant  text-center mb-5">FAQs</h2>
      <p className="text-center font-work text-gray-600 mb-10 border-b pb-5">
        Have a question? We are here to help.
      </p>
      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-xl font-cormorant font-medium text-gray-800 focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-2xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-3 pl-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
