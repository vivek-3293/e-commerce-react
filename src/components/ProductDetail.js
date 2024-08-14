import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container ptb-5rem d-flex" id="product-detail">
      {loading ? (
        <>loading</>
      ) : (
        <>
          <div className="card">
            <img
              src={product.thumbnail}
              className="card-img-top"
              alt={product.title}
            />
          </div>
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
            <p className="card-text">
              <strong>SKU:</strong> {product.sku}
            </p>
            <p className="card-text">
              <strong>Weight:</strong> {product.weight}g
            </p>
            <p className="card-text">
              <strong>Dimensions:</strong> {product.dimensions.width} x{" "}
              {product.dimensions.height} x {product.dimensions.depth}
            </p>
            <p className="card-text">
              <strong>Warranty:</strong> {product.warrantyInformation}
            </p>
            <p className="card-text">
              <strong>Shipping:</strong> {product.shippingInformation}
            </p>
            <p className="card-text">
              <strong>Status:</strong> {product.availabilityStatus}
            </p>
            <p className="card-text">
              <strong>Return Policy:</strong> {product.returnPolicy}
            </p>
            <p className="card-text">
              <strong>Minimum Order Quantity:</strong>{" "}
              {product.minimumOrderQuantity}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
