import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div>
        <p className="text-lg md:text-3xl lg:text-4xl text-white py-3 text-center bg-[#2c4152]">
          HOMEGROWN INDIAN BRAND
        </p>
        <p className="text-center text-2xl md:text-4xl lg:text-5xl py-4 bg-white">
          Over <strong>4 Million</strong> Happy Customers
        </p>
        <div className="bg-[#2c4152] text-white font-thin py-8">
          <div className="grid grid-cols-2 gap-y-4 md:flex justify-around text-sm mb-8 px-4">
            <div className="space-y-1">
              <p className="text-lg uppercase font-semibold mb-3">Need Help</p>
              <p>Track Order</p>
              <p>FAQs</p>
              <p>My Account</p>
            </div>
            <div className="space-y-1 text-right md:text-left">
              <p className="text-lg uppercase font-semibold mb-3">Company</p>
              <Link to="/about">
                <p>About Us</p>
              </Link>
              <Link to="/contact">
                <p>Contact Us</p>
              </Link>
              <Link to="/products">
                <p>Products</p>
              </Link>
            </div>
            <div className="space-y-1">
              <p className="text-lg uppercase font-semibold mb-3">More Info</p>
              <p>T&C</p>
              <p>Privacy Policy</p>
              <p>Refund Policy</p>
            </div>
            <div className="space-y-1">
              <div className="flex gap-3 items-center justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>COD Available</p>
              </div>
              <div className="flex gap-3 items-center justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                <p>30 Days Easy Return</p>
              </div>
            </div>
          </div>
          <div className="text-center space-y-4">
            <p className="text-3xl font-bold uppercase">Shopzy</p>
            <p>&#169;2024-2025</p>
          </div>
        </div>
      </div>
    </>
  );
};
