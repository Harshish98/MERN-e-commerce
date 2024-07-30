import React from "react";
import { Login } from "../../components/Login";
import { Users } from "../../components/Users";
import { ForgotPassword } from "../../components/ForgotPassword";
import { ResetPassword } from "../../components/ResetPassword";

export const AuthForm = ({ page }) => {
  const renderForm = () => {
    switch (page) {
      case "login":
        return <Login />;
      case "signup":
        return <Users />;
      case "forgot-password":
        return <ForgotPassword />;
      case "reset-password":
        return <ResetPassword />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <img src="https://res.cloudinary.com/disvtxs51/image/upload/v1718602184/hoz4trdiluqcwb9bbgg8.png" />
        </div>
        <div className="w-2/5 p-10">
          <p className="text-3xl font-semibold text-[#2c4152] mb-10">
            {page === "login"
              ? "Log In to Shopzy"
              : page === "signup"
              ? "Create an Account"
              : page === "forgot-password"
              ? "Enter Your Registered Email"
              : "Enter New Password"}
          </p>
          {renderForm()}
        </div>
      </div>
    </>
  );
};
