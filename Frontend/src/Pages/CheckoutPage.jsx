import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckoutPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const user = useAuth();
  const navigate = useNavigate();
  const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;

  const handlePayment = async () => {
    try {
      const totalAmount =
        cart.reduce(
          (sum, item) => sum + item.productId.price * item.quantity,
          0
        ) * 100; // Convert to paisa

      // Step 1: Create Razorpay order
      const response = await axios.post(`${API_URL}/payment`, {
        amount: totalAmount,
      });

      const { id: order_id, amount } = response.data;

      const options = {
        key: "rzp_test_C1MZg4dcoYkDro", // Replace with your Razorpay Key
        amount: amount,
        currency: "INR",
        name: "Sanchita Enterprises",
        description: "Payment for your order",
        order_id: order_id,
        handler: async function (response) {
          alert(
            "Payment Successful! Payment ID: " + response.razorpay_payment_id
          );

          // Step 2: Send order details to backend
          try {
            const orderItems = cart.map((item) => ({
              productId: item.productId._id,
              quantity: item.quantity,
            }));

            await axios.post(`${API_URL}/payment/success`, {
              userId: user._id,
              items: orderItems,
              totalAmount: totalAmount / 100, // Convert back to INR
              paymentId: response.razorpay_payment_id,
            });

            // Step 3: Clear cart AFTER successful order save
            setCart([]);
            localStorage.removeItem("cart");
            navigate("/");
          } catch (orderError) {
            console.error("Error saving order:", orderError);
          }
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <p className="text-lg mb-4">
        Total Amount: ₹
        {cart.reduce(
          (sum, item) => sum + item.productId.price * item.quantity,
          0
        )}
      </p>
      <button
        onClick={handlePayment}
        className="bg-black text-white w-full py-2 rounded-lg"
      >
        Proceed to Pay
      </button>
    </div>
  );
};

export default CheckoutPage;
