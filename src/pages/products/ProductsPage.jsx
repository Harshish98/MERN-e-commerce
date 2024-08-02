import React, { useContext, useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { CartContext } from "../../context/CartProvider";
import { WishlistContext } from "../../context/WishlistProvider";
import { ProductContext } from "../../context/ProductsProvider";
import { Box, Skeleton } from "@mui/material";

export const ProductsPage = () => {
  const { products, fetchProducts, loading } = useContext(ProductContext);
  const { handleAddToCart } = useContext(CartContext);
  const { addToWishlist, fetchWishlistProducts } = useContext(WishlistContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);

  const filterProducts = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const response = products.filter((item) => item.category === category);
      setFilteredProducts(response);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchWishlistProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <>
      <div className="pt-24 relative md:flex justify-between px-2 xl:px-0">
        <div
          className={`basis-1/4 p-2 lg:p-4 fixed top-0 left-0 md:static ${
            showFilters
              ? "translate-x-0 z-10 bg-white h-screen transition-transform duration-300 w-56"
              : "-translate-x-full md:translate-x-0"
          }`}
        >
          <h2 className="text-lg md:text-xl font-semibold mb-4">Categories:</h2>
          <div className="flex flex-col space-y-2 md:w-4/5 xl:w-3/5 mx-auto">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => filterProducts("fashion")}
            >
              Fashion
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => filterProducts("sports")}
            >
              Sports
            </button>
            <button
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
              onClick={() => filterProducts("gadgets")}
            >
              Gadgets
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              onClick={() => filterProducts("all")}
            >
              All
            </button>
          </div>
        </div>
        <div className="basis-3/4 w-full">
          <div className="flex md:block justify-between items-center">
            <p className="text-center text-3xl text-[#2c4152]">
              Explore Our Products
            </p>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden text-[#2c4152]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:gap-8 py-8">
            {loading
              ? Array.from(new Array(6)).map((_, index) => (
                  <Box key={index} sx={{ width: { xl: 300 } }}>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        width: "100%",
                        height: { xs: 192, md: 208, lg: 240, xl: 320 },
                      }}
                    />
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                ))
              : filteredProducts.map((product, index) => (
                  <ProductCard
                    key={index}
                    product={product}
                    showEditButtons={false}
                    handleAddToCart={handleAddToCart}
                    handleAddToWishlist={addToWishlist}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};
