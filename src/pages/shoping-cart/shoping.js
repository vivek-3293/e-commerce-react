import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { useAuth } from "../shoping-cart/authContext";

function Shoping() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth(); 
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const addToCart = (productId) => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      fetch("https://dummyjson.com/carts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: 1,
          products: [
            {
              id: productId,
              quantity: 1,
            },
          ],
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate("/cart");
        });
    }
  };

  return (
    <section className="cloth_shoping" id="shop">
      <Container>
        <>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center mb-2">
              <h2>
                Trending <span>Clothes</span>
              </h2>
            </Col>
          </Row>
          {loading ? (
            <ShimmerSimpleGallery card imageHeight={700} />
          ) : (
            <Row>
              {products.map((shop) => (
                <div className="col-md-6 col-lg-4 mb-4" key={shop.id}>
                  <div className="card h-100">
                    <Link to={`/product/${shop.id}`}>
                      <img
                        src={shop.thumbnail}
                        className="card-img-top"
                        alt={shop.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{shop.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {shop.category}
                        </h6>
                        <p className="card-text">
                          <strong>Price:</strong> ${shop.price}
                        </p>
                        <p className="card-text">
                          <strong>Rating:</strong> {shop.rating}
                        </p>
                        <p className="card-text">
                          <strong>Brand:</strong> {shop.brand}
                        </p>
                    
                      </div>
                    </Link>
                    <div className="add_to_cart py-3">
                          <button
                            onClick={() => addToCart(shop.id)}
                            className="btn btn-primary w-100"
                          >
                            Add to Cart
                          </button>
                        </div>
                  </div>
                </div>
              ))}
            </Row>
          )}
        </>
      </Container>
    </section>
  );
}

export default Shoping;



