import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://mern-e-commerce-server-lye5.onrender.com/forgot-password",
        { email }
      )
      .then((res) => {
        console.log("Response: ", res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border-b focus:outline-none active:outline-none mb-5 w-full py-2 pr-3 text-lg block"
      />
      <button
        onClick={handleSubmit}
        className="w-5/6 bg-orange-600 text-white px-3 hover:bg-yellow-500 hover:text-black border-none rounded-3xl text-xl mx-auto block p-2 font-semibold mb-4 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)]"
      >
        Send Reset Link
      </button>
    </>
  );
};
