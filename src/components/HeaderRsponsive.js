import React, { useState } from "react";
import "../styles/Navbar.css";
import Logo from "../images/headerlogo/shopee-logo-white.webp";

function HeaderRsponsive() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Header-rsponsive">
      <nav className="header-navbar d-flex align-items-center justify-content-between">
        <div className="header-navbar-logo d-flex align-items-center justify-content-between">
          <img src={Logo} alt="Logo" />
          <div class="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div
          className={`header-navbar-links d-flex  ${
            isOpen ? "open" : ""
          }`}
        >
          <a className="text-decoration-none text-white" href="/">
            Home
          </a>
          <a className="text-decoration-none text-white" href="/about">
            About
          </a>
          <a className="text-decoration-none text-white" href="/services">
            Services
          </a>
          <a className="text-decoration-none text-white" href="/contact">
            Contact
          </a>

          <div className="d-flex align-items-center">
            <div>
              <a className="text-decoration-none text-white" href="">
                Login
              </a>
            </div>
            <a className="text-decoration-none text-white" href="">
              Logout
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderRsponsive;
