import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setProducts(data.products);
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container" id="product">
      <>
        <div className="products">
          <h1 className="text-center my-5">
            Product <span>List</span>
          </h1>
        </div>
        {loading ? (
          <ShimmerSimpleGallery imageHeight={700} />
        ) : (
          <div className="row">
            {products.slice(0, 12).map((product) => (
              <div className="col-md-6 col-lg-4 mb-4" key={product.id}>
                <div className="card h-100">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.thumbnail}
                      className="card-img-top"
                      alt={product.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {product.category}
                      </h6>
                      <p className="card-text">
                        <strong>Price:</strong> ${product.price}
                      </p>
                      <p className="card-text">
                        <strong>Rating:</strong> {product.rating}
                      </p>
                      <p className="card-text">
                        <strong>Stock:</strong> {product.stock}
                      </p>
                      <p className="card-text">
                        <strong>Brand:</strong> {product.brand}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default Products;
