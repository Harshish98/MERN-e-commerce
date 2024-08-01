import React, { useContext, useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { CartContext } from "../../context/CartProvider";
import { WishlistContext } from "../../context/WishlistProvider";
import { ProductContext } from "../../context/ProductsProvider";

export const ProductsPage = () => {
  const { products, fetchProducts } = useContext(ProductContext);
  const { handleAddToCart } = useContext(CartContext);
  const { addToWishlist, fetchWishlistProducts } = useContext(WishlistContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false)

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
    fetchWishlistProducts()
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
              className="md:hidden"
            >
              dikhao
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:gap-8 py-8">
            {filteredProducts.map((product, index) => (
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
