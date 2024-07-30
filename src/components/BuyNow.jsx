import { loadStripe } from "@stripe/stripe-js";
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductsProvider";
import { CartContext } from "../context/CartProvider";
import axios from "axios";
import { TokenContext } from "../context/TokenProvider";

export const BuyNow = ({ isSpecificProduct }) => {
  const { specificProduct } = useContext(ProductContext);
  const { showCartProducts } = useContext(CartContext);
  const { token } = useContext(TokenContext);

  const handlePayment = async () => {
    try {
      const stripePromise = await loadStripe(
        "pk_test_51PVuHkC6qYPttZBG9z3k2HU9WXz6UfLX4iaipvdaYnaAcGI3yLMo8Uub5DOh2BIwoWfaBm2kp3TyAzmcOSwqKq6w00AUtaLcAl"
      );
      const cartItems = isSpecificProduct
        ? [{ ...specificProduct, quantity: 1 }]
        : showCartProducts;

      console.log("cartitems:", cartItems);
      const response = await axios.post(
        "https://mern-e-commerce-server-lye5.onrender.com/payment",
        { cartItems },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      // Handle Stripe checkout
      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      if (!token) {
        alert("Please login first");
      }
      console.error("Payment error: ", error);
      alert("Payment failed, please try again.");
    }
  };
  return (
    <>
      <button
        onClick={handlePayment}
        className="bg-blue-500 text-white p-2 px-3 rounded text-sm hover:bg-blue-600"
      >
        Buy Now
      </button>
    </>
  );
};
