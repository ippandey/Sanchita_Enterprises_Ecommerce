import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    // Fetch cart from backend using user._id
    axios
      .get(`http://localhost:5000/api/cart/${user._id}`)
      .then((res) => {
        setCart(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cart:", error);
        setLoading(false);
      });
  }, [user, setCart]);

  const handleRemoveItem = (id) => {
    axios
      .delete(`http://localhost:5000/api/cart/remove/${id}`)
      .then(() => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== id));
      })
      .catch((error) => console.error("Error removing item:", error));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 0) return;
    if (newQuantity === 0) return handleRemoveItem(id);

    // Optimistically update the UI first
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, quantity: newQuantity } : item
      )
    );

    // Then make the API call
    axios
      .put(`http://localhost:5000/api/cart/update/${id}`, {
        quantity: newQuantity,
      })
      .catch((error) => {
        console.error("Error updating quantity:", error);
        // Revert UI change in case of error
        setCart((prevCart) =>
          prevCart.map((item) =>
            item._id === id ? { ...item, quantity: item.quantity } : item
          )
        );
      });
  };

  const applyCoupon = () => {
    if (coupon === "AOK") {
      setDiscount(20);
    } else {
      alert("Invalid Coupon Code");
      setDiscount(0);
    }
  };

  const calculateTotal = () => {
    let total = cart.reduce(
      (sum, item) => sum + item.productId.price * item.quantity,
      0
    );
    return discount ? (total * (100 - discount)) / 100 : total;
  };

  if (loading) return <p className="text-center text-lg">Loading cart...</p>;

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg">
          Please{" "}
          <Link to="/login" className="text-blue-500 underline">
            login
          </Link>{" "}
          to view your cart.
        </p>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items - Left Section */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-3 font-semibold border-b pb-3 text-gray-600">
            <span>Product</span>
            <span className="text-center">Quantity</span>
            <span className="text-right">Total</span>
          </div>

          {cart.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-3 items-center border-b py-4"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.productId.image}
                  alt={item.productId.title}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <h3 className="text-lg">{item.productId.title}</h3>
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="text-red-500 text-sm mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() =>
                    handleQuantityChange(item._id, item.quantity - 1)
                  }
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(item._id, item.quantity + 1)
                  }
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              {/* Total Price */}
              <div className="text-right text-lg font-medium">
                ₹{(item.productId.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Coupon and Checkout */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-lg font-semibold">List Coupon</h3>
          <p className="text-gray-600">
            <strong>AOK</strong> → 20% off all collections
          </p>

          <div className="mt-3">
            <input
              type="text"
              placeholder="Coupon"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button
              onClick={applyCoupon}
              className="w-full mt-2 bg-black text-white py-2 rounded"
            >
              Apply
            </button>
          </div>

          <h3 className="text-lg font-semibold mt-6">Total</h3>
          <p className="text-2xl font-bold">₹{calculateTotal().toFixed(2)}</p>
          <p className="text-gray-600">
            Taxes and shipping calculated at checkout
          </p>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full mt-4 bg-black text-white uppercase py-3 rounded-lg text-lg font-semibold"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
