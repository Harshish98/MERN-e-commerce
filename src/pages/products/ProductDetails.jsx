import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductsProvider";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import { WishlistContext } from "../../context/WishlistProvider";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { TokenContext } from "../../context/TokenProvider";
import { BuyNow } from "../../components/BuyNow";

export const ProductDetails = () => {
  const { fetchSpecificProduct, specificProduct } = useContext(ProductContext);
  const { handleAddToCart, showCartProducts, fetchCartProducts } =
    useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const [wishlisted, setWishlisted] = useState(null);
  const { token } = useContext(TokenContext);

  const toggleWishlist = () => {
    if (token) {
      setWishlisted(!wishlisted);
      addToWishlist(specificProduct._id);
    }
    alert("Please login first");
  };
  const { id } = useParams();

  useEffect(() => {
    fetchSpecificProduct(id);
    fetchCartProducts();
    console.log(specificProduct);
  }, [id]);
  // console.log("Buy now:", showCartProducts || specificProduct);
  // console.log("specific", specificProduct);

  // if(specificProduct){
  //    handleAddToCart(specificProduct._id, 1)
  // }

  // const handlePayment = async () => {
  //   try {
  //     const stripePromise = await loadStripe(
  //       "pk_test_51PVuHkC6qYPttZBG9z3k2HU9WXz6UfLX4iaipvdaYnaAcGI3yLMo8Uub5DOh2BIwoWfaBm2kp3TyAzmcOSwqKq6w00AUtaLcAl"
  //     );
  //     const cartItems = showCartProducts.length > 0 ? showCartProducts : [{...specificProduct, quantity: 1}];
  //     console.log("cartitems:", cartItems);
  //     const response = await axios.post(
  //       "https://mern-e-commerce-server-lye5.onrender.com/payment",
  //       { cartItems },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(response.data);

  //     // Handle Stripe checkout
  //     if (response.data.url) {
  //       window.location.href = response.data.url;
  //     }
  //   } catch (error) {
  //     console.error("Payment error: ", error);
  //     alert("Payment failed, please try again.");
  //   }
  // };
  return (
    <>
      <div className="py-20 mx-auto px-3 lg:px-0 lg:w-4/5 xl:w-3/5 md:flex justify-around gap-2">
        <div className="basis-1/2">
          <img
            className=" w-full rounded-xl"
            src={`https://mern-e-commerce-server-lye5.onrender.com/images/${specificProduct.image}`}
          />
        </div>
        <div className="basis-1/2 flex flex-col gap-3">
          <p className="text-4xl capitalize">{specificProduct.productName}</p>
          <p className="capitalize">
            <span className="font-semibold">Category: </span>
            {specificProduct.category}
          </p>
          <p className="text-2xl">{specificProduct.price}&#8377;</p>
          <p>{specificProduct.description}</p>
          <div className="flex space-x-2 lg:space-x-6">
            <button
              onClick={() => handleAddToCart(specificProduct._id)}
              className="bg-green-500 text-white p-2 px-3 rounded text-sm hover:bg-green-600"
            >
              Add to Cart
            </button>
            <button
              onClick={toggleWishlist}
              className="border border-[#2c4152] text-[#2c4152] text-sm p-2 rounded flex items-center"
            >
              {wishlisted ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-5"
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                  Added to Wishlist
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  Add to Wishlist
                </>
              )}
            </button>
            <BuyNow isSpecificProduct={true} />
          </div>
        </div>
      </div>
    </>
  );
};
