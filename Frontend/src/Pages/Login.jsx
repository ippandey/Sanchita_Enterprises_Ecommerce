import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { login as loginAPI } from "../services/api"; // API Call

const Login = () => {
  const { login } = useContext(AuthContext); // Use AuthContext
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginAPI({ email, password });
      login(data.user, data.token); // Update AuthContext state
      console.log(data);
      navigate("/");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center border-b border-black">
      <div className="w-3/5 px-8 pt-12">
        <div className="text-center h-80">
          <h1 className="text-4xl text-[#202025] font-cormorant font-medium mb-6">
            Login
          </h1>
          <p className="text-base font-work mb-12 text-[#202025]">
            Please enter your email and password:
          </p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="font-work w-full p-2 mb-6 h-12 border border-[#dee2e6] rounded inline-block"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="font-work w-full p-2 mb-6 h-12 border border-[#dee2e6] rounded inline-block"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-[#202025] text-white h-12 font-work font-medium p-2 rounded hover:opacity-80 duration-700"
          >
            LOGIN
          </button>
          <p className="text-base font-work text-center mt-4">
            New customer?{" "}
            <Link
              to="/register"
              className="text-[#444444] hover:text-[#202025] underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
