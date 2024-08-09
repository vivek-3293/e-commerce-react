import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";

const Cart = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/carts`)
      .then((response) => response.json())
      .then((data) => setCarts(data.carts))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container>
      <h1 className="my-5 pt-55 text-center">Cart <span className="cart-span">Items</span></h1>

      {carts.map((cart) => (
        <Card key={cart.id} className="mb-2">
          <Card.Header>Cart ID: {cart.id}</Card.Header>
          <Card.Body>
            <div className="row">
              {cart.products.slice(0, 2).map((product) => (
                <div key={product.id} className="col-6">
                  <div>
                    <img
                      src={product.thumbnail}
                      className="card-img-top"
                      alt={product.title}
                    />
                  </div>
                  <div className="pt-4">
                    <div>Title : {product.title}</div>
                    <div>Price : {product.price}</div>
                    <div>Quantity: {product.quantity}</div>
                    <div>Total : {product.total}</div>
                    <div>Dis% : {product.discountPercentage}</div>
                    <div>DisTotal : {product.discountedTotal}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Cart;
