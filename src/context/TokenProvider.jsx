import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const TokenContext = React.createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));
  const navigate = useNavigate();


  const tokenLocalStorage = (serverToken, serverRole) => {
    localStorage.setItem("token", serverToken);
    localStorage.setItem("role", serverRole);
    setToken(serverToken);
    setRole(serverRole);
  };

  const SignOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    setRole(null)
    setToken(null)
    navigate('/')
  }
  return ( 
    <TokenContext.Provider value={{ token, role, tokenLocalStorage, SignOut }}>
      {children}
    </TokenContext.Provider>
  );
};
