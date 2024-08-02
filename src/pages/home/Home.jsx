import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider";
import { ProductContext } from "../../context/ProductsProvider";
import { ProductCard } from "../../components/ProductCard";
import { CartContext } from "../../context/CartProvider";
import { WishlistContext } from "../../context/WishlistProvider";
import { Box, Skeleton } from "@mui/material";

export const Home = () => {
  const { products, fetchProducts, loading } = useContext(ProductContext);
  const { handleAddToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const images = [
    "https://res.cloudinary.com/disvtxs51/image/upload/v1718602051/samples/ecommerce/accessories-bag.jpg",
    "https://res.cloudinary.com/disvtxs51/image/upload/v1718602050/samples/ecommerce/leather-bag-gray.jpg",
    "https://res.cloudinary.com/disvtxs51/image/upload/v1718602042/samples/ecommerce/analog-classic.jpg",
  ];

  const getProductsByCategory = (category) => {
    return products
      .filter((product) => product.category === category)
      .slice(0, 4);
  };

  const handleExploreMore = () => {
    navigate("/products");
  };

  return (
    <>
      <div className="pt-16">
        <ImageSlider images={images} />
        <div className="w-11/12 xl:w-5/6 mx-auto">
          <div className="my-8">
            <h1 className="text-2xl md:text-4xl text-center text-[#2c4152] mb-4">
              Explore Our Products
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Fashion</h2>
            <div className="grid grid-cols-2 gap-1 md:gap-2 xl:gap-4 md:grid-cols-4">
              {loading
              ? Array.from(new Array(4)).map((_, index) => (
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
              : getProductsByCategory("fashion").map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  showEditButtons={false}
                  handleAddToCart={handleAddToCart}
                  handleAddToWishlist={addToWishlist}
                />
              ))}
            </div>
            <button
              className="text-xs md:text-base mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleExploreMore}
            >
              Explore More
            </button>
          </div>

          <div className="my-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Sports</h2>
            <div className="grid grid-cols-2 gap-1 md:gap-2 xl:gap-4 md:grid-cols-4">
              {loading
              ? Array.from(new Array(4)).map((_, index) => (
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
              : getProductsByCategory("sports").map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  showEditButtons={false}
                  handleAddToCart={handleAddToCart}
                  handleAddToWishlist={addToWishlist}
                />
              ))}
            </div>
            <button
              className="text-xs md:text-base mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleExploreMore}
            >
              Explore More
            </button>
          </div>

          <div className="my-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Gadgets</h2>
            <div className="grid grid-cols-2 gap-1 md:gap-2 xl:gap-4 md:grid-cols-4">
              {loading
              ? Array.from(new Array(4)).map((_, index) => (
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
              : getProductsByCategory("gadgets").map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  showEditButtons={false}
                  handleAddToCart={handleAddToCart}
                  handleAddToWishlist={addToWishlist}
                />
              ))}
            </div>
            <button
              className="text-xs md:text-base mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleExploreMore}
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
