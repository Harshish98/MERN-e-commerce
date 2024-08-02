import axios from "axios";
import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [specificProduct, setSpecificProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://mern-e-commerce-server-lye5.onrender.com/products"
      );
      // console.log(res.data.data)
      setProducts(res.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSpecificProduct = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://mern-e-commerce-server-lye5.onrender.com/products/${id}`
      );
      // console.log(res.data.product)
      setSpecificProduct(res.data.product);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        fetchProducts,
        specificProduct,
        fetchSpecificProduct,
        search,
        setSearch,
        setProducts,
        loading
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
