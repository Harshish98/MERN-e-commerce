import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TokenContext } from "../context/TokenProvider";
import { WishlistContext } from "../context/WishlistProvider";

export const ProductCard = ({
  product,
  handleDelete,
  handleEdit,
  handleRemove,
  handleAddToCart,
  showEditButtons,
  showRemoveButton,
  wishlisted: initialWishlisted,
}) => {
  const [wishlisted, setWishlisted] = useState(initialWishlisted);
  const { token } = useContext(TokenContext);
  const { addToWishlist, removeWishlistProduct, getWishlistProducts } =
    useContext(WishlistContext);

  useEffect(() => {
    const isProductInWishlist = getWishlistProducts.some(
      (item) => item._id === product._id
    );
    setWishlisted(isProductInWishlist);
  }, [getWishlistProducts, product._id]);

  const toggleWishlist = () => {
    if (token) {
      if (wishlisted) {
        removeWishlistProduct(product._id);
      } else {
        addToWishlist(product._id);
      }
      setWishlisted(!wishlisted);
    } else {
      alert("Please login first");
    }
  };

  return (
    <div className="bg-white overflow-hidden xl:w-[300px] scale-95 hover:scale-100 hover:shadow-[5px_20px_30px_rgba(0,0,0,0.2)] transition-transform duration-500 rounded-xl">
      <Link to={`/products/${product._id}`}>
        <img
          className="w-full h-48 md:h-52 lg:h-60 xl:h-80 object-cover"
          src={`https://mern-e-commerce-server-lye5.onrender.com/images/${product.image}`}
          alt={product.productName}
        />
      </Link>
      <div className="p-2 lg:px-4 text-[#2c4152] flex justify-between">
        <div className="flex flex-col justify-between">
          <h2 className="text-xs md:text-sm lg:text-base xl:text-xl font-semibold capitalize">
            {product.productName}
          </h2>
          <div className="flex justify-between items-center">
            <span className="text-xs lg:text-sm xl:text-base font-semibold">
              {product.price}&#8377;
            </span>
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          {showEditButtons ? (
            <>
              <button
                onClick={() => handleEdit(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </>
          ) : showRemoveButton ? (
            <>
              <button
                onClick={() => handleRemove(product._id)}
                className="text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 md:size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={toggleWishlist}
                className="text-[#2c4152] text-sm lg:p-2 rounded flex items-center"
              >
                {wishlisted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 md:size-6 lg:size-8"
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 md:size-6 lg:size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
