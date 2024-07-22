import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Row, Col, Nav, Navbar, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import HeadLogo from "../images/headerlogo/shopee-logo-white.webp";
import HeadBanner from "../images/headerbanner/banner.png";
import "../styles/headerstyle.css";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  // ========= Custom Scrollbar ==========
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  // ======== Auth Token =========
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data && !data.error) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setIsAuthenticated(false);
        });
    }
  }, []);

  // ========== Logout Button ==========
  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <>
      <header>
        <Navbar
          collapseOnSelect
          expand="lg"
          className={`${nav === true ? "sticky" : ""} bg-992`}
        >
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/" className="logo">
                <img src={HeadLogo} alt="HeadLogo" className="img-fluid" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="toggle-w" id="responsive-navbar-nav">
              <Nav className="ms-auto align-items-center">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Review</Link>
                <Link to="/product">Product</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                <div>
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
      

      {/* <!=========== Main Page ============> */}

      <Container>
        <Row className="main d-flex justify-content-center align-items-center">
          <Col md={6} className="text-center mainText">
            <h2>Fashion Hub</h2>
            <h1>Fashion For Always</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button className="main-btn">Explore</Button>
          </Col>
          <Col md={6} className="text-center">
            <Link to="/">
              <img src={HeadBanner} alt="HeadBanner" className="img-fluid" />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
