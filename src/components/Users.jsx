import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Users = () => {
  const [items, setItems] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mern-e-commerce-server-lye5.onrender.com/create-user",
        items,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Enter full name"
        value={items.name}
        onChange={handleChange}
        className="border-b focus:outline-none active:outline-none mb-5 w-full py-2 pr-3 text-lg block"
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={items.email}
        onChange={handleChange}
        className="border-b focus:outline-none active:outline-none mb-5 w-full py-2 pr-3 text-lg block"
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={items.password}
        onChange={handleChange}
        className="border-b focus:outline-none active:outline-none mb-5 w-full py-2 pr-3 text-lg block"
      />
      <button
        className="w-5/6 bg-orange-600 text-white px-3 hover:bg-yellow-500 hover:text-black border-none rounded-3xl text-xl mx-auto block p-2 font-semibold mb-4 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)]"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <p>
        Already have an account?
        <Link to="/login">
          <span className="text-[#2c4152] hover:text-blue-600 text-xs font-semibold">
            {" "}
            Sign In here
          </span>
        </Link>
      </p>
    </>
  );
};
