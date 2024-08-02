import React, { useContext, useState } from "react";
import { TokenContext } from "../context/TokenProvider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { tokenLocalStorage } = useContext(TokenContext);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "https://mern-e-commerce-server-lye5.onrender.com/user-login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      tokenLocalStorage(response.data.token, response.data.role);
      console.log(response);
      if (response.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <>
          <CircularProgress />
        </>
      ) : (
        <>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={data.email}
            onChange={handleChange}
            className="border-b focus:outline-none active:outline-none mb-5 w-full py-2 pr-3 text-lg block"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={data.password}
            onChange={handleChange}
            className="border-b focus:outline-none active:outline-none mb-5 w-full py-2 pr-3 text-lg block"
          />
          <Link to="/forgot-password">
            <p className="mb-5 text-[#2c4152] font-semibold hover:text-blue-600">
              Forgot Password ?
            </p>
          </Link>
          <button
            className="w-5/6 bg-orange-600 text-white px-3 hover:bg-yellow-500 hover:text-black border-none rounded-3xl text-xl mx-auto block p-2 font-semibold mb-4 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)]"
            onClick={handleLogin}
          >
            Login
          </button>
          <p>
            Don't have an account?
            <Link to="/signup">
              <span className="text-xs font-semibold text-[#2c4152] hover:text-blue-600">
                {" "}
                Register here
              </span>
            </Link>
          </p>
        </>
      )}
    </>
  );
};
