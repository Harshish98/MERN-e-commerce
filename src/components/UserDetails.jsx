import React, { useContext, useEffect, useState } from "react";
import { TokenContext } from "../context/TokenProvider";
import axios from "axios";

export const UserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    if (token) {
      fetchUserDetails(token);
    }
  }, [token]);

  const fetchUserDetails = async (token) => {
    const response = await axios.get(
      "https://mern-e-commerce-server-lye5.onrender.com/user-data",
      {
        headers: {
          "auth-token": token,
        },
      }
    );
    console.log(response);
    setUserDetails(response.data);
  };

  if (!userDetails) {
    return null;
  }

  return (
    <div>
      <p className="text-[#2c4152] capitalize font-semibold">
        {userDetails.name}
      </p>
    </div>
  );
};
