import React, { useState } from "react";
import axios from "axios";

export const Contact = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://mern-e-commerce-server-lye5.onrender.com/send-message",
        details,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Message sent successfully");
    } catch (error) {
      console.log("Error in sending the message: ", error);
    }
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="pt-20 md:pt-32 pb-24 md:flex justify-center text-[#2c4152] space-y-4 md:space-y-0 md:space-x-2 lg:space-x-5 w-11/12 lg:w-4/5 mx-auto">
        <div className="space-y-4 px-5 xl:px-12 py-6 lg:py-10 shadow-md basis-1/3 xl:basis-1/4 rounded-md h-fit">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 lg:size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="lg:text-lg font-semibold">Call To Us</p>
            </div>
            <p className="text-sm lg:text-base">We are available 24/7</p>
            <p className="text-sm lg:text-base">+91-1234567890</p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 lg:size-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <p className="lg:text-lg font-semibold">Write To Us</p>
            </div>
            <p className="text-sm lg:text-base">
              Fill out the form and we will contact you within 24 hours.
            </p>
            <p className="text-sm lg:text-base">customer@shopzy.com</p>
            <p className="text-sm lg:text-base">support@shopzy.com</p>
          </div>
        </div>
        <div className="shadow-md px-3 py-6 basis-3/4 rounded-md">
          <div className="mb-2 space-y-2 xl:space-x-2">
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={details.name}
              onChange={handleOnChange}
              required
              className="bg-gray-100 py-2 px-3 w-full xl:w-[285px] rounded"
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={details.email}
              onChange={handleOnChange}
              required
              className="bg-gray-100 py-2 px-3 w-full xl:w-[285px] rounded"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Your number"
              value={details.phone}
              onChange={handleOnChange}
              required
              className="bg-gray-100 py-2 px-3 w-full xl:w-[285px] rounded"
            />
          </div>
          <textarea
            name="message"
            type="description"
            placeholder="Your message"
            value={details.message}
            onChange={handleOnChange}
            required
            rows={10}
            className="bg-gray-100 py-2 px-3 row-4 w-full rounded"
          />
          <div className="flex justify-end pt-4">
            <button
              onClick={handleSubmit}
              className="bg-[#2c4152] text-white text-sm md:text-base w-40 py-2 rounded"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
