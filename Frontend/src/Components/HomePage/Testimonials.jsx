import React, { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO, Example Co.",
      review:
        "This product is amazing! It has completely transformed the way we work.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "CTO, Tech Corp.",
      review:
        "Absolutely love this! Highly recommend to anyone looking for a reliable solution.",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Manager, Retail Inc.",
      review:
        "Fantastic experience! The support team is also extremely helpful.",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Designer, Creatives Studio",
      review: "A truly innovative product with great customer service!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const visibleTestimonials =
    testimonials.slice(currentIndex, currentIndex + 3).length < 3
      ? [
          ...testimonials.slice(currentIndex),
          ...testimonials.slice(0, 3 - (testimonials.length - currentIndex)),
        ]
      : testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="overflow-hidden relative bg-[#f9f6f1]">
      <div className="m-20">
        <h2 className="text-[44px] font-medium font-cormorant text-center m-20">
          What Our Clients Say
        </h2>
        <div className="relative">
          {/* Carousel */}
          <div className="flex justify-center gap-6 overflow-hidden mb-10">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-lg w-1/3 flex flex-col items-center text-center"
              >
                <p className="italic text-gray-600 font-work">
                  "{testimonial.review}"
                </p>
                <h4 className="mt-4 font-semibold text-lg font-work">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500 font-work">
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="absolute inset-0 flex items-center justify-between p-8 m-6">
            <button
              className="p-2 rounded-full shadow bg-gray-400/20"
              onClick={handlePrev}
            >
              <FiChevronLeft size={30} />
            </button>
            <button
              className="p-2 rounded-full shadow bg-gray-400/20"
              onClick={handleNext}
            >
              <FiChevronRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
