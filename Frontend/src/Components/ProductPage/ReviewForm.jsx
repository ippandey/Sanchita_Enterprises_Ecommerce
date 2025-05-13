import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { addReviewToProduct } from "./../../services/api"; // Make sure this exists

const ReviewForm = () => {
  const { id } = useParams(); // productId from URL
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    if (!rating || !name.trim()) {
      alert("Please fill in the required fields (name and rating)");
      return;
    }

    try {
      await addReviewToProduct(id, {
        name,
        rating,
        review: reviewText, // Optional
      });
      alert("Review submitted!");
      setRating(0);
      setReviewText("");
      setName("");
      setIsOpen(false);
      // You could refresh reviews here if you fetch them separately
    } catch (error) {
      console.error("Error submitting review:", error); // log the actual error
      alert("Failed to submit review");
    }
  };

  return (
    <div className="w-full bg-[#f8f8f8] mx-auto p-6">
      <h3 className="font-cormorant text-3xl sm:text-4xl text-center my-8">
        Customer Reviews
      </h3>

      {!isOpen ? (
        <div className="flex flex-col sm:flex-row justify-center gap-10 items-center">
          <div className="sm:border-r pr-10 sm:w-auto w-full text-center mb-4 sm:mb-0">
            <div className="flex justify-center">
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
          <h2 className="text-xl sm:text-2xl font-semibold font-work mb-4">
            Write a review
          </h2>

          {/* Rating Stars */}
          <div className="mb-4 font-work">
            <p className="text-[#202025] mb-2">Rating</p>
            <div className="flex justify-center items-center">
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

          {/* Review Text */}
          <div className="mb-4">
            <label
              className="block text-sm sm:text-base text-gray-700 mb-2"
              htmlFor="review"
            >
              Review (optional)
            </label>
            <textarea
              id="review"
              rows="4"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          {/* Name Input */}
          <div className="mb-4">
            <label
              className="block text-sm sm:text-base text-gray-700 mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-gray-200 text-black px-6 py-3 rounded-md w-full sm:w-auto"
            >
              Cancel Review
            </button>
            <button
              onClick={handleSubmit}
              className="bg-black text-white px-6 py-3 rounded-md w-full sm:w-auto"
            >
              Submit Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
