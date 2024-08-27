// Imports
import React from "react";
import ReactDOM from "react-dom/client";
import laptop from "./assets/images/laptop.jpg";
import "./app.css";

// Parent: ProductCard
const ProductCard = () => {
  return (
  )
}

// Child 1: ProductCardImage
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

// Child 2: ProductCardText
const ProductCardText = ({ productName, productSummary, productPrice }) => {
  return (
    <>
      <h3>{productName}</h3>
      <p>{productSummary}</p>
      <p>{`£${productPrice}`}</p>
    </>
  );
};

// Child 3: ProductCardButtons
const ProductCardButtons = () => {
  return (
    <>
      <BuyNowButton />
      <AddToCartButton />
      <AddToWishListButton />
    </>
  );
};

// Grandchildren

// AddToCartButton
const AddToCartButton = () => {
  return <button className="button product-card-button">Add To Cart 🛒</button>;
};

// AddToWishList
const AddToWishListButton = () => {
  return (
    <button className="button product-card-button">Add To WishList 🎁</button>
  );
};

// BuyNowButton
const BuyNowButton = ({ linkText = "Buy Now", category, id, productName }) => {
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
root.render(<ProductCardButtons />);
