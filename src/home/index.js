import "../styles/style.css";
import Header from "../components/Header";
import Shoping from "../pages/shoping-cart/shoping";
import Products from "../pages/products";
import CustomerReview from "../pages/review";
import Blog from "../pages/blog";
import Footer from "../pages/footer";
import Contact from "../pages/contact/contact";


const Home = () => {
  
  return (
    <>
      <Header />
      <Shoping />
      <CustomerReview />
      <Products />
      <Blog />
      <Contact />
      <Footer />
      
    </>
  );
};

export default Home;
