// Imports
import React from "react";
import ReactDOM from "react-dom/client";
import laptop from "./assets/images/laptop.jpg";
import "./app.css";

// ProductCardImage
const ProductCardImage = ({ src, alt, width }) => {
  return (
    <img
      className="product-card-image"
      src={src}
      alt={alt}
      width={250}
      height={200}
    />
  );
};

// ProductCardText
const ProductCardText = ({ productName, productSummary, productPrice }) => {
  return (
    <>
      <h3>{productName}</h3>
      <p>{productSummary}</p>
      <p>{`£${productPrice}`}</p>
    </>
  );
};

// Render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductCardText
    productName="Laptop"
    productSummary="This is a laptop."
    productPrice={1999.99}
  />
);
