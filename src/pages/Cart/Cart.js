import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useCart } from '../Cart/cartContext';  

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();  

  return (
    <section className="cart_page" id="cart">
      <Container>
        <Row className="pt-50">
          <Col lg={{ span: 8, offset: 2 }} className="text-center my-5">
            <h2>Your <span className='cart-head-red'>Cart</span></h2>
          </Col>
        </Row>
        <Row>
          {cartItems.length === 0 ? (
            <Col className="text-center">
              <h1 className='py-5'><span className='cart-head-red'>Your cart is empty!</span></h1>
            </Col>
          ) : (
            cartItems.map((item) => (
              <Col md={6} lg={4} className="mb-4" key={item.id}>
                <div className="card h-100">
                  <img
                    src={item.thumbnail}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {item.category}
                    </h6>
                    <p className="card-text">
                      <strong>Price:</strong> ${item.price}
                    </p>
                    <p className="card-text">
                      <strong>Rating:</strong> {item.rating}
                    </p>
                    <p className="card-text">
                      <strong>Brand:</strong> {item.brand}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-danger w-100"
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
