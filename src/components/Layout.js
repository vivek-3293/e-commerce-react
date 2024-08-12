import "../styles/style.css";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import HeaderRsponsive from "./HeaderRsponsive";
// import { useAuth } from "../pages/shoping-cart/authContext";

const Layout = () => {
  // const { user, isAuthenticated } = useAuth();
  // console.log("user",user, isAuthenticated);
  return (
    <>
      <Header />
      <HeaderRsponsive />
      <main>
        <Outlet />
      </main>
      
      <Footer />
    </>
  );
};

export default Layout;
