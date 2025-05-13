import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addReviewToProduct = async (productId, reviewData) => {
  const response = await fetch(`${API_URL}/products/${productId}/review`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reviewData),
  });

  if (!response.ok) {
    const errorText = await response.text(); // capture plain error
    console.error("Review submission failed:", errorText); // log to console
    throw new Error("Review submission failed");
  }

  return response.json();
};
