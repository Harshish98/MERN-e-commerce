import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { ProductCard } from "./ProductCard";
import { ProductContext } from "../context/ProductsProvider";

export const Products = ({ showCreateForm, setShowCreateForm }) => {
  const [file, setFile] = useState(null);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("fashion");
  const fileInput = useRef(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const { products, fetchProducts, setProducts } = useContext(ProductContext);

  const formdata = new FormData();
  formdata.append("file", file);
  formdata.append("productName", productName);
  formdata.append("description", description);
  formdata.append("price", price);
  formdata.append("category", category);

  const handleUpload = async () => {
    await axios
      .post(
        "https://mern-e-commerce-server-lye5.onrender.com/create-product",
        formdata
      )
      .then((res) => {
        console.log(res);
        fetchProducts();
        setProductName("");
        setDescription("");
        setPrice("");
        fileInput.current.value = "";
        setCategory("fashion");
        setShowForm(false);
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (product) => {
    setShowForm(true);
    setEditingProduct(product);
    setProductName(product.productName);
    setDescription(product.description);
    setPrice(product.price);
    setCategory(product.category);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `https://mern-e-commerce-server-lye5.onrender.com/edit-product/${editingProduct._id}`,
        formdata
      );
      fetchProducts();
      setEditingProduct(null);
      setProductName("");
      setDescription("");
      setPrice("");
      fileInput.current.value = "";
      setCategory("fashion");
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://mern-e-commerce-server-lye5.onrender.com/delete-product/${id}`
      );
      setProducts(products.filter((item) => item._id !== id));
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {showForm || showCreateForm ? (
        <div className="fixed flex justify-center items-center inset-0 bg-opacity-25 bg-black backdrop-blur-sm z-10">
          <div className="shadow-[2px_1px_21px_-9px_rgba(0,0,0,0.38)] bg-white rounded-3xl w-4/5 md:w-[400px] lg-w[450px] p-4 md:p-6 lg:p-10">
            <div className="flex justify-between mb-3">
              <p className="text-2xl md:text-4xl">
                {showForm ? "Update Product" : "Create Product"}
              </p>
              <button
                onClick={() => {
                  setShowForm(false);
                  setShowCreateForm(false);
                  setEditingProduct(null);
                  setProductName("");
                  setDescription("");
                  setPrice("");
                }}
                className="block font-bold md:text-xl"
              >
                X
              </button>
            </div>
            <input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="enter product name"
              type="text"
              className="block bg-[#f7f7f7] w-full py-2 px-4 mb-3 text-xs md:text-base"
            />
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="enter description"
              type="text"
              className="block bg-[#f7f7f7] w-full py-2 px-4 mb-3 text-xs md:text-base"
            />
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="enter price"
              type="number"
              className="block bg-[#f7f7f7] w-full py-2 px-4 mb-3 text-xs md:text-base"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="fashion">Fashion</option>
              <option value="sports">Sports</option>
              <option value="gadgets">Gadgets</option>
            </select>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              ref={fileInput}
              className="mb-3"
            />
            {editingProduct ? (
              <button
                className="bg-blue-600 text-[white] border-none rounded-xl md:text-xl mx-auto block py-1 md:py-2 font-semibold hover:bg-blue-700 mb-4 w-4/5 cursor-pointer"
                onClick={handleUpdate}
              >
                Update
              </button>
            ) : (
              <button
                className="bg-blue-600 text-[white] border-none rounded-xl md:text-xl mx-auto block py-1 md:py-2 font-semibold hover:bg-blue-700 mb-4 w-4/5 cursor-pointer"
                onClick={handleUpload}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      ) : null}
      <div className="flex flex-wrap gap-4">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              product={product}
              showEditButtons={true}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
};
