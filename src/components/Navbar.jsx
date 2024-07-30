import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDetails } from "./UserDetails";
import { TokenContext } from "../context/TokenProvider";
import axios from "axios";
import { ProductContext } from "../context/ProductsProvider";
import { WishlistContext } from "../context/WishlistProvider";

export const Navbar = () => {
  const [showBox, setShowBox] = useState(false);
  const { token, SignOut } = useContext(TokenContext);
  const { search, setSearch } = useContext(ProductContext);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://mern-e-commerce-server-lye5.onrender.com/search/${search}`
      );
      setSearch({ ...search, result: response.data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="md:flex md:justify-between space-y-2 md:space-y-0 xl:justify-around items-center px-2 py-3 md:px-1 lg:p-4 border border-b-gray-200 shadow-[0_2px_3px_rgba(0,0,0,.2)] fixed top-0 right-0 left-0 bg-white overflow-hidden z-10">
        <div className="flex justify-between items-center md:block">
          <Link to="/">
            <p className="text-4xl font-bold text-[#2c4152]">SHOPZY</p>
          </Link>
          <button className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
            &#9776;
          </button>
        </div>
        <div
          className={`${
            showMenu
              ? "visible space-y-2 md:space-y-0 md:flex justify-between items-center space-x-3"
              : "hidden"
          }`}
        >
          <div className="flex justify-between md:justify-end text-[#2c4152] font-semibold md:space-x-3 lg:space-x-9 uppercase md:capitalize lg:uppercase">
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/products">
              <p>Products</p>
            </Link>
            <Link to="/about">
              <p>About Us</p>
            </Link>
            <Link to="/contact">
              <p>Contact</p>
            </Link>
          </div>
          <div className="flex justify-between items-center md:space-x-1">
            <form className="block lg:h-full" onSubmit={handleSearch}>
              <input
                placeholder="What are you looking for?"
                className="text-sm rounded-full border border-[#2c4152] w-60 md:w-52 px-4 py-1 focus:outline-none active:outline-none bg-gray-50 text-[#2c4152]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
            <div className="flex space-x-2 md:space-x-1">
              <div className="relative">
                <div
                  onMouseEnter={() => setShowBox(true)}
                  className="h-8 w-8 flex justify-center items-center text-white rounded-full bg-[#2c4152] cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
                <div
                  onMouseLeave={() => setShowBox(false)}
                  className={`${
                    showBox ? "block" : "hidden"
                  } w-36 absolute top-0 left-3 shadow-md bg-white p-2 rounded-md border z-20`}
                >
                  {token ? (
                    <>
                      <div className="flex items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                        <UserDetails />
                      </div>
                      <button
                        className="bg-blue-700 text-white rounded-md w-full py-1"
                        onClick={SignOut}
                      >
                        Log Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <button className="bg-blue-700 text-white rounded-md w-full py-1">
                          Log In
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <Link to="/wishlist">
                <div className="h-8 w-8 flex justify-center items-center text-white rounded-full bg-[#2c4152]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
              </Link>
              <Link to="/cart">
                <div className="h-8 w-8 flex justify-center items-center text-white rounded-full bg-[#2c4152]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
