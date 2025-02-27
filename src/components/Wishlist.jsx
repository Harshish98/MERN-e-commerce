import React, { useContext, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { WishlistContext } from "../context/WishlistProvider";
import { Link } from "react-router-dom";
import { TokenContext } from "../context/TokenProvider";
import { Box, Skeleton } from "@mui/material";


export const Wishlist = () => {
  const { getWishlistProducts, fetchWishlistProducts, removeWishlistProduct, loading } =
    useContext(WishlistContext);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    fetchWishlistProducts();
  }, []);
  return (
    <>
      <div className="pt-20">
        {loading && token ? (
          <div className="grid grid-cols-2 md:grid-cols-3 px-2 md:w-4/5 lg:gap-8 xl:w-2/3 mx-auto py-8">
            {Array.from(new Array(3)).map((_, index) => (
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
            ))}
          </div>
        ) : token && getWishlistProducts.length !== 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 px-2 md:w-4/5 lg:gap-8 xl:w-2/3 mx-auto py-8">
            {getWishlistProducts.length !== 0
              ? getWishlistProducts.map((product, index) => {
                  return (
                    <ProductCard
                      key={index}
                      product={product}
                      showEditButtons={false}
                      showRemoveButton={true}
                      handleRemove={removeWishlistProduct}
                    />
                  );
                })
              : null}
          </div>
        ) : (
          <div className="text-center text-[#2c4152] py-10 space-y-6">
            <img
              className="w-80 mx-auto"
              src="https://res.cloudinary.com/disvtxs51/image/upload/v1718732153/wishList-empty-icon.fd2a993_wj0lqm.png"
            />
            <p className="font-bold text-2xl">
              Your wishlist is lonely and looking for love.
            </p>
            <p className="text-xl">
              Add products to your wishlist, review them anytime and easily move
              to cart.
            </p>
            <Link to="/products">
              <button className="bg-[#2c4152] text-white px-6 py-3 rounded font-light text-lg mt-6">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
