import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductsProvider";
import { ProductCard } from "../../components/ProductCard";
import { CartContext } from "../../context/CartProvider";
import { WishlistContext } from "../../context/WishlistProvider";

export const Search = () => {
  const { search } = useContext(ProductContext);
  const { handleAddToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  return (
    <>
      <div className="py-20">
        <p>
          {!search?.result
            ? "No results"
            : search.result.length < 1
            ? "No results"
            : `Found ${search.result.length} results`}
        </p>
        <div className="grid grid-cols-3 gap-8 w-2/3 mx-auto py-8">
          {search && search.result?.map((product, index) => {
            return (
              <ProductCard
                key={index}
                product={product}
                showEditButtons={false}
                handleAddToCart={handleAddToCart}
                handleAddToWishlist={addToWishlist}
                // wishlisted={wishlisted}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
