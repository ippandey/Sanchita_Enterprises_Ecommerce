import React, { useState } from "react";
import { trackOrder } from "../services/orderApi"; // Adjust the import path as necessary

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);

  const handleTrack = async (e) => {
    e.preventDefault();
    try {
      const data = await trackOrder(orderId);
      setOrderStatus(data.status);
    } catch (error) {
      console.error(error);
      setOrderStatus("Order not found");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 mt-5">
      <h1 className="text-3xl font-semibold mb-4 font-cormorant">
        Track Your Order
      </h1>
      <form
        onSubmit={handleTrack}
        className="flex flex-col items-center space-y-4"
      >
        <input
          type="text"
          placeholder="Enter Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="p-2 border rounded w-64 font-work"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-gray-900 text-white rounded font-work"
        >
          Track Order
        </button>
      </form>

      {orderStatus && (
        <div className="mt-6 p-4 bg-green-100 text-green-700 rounded">
          <p>Status: {orderStatus}</p>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
