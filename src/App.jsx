import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import React from "react";
import { Users } from "./components/Users";
import { Login } from "./components/Login";
import { Admin } from "./pages/admin/Admin";
import { Home } from "./pages/home/Home";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { ProductsPage } from "./pages/products/ProductsPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AboutUs } from "./components/AboutUs";
import { Contact } from "./components/Contact";
import { Cart } from "./components/Cart";
import { AuthForm } from "./pages/form/AuthForm";
import { NotFound } from "./pages/not found/NotFound";
import { Wishlist } from "./components/Wishlist";
import { ProductDetails } from "./pages/products/ProductDetails";
import { Search } from "./pages/products/Search";

function App() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/admin";
  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <Routes>
        <Route path="/login" element={<AuthForm page="login" />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute roleRequired="admin">
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<AuthForm page="signup" />} />
        <Route
          path="/forgot-password"
          element={<AuthForm page="forgot-password" />}
        />
        <Route
          path="/reset-password"
          element={<AuthForm page="reset-password" />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

export default App;
