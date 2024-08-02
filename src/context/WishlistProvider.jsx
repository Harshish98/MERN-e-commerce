import React, { useContext, useState } from "react";
import { TokenContext } from "./TokenProvider";
import axios from "axios";

export const WishlistContext = React.createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [getWishlistProducts, setGetWishlistProducts] = useState([]);
  const [wishlisted, setWishlisted] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const { token } = useContext(TokenContext);

  const fetchWishlistProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://mern-e-commerce-server-lye5.onrender.com/get-wishlist-product`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedWishlistProducts = Array.isArray(response.data.wishlist)
        ? response.data.wishlist
        : [response.data.wishlist];
      console.log(updatedWishlistProducts);
      setGetWishlistProducts(updatedWishlistProducts);
      setWishlistCount(updatedWishlistProducts.length);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addToWishlist = async (id) => {
    try {
      if (!token) {
        alert("Please login first");
        throw new Error("No token found");
      }

      const isProductInWishlist = wishlistProducts.some(
        (product) => product._id === id
      );

      if (isProductInWishlist) {
        alert("Product is already in the wishlist");
        return;
      }

      const response = await axios.post(
        `https://mern-e-commerce-server-lye5.onrender.com/add-to-wishlist/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Server response:", response.data);

      if (!response.data || !response.data.wishlist) {
        throw new Error("Invalid product data received from server");
      }

      const newProduct = response.data.wishlist;
      const updatedWishlistProducts = [...getWishlistProducts, newProduct];

      alert("Product added to wishlist");
      setGetWishlistProducts(updatedWishlistProducts);
      setWishlistCount(updatedWishlistProducts.length);
      setWishlisted(true);
    } catch (error) {
      console.log("Error while adding to wishlist", error);
      alert("Failed to add product to wishlist");
      setWishlisted(false);
    }
  };

  const removeWishlistProduct = async (id) => {
    try {
      await axios.delete(
        `https://mern-e-commerce-server-lye5.onrender.com/remove-from-wishlist/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedWishlistProducts = getWishlistProducts.filter(
        (val) => val._id !== id
      );
      setGetWishlistProducts(updatedWishlistProducts);
      setWishlistCount(updatedWishlistProducts.length);
      alert("Product removed from wishlist");
      // console.log(getWishlistProducts);
    } catch (error) {
      console.log("Error while removing the wishlisted product", error);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        getWishlistProducts,
        fetchWishlistProducts,
        addToWishlist,
        removeWishlistProduct,
        wishlisted,
        wishlistCount,
        loading
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
