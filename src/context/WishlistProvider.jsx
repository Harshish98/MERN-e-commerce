import React, { useContext, useState } from "react";
import { TokenContext } from "./TokenProvider";
import axios from "axios";

export const WishlistContext = React.createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [getWishlistProducts, setGetWishlistProducts] = useState([]);
  const [wishlisted, setWishlisted] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);

  const { token } = useContext(TokenContext);

  const fetchWishlistProducts = async () => {
    try {
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
      setWishlistCount(getWishlistProducts.length);
    } catch (error) {
      console.log(error);
    }
  };

  const addToWishlist = async (id) => {
    try {
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
      // console.log(response);
      const newProduct = response.data.product;
      const updatedWishlistProducts = Array.isArray(newProduct)
        ? newProduct
        : [newProduct];
      alert("Product added to wishlist")
      setWishlistProducts([...wishlistProducts, ...updatedWishlistProducts]);
      setWishlisted(true);
    } catch (error) {
      console.log("Error while adding to wishlist", error);
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
      setGetWishlistProducts(
        getWishlistProducts.filter((val) => val._id !== id)
      );
      console.log(getWishlistProducts);
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
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
