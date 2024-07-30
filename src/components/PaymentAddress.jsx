import axios from "axios";
import React, { useContext, useState } from "react";
import { TokenContext } from "../context/TokenProvider";

export const PaymentAddress = () => {
  const [items, setItems] = useState({
    firstName: "",
    lastName: "",
    streetName: "",
    apartment: "",
    city: "",
    pincode: "",
    state: "",
    phone: "",
  });

  const { token } = useContext(TokenContext);

  const handleOnChange = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log("Token:", token); // Log the token for debugging
    try {
      const response = await axios.post(
        "https://mern-e-commerce-server-lye5.onrender.com/add-address",
        items,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response:", response.data); // Log the response data
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      ); // Log detailed error
    }
  };
  return (
    <>
      <div>
        <input
          placeholder="First Name"
          value={items.firstName}
          name="firstName"
          onChange={handleOnChange}
        />
        <input
          placeholder="Last Name"
          value={items.lastName}
          name="lastName"
          onChange={handleOnChange}
        />
        <input
          placeholder="Street Name"
          value={items.streetName}
          name="streetName"
          onChange={handleOnChange}
        />
        <input
          placeholder="Apartment or Locality"
          value={items.apartment}
          name="apartment"
          onChange={handleOnChange}
        />
        <input
          placeholder="City"
          value={items.city}
          name="city"
          onChange={handleOnChange}
        />
        <input
          placeholder="Pincode"
          value={items.pincode}
          name="pincode"
          onChange={handleOnChange}
        />
        <input
          placeholder="State"
          value={items.state}
          name="state"
          onChange={handleOnChange}
        />
        <input
          placeholder="Phone"
          value={items.phone}
          name="phone"
          onChange={handleOnChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};
