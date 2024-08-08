import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import ProductDetail from "./components/ProductDetail";
import React from "react";
import { AuthProvider } from "./pages/shoping-cart/authContext";
import Shoping from "./pages/shoping-cart/shoping";
import Login from "./pages/login-form/login";
import { CartProvider } from "./pages/Cart/cartContext";
import CustomerReview from "./pages/review";
import Blog from "./pages/blog";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/contact/contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <React.StrictMode>
        <AuthProvider>
          <CartProvider>
            <Router>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout />} />
                <Route path="/shop" element={<Shoping />} />
                <Route path="/product" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/review" element={<CustomerReview />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Router>
          </CartProvider>
        </AuthProvider>
        <ToastContainer />
      </React.StrictMode>
    </>
  );
}

export default App;
