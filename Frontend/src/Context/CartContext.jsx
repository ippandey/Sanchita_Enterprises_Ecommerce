import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);

  const cartCount = cart.length;

  // Fetch cart from localStorage or backend
  useEffect(() => {
    if (!user || !user._id) {
      setCart([]);
      return;
    }

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (storedCart.length) {
      setCart(storedCart);
    } else {
      axios
        .get(`http://localhost:5000/api/cart/${user._id}`)
        .then((res) => setCart(res.data))
        .catch((error) => console.error("Error fetching cart:", error));
    }
  }, [user]);

  // Sync cart with localStorage
  useEffect(() => {
    if (cart.length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Add item to cart
  const addToCart = async (productId, selectedSize, quantity = 1) => {
    if (!user) {
      alert("Please login to add items to cart.");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/api/cart/add`, {
        userId: user._id,
        productId,
        selectedSize,
        quantity,
      });

      setCart((prevCart) => {
        const existingItem = prevCart.find(
          (item) =>
            item.productId._id === productId &&
            item.selectedSize === selectedSize
        );
        if (existingItem) {
          return prevCart.map((item) =>
            item.productId._id === productId &&
            item.selectedSize === selectedSize
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }
        return [...prevCart, response.data.cartItem];
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // Remove item from cart
  const removeFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/remove/${id}`);
      setCart((prevCart) => prevCart.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
