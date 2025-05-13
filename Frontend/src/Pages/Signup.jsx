// import { React, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signup } from "../services/api";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signup({ name, email, password });
//       alert("Signup successful! Please login.");
//       navigate("/login");
//     } catch (err) {
//       setError(err.message || "Signup failed");
//     }
//   };
//   return (
//     <div className="flex items-center justify-center border-b border-black">
//       <div className="w-3/5 px-8 pt-12 text-center h-screen">
//         <h1 className="text-4xl text-[#202025] font-cormorant font-medium mb-6">
//           Register
//         </h1>
//         <p className="text-base font-work mb-8 text-[#202025]">
//           Please fill in the fields below:
//         </p>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           className="font-work w-full p-2 mb-6 h-12 border border-[#dee2e6] rounded inline-block"
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="font-work w-full p-2 mb-6 h-12 border border-[#dee2e6] rounded inline-block"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="font-work w-full p-2 mb-6 h-12 border border-[#dee2e6] rounded inline-block"
//         />
//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="w-full bg-[#202025] text-white h-12 uppercase font-work font-medium p-2 rounded hover:opacity-80 duration-700"
//         >
//           Submit
//         </button>
//         <p className="text-base font-work text-center mt-4">
//           Already a member ?{" "}
//           <Link
//             to="/login"
//             className="text-[#444444] hover:text-[#202025] underline"
//           >
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/api";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup({ name, email, password });
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      setError(err.message || "Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6">
      <div className="w-full max-w-md p-6 sm:p-8 border-b border-black">
        <h1 className="text-3xl sm:text-4xl text-[#202025] font-cormorant font-medium mb-4 text-center">
          Register
        </h1>
        <p className="text-sm sm:text-base font-work mb-8 text-[#202025] text-center">
          Please fill in the fields below:
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="font-work w-full px-4 py-3 h-12 border border-[#dee2e6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#202025]"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="font-work w-full px-4 py-3 h-12 border border-[#dee2e6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#202025]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="font-work w-full px-4 py-3 h-12 border border-[#dee2e6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#202025]"
          />
          <button
            type="submit"
            className="w-full bg-[#202025] text-white h-12 font-work font-medium px-4 py-2 rounded-md hover:opacity-80 transition duration-300 uppercase"
          >
            Submit
          </button>
        </form>

        <p className="text-sm sm:text-base font-work text-center mt-4">
          Already a member?{" "}
          <Link
            to="/login"
            className="text-[#444444] hover:text-[#202025] underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
