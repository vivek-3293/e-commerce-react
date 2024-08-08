import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import HeadLogo from "../images/headerlogo/shopee-logo-white.webp";
import "../styles/headerstyle.css";
import { useAuth } from "../pages/shoping-cart/authContext";

function Header() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  // ========= Custom Scrollbar ==========
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  const handleLogoutClick = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <header>
        <Navbar
          collapseOnSelect
          expand="lg"
          className={`${nav === true ? "sticky" : ""}`}
        >
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/" className="logo">
                <img src={HeadLogo} alt="HeadLogo" className="img-fluid" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="toggle-w" id="responsive-navbar-nav">
              <Nav className="ms-auto align-items-center h-100vh">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Review</Link>
                <Link to="/product">Product</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>

                {isAuthenticated && (
                  <h2 className="user-name"> Welcome {user.username}</h2>
                )}
                <div className="pt-small">
                  {!isAuthenticated ? (
                    <Link to="/login">
                      <button className="head-login-btn">Login</button>
                    </Link>
                  ) : (
                    <button
                      className="head-logout-btn"
                      onClick={handleLogoutClick}
                    >
                      Logout
                    </button>
                  )}
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
