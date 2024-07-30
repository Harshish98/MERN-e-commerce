import axios from "axios";
import React, { useContext, useState } from "react";
import { TokenContext } from "./TokenProvider";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [showCartProducts, setShowCartProducts] = useState([]);

  const { token } = useContext(TokenContext);

  const fetchCartProducts = async () => {
    const response = await axios.get(
      `https://mern-e-commerce-server-lye5.onrender.com/cart-products`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setShowCartProducts(response.data.products);
    console.log(response.data.products);
  };

  const handleAddToCart = async (productId, quantity = 1) => {
    try {
      if (!token) {
        throw new Error("No token found");
      }
      const isProductInCart = cartProducts.some(
        (product) => product._id === productId
      );

      if (isProductInCart) {
        console.log("Product is already in the cart");
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

      setCartProducts([...cartProducts, ...updatedCartProducts]);
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
      setShowCartProducts(showCartProducts.filter((val) => val._id !== id));
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
