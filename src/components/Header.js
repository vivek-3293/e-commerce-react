import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeadLogo from "../images/headerlogo/shopee-logo-white.webp";
import "../styles/headerstyle.css";
import { useAuth } from "../pages/shoping-cart/authContext";

function Header() {
  const [nav, setNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const handleScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    setNav(scrollValue > 100);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const handleLogoutClick = () => {
    logout();
    navigate("/");
  };

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="main-head position-fixed top-0 start-0">
      <header className={nav ? "sticky" : ""}>
        <div className="container d-flex align-items-center justify-content-between">
          <div className="w-100 d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link to="/">
                <img src={HeadLogo} alt="HeadLogo" />
              </Link>
            </div>
            <div>
              <button
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ☰
              </button>
            </div>
          </div>
          <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
            <Link to="/" onClick={handleMenuLinkClick}>
              Home
            </Link>
            <Link to="/shop" onClick={handleMenuLinkClick}>
              Shop
            </Link>
            <Link to="/review" onClick={handleMenuLinkClick}>
              Review
            </Link>
            <Link to="/product" onClick={handleMenuLinkClick}>
              Product
            </Link>
            <Link to="/blog" onClick={handleMenuLinkClick}>
              Blog
            </Link>
            <Link to="/contact" onClick={handleMenuLinkClick}>
              Contact
            </Link>

            {isAuthenticated && (
              <h2 className="user-name">Welcome {user.username}</h2>
            )}
            <div className="auth-buttons">
              {!isAuthenticated ? (
                <Link to="/login">
                  <button className="login-btn">Login</button>
                </Link>
              ) : (
                <button className="logout-btn" onClick={handleLogoutClick}>
                  Logout
                </button>
              )}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
