import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartProvider";
import { Link } from "react-router-dom";
import { BuyNow } from "./BuyNow";
import { Box, Skeleton } from "@mui/material";

export const Cart = () => {
  const [quantities, setQuantities] = useState({});
  const { fetchCartProducts, deleteCartProduct, showCartProducts, loading } =
    useContext(CartContext);

  const shippingCost = 50;

  useEffect(() => {
    fetchCartProducts()
  }, []);

  useEffect(() => {
    const initialQuantities = {};
    showCartProducts.forEach((product) => {
      initialQuantities[product._id] = quantities[product._id] || 1;
    });
    setQuantities(initialQuantities);
    console.log("Cart:", showCartProducts);
  }, [showCartProducts]);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const calculateSubtotal = () => {
    return showCartProducts.reduce((acc, product) => {
      return acc + product.price * (quantities[product._id] || 1);
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const total = subtotal + shippingCost;

  return (
    <>
      <div className="pt-20 md:pt-40 pb-20">
        {loading ? (
          <div className="md:w-4/5 lg:w-3/5 mx-auto px-3">
            {Array.from(new Array(3)).map((_, index) => (
              <Box key={index} sx={{ width: "100%", mb: 2 }}>
                <Skeleton variant="rectangular" width="100%" height={100} />
              </Box>
            ))}
            <Box sx={{ width: "100%", mt: 2 }}>
              <Skeleton variant="rectangular" width="100%" height={60} />
            </Box>
          </div>
        ) : (
          <>
            {showCartProducts.length !== 0 ? (
              <div className="md:w-4/5 lg:w-3/5 mx-auto px-3">
                <div className="">
                  {showCartProducts.map((val, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center shadow-md p-1 px-4 text-[#2c4152]"
                    >
                      <div className="flex space-x-4 items-center basis-3/4 md:basis-1/2">
                        <img
                          className="w-20 h-30 "
                          src={`https://mern-e-commerce-server-lye5.onrender.com/images/${val.image}`}
                        />
                        <div>
                          <p className="capitalize">{val.productName}</p>
                          <p>{val.price}&#8377;</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <p className="hidden md:block">Quantity: </p>
                        <input
                          type="number"
                          value={quantities[val._id] || 1}
                          className="border border-[#2c4152] w-12 md:w-16 px-4 rounded-md"
                          onChange={(e) =>
                            handleQuantityChange(
                              val._id,
                              parseInt(e.target.value)
                            )
                          }
                        />
                      </div>
                      <div className="">
                        <div>
                          <button
                            className="text-red-600"
                            onClick={() => deleteCartProduct(val._id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border shadow-md p-2 w-60 h-fit mt-5">
                  <p className="text-center text-lg">Cart total</p>
                  <p className="flex justify-between">
                    Subtotal: <span>{subtotal}&#8377;</span>
                  </p>
                  <p className="flex justify-between">
                    Shipping: <span>{shippingCost}&#8377;</span>
                  </p>
                  <p className="flex justify-between">
                    Total: <span>{total}&#8377;</span>
                  </p>
                  <BuyNow />
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center space-y-4">
                <img
                  className="block"
                  src="https://res.cloudinary.com/disvtxs51/image/upload/v1718732152/emptyCart_rvmy7w.avif"
                />
                <p className="font-bold text-[#2c4152] text-3xl">
                  Your shopping cart is empty.
                </p>
                <p className="text-[#2c4152] font-light text-2xl">
                  Please add something soon, carts have feelings too.
                </p>
                <Link to="/products">
                  <button className="bg-[#2c4152] text-white px-6 py-3 rounded font-light text-lg">
                    View Products
                  </button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
