import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";

const ProfilePage = () => {
  const { user, logout, loading } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/api/orders?user=${user._id}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-cormorant font-medium">My Account</h1>

      <div className="mt-6 flex flex-col md:flex-row justify-between">
        {/* Order History Section */}
        <div>
          <h2 className="text-2xl font-cormorant font-medium">Order History</h2>
          {orders.length === 0 ? (
            <p className="text-gray-600 font-work mt-2">
              You haven't placed any orders yet.
            </p>
          ) : (
            <ul className="mt-2 space-y-2">
              {orders.map((order, index) => (
                <li key={index} className="border p-2 rounded-lg">
                  Order #{order.id} - {order.status}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Account Details Section */}
        <div className="text-right">
          <h2 className="text-xl font-cormorant">Account Details</h2>
          {user && (
            <>
              <p className="text-lg font-work font-medium">{user.name}</p>
              <p className="text-gray-600 font-work">{user.country}</p>
            </>
          )}
          <a href="#" className="text-gray-600 hover:underline mt-2 block">
            View Addresses (0)
          </a>
          <a href="#" className="text-red-600 hover:underline mt-1 block">
            Log out
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
