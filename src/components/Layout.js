import "../styles/style.css";
import Header from "./Header";
import Shoping from "../pages/shoping-cart/shoping";
import Products from "../pages/products";
import CustomerReview from "../pages/review";
import Blog from "../pages/blog";
import Footer from "./Footer";
import Contact from "../pages/contact/contact";
import HomeBanner from "../pages/Home-Banner";
import { Outlet } from "react-router-dom";
// import { useAuth } from "../pages/shoping-cart/authContext";


const Layout = () => {
  // const { user, isAuthenticated } = useAuth();
  // console.log("user",user, isAuthenticated);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <br />
      <br />
      <br />
      <br />
      <br /> */}
      {/* <HomeBanner />
      <Shoping />
      <CustomerReview />
      <Products />
      <Blog />
      <Contact /> */}
      <Footer />
      
    </>
  );
};

export default Layout;
