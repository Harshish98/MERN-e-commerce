import React, { useContext, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { WishlistContext } from "../context/WishlistProvider";
import { Link } from "react-router-dom";

export const Wishlist = () => {
  const { getWishlistProducts, fetchWishlistProducts, removeWishlistProduct } =
    useContext(WishlistContext);

  useEffect(() => {
    fetchWishlistProducts();
  }, []);
  return (
    <>
      <div className="pt-20">
        {getWishlistProducts.length !== 0 ? (
          <div className="grid grid-cols-3 gap-8 w-2/3 mx-auto py-8">
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
            <Link to='/products'>
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
