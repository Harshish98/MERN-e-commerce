import axios from "axios";
import React, { useContext, useState } from "react";
import { TokenContext } from "./TokenProvider";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [showCartProducts, setShowCartProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const { token } = useContext(TokenContext);

  const fetchCartProducts = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://mern-e-commerce-server-lye5.onrender.com/cart-products`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setShowCartProducts(response.data.products);
    setCartCount(response.data.products.length);
    setLoading(false);
  };

  const handleAddToCart = async (productId, quantity = 1) => {
    try {
      if (!token) {
        alert("Please login first");
        throw new Error("No token found");
      }
      const isProductInCart = cartProducts.some(
        (product) => product._id === productId
      );

      if (isProductInCart) {
        alert("Product is already in the cart");
        return;
      }
      const response = await axios.post(
        `https://mern-e-commerce-server-lye5.onrender.com/add-to-cart/${productId}`,
        { productId, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedCartProducts = Array.isArray(response.data.product)
        ? response.data.product
        : [response.data.product];

      setCartProducts((prevProducts) => [
        ...prevProducts,
        ...updatedCartProducts,
      ]);
      setShowCartProducts((prevProducts) => [
        ...prevProducts,
        ...updatedCartProducts,
      ]);
      setCartCount((prevCount) => prevCount + updatedCartProducts.length);
      alert("Product added to cart");
      console.log(response);
    } catch (error) {
      console.log("Error adding product to cart:", error);
    }
  };

  const deleteCartProduct = async (id) => {
    try {
      await axios.delete(
        `https://mern-e-commerce-server-lye5.onrender.com/cart-product-delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setShowCartProducts((prevProducts) =>
        prevProducts.filter((val) => val._id !== id)
      );
      setCartCount((prevCount) => prevCount - 1);
      alert("Product removed from cart")
      console.log(showCartProducts);
    } catch (error) {
      console.log("Error while deleting the product form cart: ", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        fetchCartProducts,
        handleAddToCart,
        deleteCartProduct,
        showCartProducts,
        loading,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
