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

// AddToCartButton
const AddToCartButton = () => {
  return <button className="button product-card-button">Add To Cart 🛒</button>;
};

// ProductPageLink
const ProductPageLink = ({
  linkText = "Buy Now",
  category,
  id,
  productName,
}) => {
  return (
    <a
      className="button product-card-button"
      href={`${category}/${id}`}
      title={`Go to ${productName} page.`}
    >
      {linkText}
    </a>
  );
};

// Render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AddToCartButton />);
