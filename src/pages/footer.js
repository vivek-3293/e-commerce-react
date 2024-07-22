import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import FooterLogo from "../images/headerlogo/shopee-logo-white.webp";


function Footer() {
  // Scroll State
  const [isVisible, setIsVisible] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <>
      <div className="footer">
        <Container className="d-flex justify-content-between py-5">
          <div className="footer-head w-25 pr-3">
            <div className="footerLogo">
              <img src={FooterLogo} alt="Shopee Logo" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo
              laboriosam animi ullam harum illo excepturi exercitationem ea quae
              accusantium.
            </p>
          </div>

          <div className="footer-detail w-75 d-flex justify-content-between">
            <div className="footer-explore">
              <h2>Explore</h2>
              <p>All</p>
              <p>Rated</p>
              <p>Scores</p>
              <p>Tips</p>
              <p>Guide</p>
            </div>
            <div className="footer-connect">
              <h2>Connect</h2>
              <p>YouTube</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Facebook</p>
              <p>Pinterest</p>
            </div>
            <div className="footer-nitty-gritty">
              <h2>Nitty Gritty</h2>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>FAQs</p>
              <p>Special Credits</p>
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll To Top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default Footer;

