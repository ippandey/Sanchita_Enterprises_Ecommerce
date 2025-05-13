import axios from "axios";

// Backend server base URL
const API_URL = "https://sanchita-wastecare-backend.onrender.com"; // <-- yahan apna original backend ka URL daalo

// Track Order API call
export const trackOrder = async (orderId) => {
  try {
    const { data } = await axios.get(`${API_URL}/api/orders/track/${orderId}`);
    return data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Something went wrong");
  }
};
