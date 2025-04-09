import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ReviewForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <div className="w-full bg-[#f8f8f8] mx-auto p-4">
      <h3 className="font-cormorant text-3xl text-center my-8">
        Customer Reviews
      </h3>
      {!isOpen ? (
        <div className="flex justify-center gap-10 items-center">
          <div className="items-center border-r pr-10">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <AiOutlineStar key={i} className="h-5 w-5 text-[#202025]" />
              ))}
            </div>
            <p className="text-[#202025]">Be the first to write a review</p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#202025] text-white px-10 py-3 rounded-md font-work hover:opacity-85"
          >
            Write a Review
          </button>
        </div>
      ) : (
        <div className="p-4 items-center justify-center text-center">
          <h2 className="text-xl font-semibold font-work mb-4">
            Write a review
          </h2>
          <div className="mb-4 font-work">
            <p className="text-[#202025s] mb-2">Rating</p>
            <div className="flex text-center items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  onClick={() => setRating(i + 1)}
                  className="cursor-pointer"
                >
                  {i < rating ? (
                    <AiFillStar className="h-6 w-6 text-[#202025]" />
                  ) : (
                    <AiOutlineStar className="h-6 w-6 text-gray-400" />
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-500 mb-1" htmlFor="title">
              Review Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm text-gray-500 mb-1"
              htmlFor="review"
            >
              Review
            </label>
            <textarea
              id="review"
              rows="4"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-500 mb-1" htmlFor="media">
              Picture/Video (optional)
            </label>
            <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
              <p className="text-gray-500">Upload</p>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-500 mb-1" htmlFor="name">
              Name (displayed publicly like John Smith)
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-500 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-gray-200 text-black px-4 py-2 rounded-md"
            >
              Cancel Review
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md">
              Submit Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
