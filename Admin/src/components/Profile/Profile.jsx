import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";

const orders = [
  {
    id: 9321872348,
    date: "2025-04-10",
    chemical: "Reactive Blue 19",
    size: "Medium",
    customer: "Raj Dye Works",
    address: "Ahmedabad, Gujarat",
    total: 5200,
  },
  {
    id: 8745623847,
    date: "2025-04-11",
    chemical: "Sodium Sulphate",
    size: "Large",
    customer: "Surat Textiles",
    address: "Surat, Gujarat",
    total: 4300,
  },
  {
    id: 9912837452,
    date: "2025-04-12",
    chemical: "Acetic Acid",
    size: "Small",
    customer: "Vadodara Dyeing",
    address: "Vadodara, Gujarat",
    total: 3900,
  },
  {
    id: 8734569201,
    date: "2025-04-13",
    chemical: "Hydrogen Peroxide",
    size: "Small",
    customer: "Mathura Fabrics",
    address: "Mathura, Uttar Pradesh",
    total: 3500,
  },
  {
    id: 9123487563,
    date: "2025-04-14",
    chemical: "Reactive Yellow 145",
    size: "Medium",
    customer: "Radha Textiles",
    address: "Vrindavan, Mathura",
    total: 4100,
  },
  {
    id: 9812348756,
    date: "2025-04-15",
    chemical: "Sodium Carbonate",
    size: "Medium",
    customer: "Hyderabad Dyers",
    address: "Hyderabad, Telangana",
    total: 4700,
  },
  {
    id: 9263487561,
    date: "2025-04-16",
    chemical: "Caustic Soda",
    size: "Large",
    customer: "Deccan Mills",
    address: "Secunderabad, Telangana",
    total: 5800,
  },
  {
    id: 9654321875,
    date: "2025-04-18",
    chemical: "Sodium Carbonate",
    size: "Medium",
    customer: "Vadodara Dyeing",
    address: "Navsari, Gujarat",
    total: 4627,
  },
  {
    id: 9237461825,
    date: "2025-04-24",
    chemical: "Nonionic Softener",
    size: "Large",
    customer: "Vadodara Dyeing",
    address: "Vadodara, Gujarat",
    total: 5396,
  },
  {
    id: 9856123048,
    date: "2025-04-17",
    chemical: "Sequestering Agent",
    size: "Small",
    customer: "Hyderabad Dyers",
    address: "Secunderabad, Hyderabad",
    total: 4968,
  },
  {
    id: 9283746150,
    date: "2025-04-17",
    chemical: "Reactive Yellow 145",
    size: "Medium",
    customer: "Telangana Colors",
    address: "Hyderabad, Hyderabad",
    total: 4610,
  },
  {
    id: 9532471895,
    date: "2025-04-28",
    chemical: "Acetic Acid",
    size: "Medium",
    customer: "Mathura Fabrics",
    address: "Mathura, Mathura",
    total: 5244,
  },
  {
    id: 9736284512,
    date: "2025-04-29",
    chemical: "Formic Acid",
    size: "Large",
    customer: "Vrindavan Weaves",
    address: "Barsana, Mathura",
    total: 4455,
  },
  {
    id: 9321847650,
    date: "2025-04-21",
    chemical: "Sodium Hydroxide",
    size: "Small",
    customer: "Rajkot Fabrics",
    address: "Ahmedabad, Gujarat",
    total: 4233,
  },
  {
    id: 9162839475,
    date: "2025-04-18",
    chemical: "Sodium Carbonate",
    size: "Large",
    customer: "Deccan Mills",
    address: "Charminar, Hyderabad",
    total: 5921,
  },
  {
    id: 9745128360,
    date: "2025-04-27",
    chemical: "Caustic Soda",
    size: "Medium",
    customer: "Navsari Textiles",
    address: "Rajkot, Gujarat",
    total: 3502,
  },
  {
    id: 9271845630,
    date: "2025-04-25",
    chemical: "Sulfuric Acid",
    size: "Large",
    customer: "Hyderabad Dyers",
    address: "Banjara Hills, Hyderabad",
    total: 3985,
  },
  {
    id: 9842367158,
    date: "2025-04-20",
    chemical: "Sodium Carbonate",
    size: "Medium",
    customer: "Surat Textiles",
    address: "Rajkot, Gujarat",
    total: 6971,
  },
  {
    id: 9182736450,
    date: "2025-04-17",
    chemical: "Sodium Hydroxide",
    size: "Small",
    customer: "Vrindavan Weaves",
    address: "Govardhan, Mathura",
    total: 6134,
  },
  {
    id: 9674123857,
    date: "2025-04-17",
    chemical: "Urea",
    size: "Large",
    customer: "Charminar Prints",
    address: "Secunderabad, Hyderabad",
    total: 7115,
  },
  {
    id: 9762834592,
    date: "2025-04-17",
    chemical: "Urea",
    size: "Medium",
    customer: "Nizam Textiles",
    address: "Begumpet, Hyderabad",
    total: 6362,
  },
  {
    id: 9487362910,
    date: "2025-04-24",
    chemical: "Sequestering Agent",
    size: "Large",
    customer: "Vrindavan Weaves",
    address: "Vrindavan, Mathura",
    total: 7483,
  },
  {
    id: 9021876345,
    date: "2025-04-17",
    chemical: "Urea",
    size: "Medium",
    customer: "Nizam Textiles",
    address: "Begumpet, Hyderabad",
    total: 6362,
  },
  {
    id: 9842631492,
    date: "2025-04-20",
    chemical: "Reactive Blue 19",
    size: "Medium",
    customer: "Shri Krishan Dyers",
    address: "Govardhan, Mathura",
    total: 6306,
  },
  {
    id: 9321872348,
    date: "2025-04-22",
    chemical: "Reactive Blue 19",
    size: "Medium",
    customer: "Raj Dye Works",
    address: "Ahmedabad, Gujarat",
    total: 5200,
  },
  {
    id: 8745623847,
    date: "2025-04-23",
    chemical: "Sodium Sulphate",
    size: "Large",
    customer: "Surat Textiles",
    address: "Surat, Gujarat",
    total: 4300,
  },
  {
    id: 9912837452,
    date: "2025-04-24",
    chemical: "Acetic Acid",
    size: "Small",
    customer: "Vadodara Dyeing",
    address: "Vadodara, Gujarat",
    total: 3900,
  },
  {
    id: 8734569201,
    date: "2025-04-25",
    chemical: "Hydrogen Peroxide",
    size: "Small",
    customer: "Mathura Fabrics",
    address: "Mathura, Uttar Pradesh",
    total: 3500,
  },
  {
    id: 9123487563,
    date: "2025-04-26",
    chemical: "Reactive Yellow 145",
    size: "Medium",
    customer: "Radha Textiles",
    address: "Vrindavan, Mathura",
    total: 4100,
  },
  {
    id: 9812348756,
    date: "2025-04-27",
    chemical: "Sodium Carbonate",
    size: "Medium",
    customer: "Hyderabad Dyers",
    address: "Hyderabad, Telangana",
    total: 4700,
  },
  {
    id: 9263487561,
    date: "2025-04-28",
    chemical: "Caustic Soda",
    size: "Large",
    customer: "Deccan Mills",
    address: "Secunderabad, Telangana",
    total: 5800,
  },
  {
    id: 9654321875,
    date: "2025-04-29",
    chemical: "Sodium Carbonate",
    size: "Medium",
    customer: "Vadodara Dyeing",
    address: "Navsari, Gujarat",
    total: 4627,
  },
  {
    id: 9237461825,
    date: "2025-04-30",
    chemical: "Nonionic Softener",
    size: "Large",
    customer: "Vadodara Dyeing",
    address: "Vadodara, Gujarat",
    total: 5396,
  },
  {
    id: 9856123048,
    date: "2025-05-01",
    chemical: "Sequestering Agent",
    size: "Small",
    customer: "Hyderabad Dyers",
    address: "Secunderabad, Hyderabad",
    total: 4968,
  },
  {
    id: 9283746150,
    date: "2025-05-02",
    chemical: "Reactive Yellow 145",
    size: "Medium",
    customer: "Telangana Colors",
    address: "Hyderabad, Hyderabad",
    total: 4610,
  },
  {
    id: 9532471895,
    date: "2025-05-03",
    chemical: "Acetic Acid",
    size: "Medium",
    customer: "Mathura Fabrics",
    address: "Mathura, Mathura",
    total: 5244,
  },
  {
    id: 9736284512,
    date: "2025-05-04",
    chemical: "Formic Acid",
    size: "Large",
    customer: "Vrindavan Weaves",
    address: "Barsana, Mathura",
    total: 4455,
  },
  {
    id: 9321847650,
    date: "2025-05-05",
    chemical: "Sodium Hydroxide",
    size: "Small",
    customer: "Rajkot Fabrics",
    address: "Ahmedabad, Gujarat",
    total: 4233,
  },
  {
    id: 9162839475,
    date: "2025-05-06",
    chemical: "Sodium Carbonate",
    size: "Large",
    customer: "Deccan Mills",
    address: "Charminar, Hyderabad",
    total: 5921,
  },
  {
    id: 9745128360,
    date: "2025-05-07",
    chemical: "Caustic Soda",
    size: "Medium",
    customer: "Navsari Textiles",
    address: "Rajkot, Gujarat",
    total: 3502,
  },
  {
    id: 9271845630,
    date: "2025-05-08",
    chemical: "Sulfuric Acid",
    size: "Large",
    customer: "Hyderabad Dyers",
    address: "Banjara Hills, Hyderabad",
    total: 3985,
  },
  {
    id: 9842367158,
    date: "2025-05-09",
    chemical: "Sodium Carbonate",
    size: "Medium",
    customer: "Surat Textiles",
    address: "Rajkot, Gujarat",
    total: 6971,
  },
  {
    id: 9182736450,
    date: "2025-05-10",
    chemical: "Sodium Hydroxide",
    size: "Small",
    customer: "Vrindavan Weaves",
    address: "Govardhan, Mathura",
    total: 6134,
  },
  {
    id: 9674123857,
    date: "2025-05-11",
    chemical: "Urea",
    size: "Large",
    customer: "Charminar Prints",
    address: "Secunderabad, Hyderabad",
    total: 7115,
  },
  {
    id: 9762834592,
    date: "2025-05-12",
    chemical: "Urea",
    size: "Medium",
    customer: "Nizam Textiles",
    address: "Begumpet, Hyderabad",
    total: 6362,
  },
  {
    id: 9487362910,
    date: "2025-05-12",
    chemical: "Sequestering Agent",
    size: "Large",
    customer: "Vrindavan Weaves",
    address: "Vrindavan, Mathura",
    total: 7483,
  },
  {
    id: 9021876345,
    date: "2025-05-11",
    chemical: "Urea",
    size: "Medium",
    customer: "Nizam Textiles",
    address: "Begumpet, Hyderabad",
    total: 6362,
  },
  {
    id: 9842631492,
    date: "2025-05-05",
    chemical: "Reactive Blue 19",
    size: "Medium",
    customer: "Shri Krishan Dyers",
    address: "Govardhan, Mathura",
    total: 6306,
  },
  // More orders here...
  {
    id: 9231456780,
    date: "2025-05-06",
    chemical: "Reactive Blue 19",
    size: "Small",
    customer: "Srinivasa Textiles",
    address: "Chennai, Tamil Nadu",
    total: 4425,
  },
  {
    id: 9836572148,
    date: "2025-05-07",
    chemical: "Acetic Acid",
    size: "Medium",
    customer: "Surya Dyeing",
    address: "Coimbatore, Tamil Nadu",
    total: 5192,
  },
  {
    id: 9327845612,
    date: "2025-05-08",
    chemical: "Hydrogen Peroxide",
    size: "Large",
    customer: "Prakash Chemicals",
    address: "Mumbai, Maharashtra",
    total: 5625,
  },
  {
    id: 8763594921,
    date: "2025-05-09",
    chemical: "Sodium Sulphate",
    size: "Medium",
    customer: "Sangli Dyers",
    address: "Sangli, Maharashtra",
    total: 4467,
  },
  {
    id: 9827463185,
    date: "2025-05-10",
    chemical: "Sodium Carbonate",
    size: "Small",
    customer: "Vishal Dye Works",
    address: "Pune, Maharashtra",
    total: 3890,
  },
  {
    id: 9237654319,
    date: "2025-05-11",
    chemical: "Formic Acid",
    size: "Medium",
    customer: "Rajkot Textiles",
    address: "Rajkot, Gujarat",
    total: 4198,
  },
  {
    id: 9382716542,
    date: "2025-05-12",
    chemical: "Caustic Soda",
    size: "Large",
    customer: "Shree Textile Industries",
    address: "Surat, Gujarat",
    total: 5860,
  },
  {
    id: 9762837514,
    date: "2025-05-03",
    chemical: "Acetic Acid",
    size: "Small",
    customer: "Srinivasa Dyeing",
    address: "Bengaluru, Karnataka",
    total: 3500,
  },
  {
    id: 9816472835,
    date: "2025-05-04",
    chemical: "Sulfuric Acid",
    size: "Medium",
    customer: "Surat Dye Works",
    address: "Surat, Gujarat",
    total: 4589,
  },
  {
    id: 9327845634,
    date: "2025-05-05",
    chemical: "Reactive Blue 19",
    size: "Large",
    customer: "Madhur Textile Mills",
    address: "Rajkot, Gujarat",
    total: 6123,
  },
  {
    id: 9723846527,
    date: "2025-05-06",
    chemical: "Reactive Yellow 145",
    size: "Medium",
    customer: "Madhur Fabrics",
    address: "Vapi, Gujarat",
    total: 5250,
  },
];

const chartData = orders.map((order) => ({
  date: order.date,
  sales: order.total,
}));

const Profile = () => {
  const [showChart, setShowChart] = useState(false);

  return (
    <div className="p-6 max-w-7xl mx-auto relative">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Owner Dashboard
      </h2>

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Recent Orders</h3>
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
          onClick={() => setShowChart(!showChart)} // Toggle chart visibility
        >
          {showChart ? "Hide Sales Chart" : "View Sales Chart"}
        </button>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-2xl">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-900">
            <tr>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Chemical</th>
              <th className="px-6 py-3">Size</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Address</th>
              <th className="px-6 py-3">Total (₹)</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50 transition duration-200"
              >
                <td className="px-6 py-4 font-medium">{order.id}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">{order.chemical}</td>
                <td className="px-6 py-4">{order.size}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.address}</td>
                <td className="px-6 py-4">₹{order.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fullscreen Glassmorphism Chart */}
      <AnimatePresence>
        {showChart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/30 backdrop-blur-xl z-50 flex flex-col justify-center items-center p-6"
          >
            <div className="w-full max-w-5xl bg-white/90 p-6 rounded-2xl shadow-xl relative">
              <button
                onClick={() => setShowChart(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
              >
                ✕
              </button>
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Sales Over Time
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={chartData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
