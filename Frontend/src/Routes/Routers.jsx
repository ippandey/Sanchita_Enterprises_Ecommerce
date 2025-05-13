import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Shop from "../Pages/Shop";
import ProductPage from "../Pages/ProductPage";
import CartPage from "../Pages/CartPage";
import CheckoutPage from "../Pages/CheckoutPage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ProfilePage from "../Pages/ProfilePage";
import AuthRedirect from "../Pages/AuthRedirect";
import TrackOrder from "../Pages/TrackOrder";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="products/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/auth" element={<AuthRedirect />} />
      <Route path="/track-order" element={<TrackOrder />} />
    </Routes>
  );
};

export default Routers;
