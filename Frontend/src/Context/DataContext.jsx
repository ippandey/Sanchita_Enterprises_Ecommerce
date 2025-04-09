import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const { user } = useAuth();

  const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/products`);
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle user login
  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      if (response.data && response.data._id) {
        fetchCart(); // Fetch cart after login
      } else {
        console.error("Invalid user data received:", response.data);
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
    }
  };

  return (
    <DataContext.Provider
      value={{
        products,
        cart,
        loading,
        error,
        user,
        setProducts,
        handleLogin,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
