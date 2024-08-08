import React from 'react'
import HeadBanner from "../images/headerbanner/banner.png";
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeBanner() {
  return (
    <>
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
  )
}

export default HomeBanner