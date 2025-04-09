import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/products`;

// Add Product
export const addProduct = async (product) => {
  const formData = new FormData();
  for (const key in product) {
    if (key === "galleryFiles") {
      product[key].forEach((file) => formData.append("galleryFiles", file));
    } else {
      formData.append(key, product[key]);
    }
  }

  const response = await axios.post(API_URL, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Fetch Products
export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete Product
export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
