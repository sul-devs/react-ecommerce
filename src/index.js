// Imports
import React from "react";
import ReactDOM from "react-dom/client";
import laptop from "./assets/images/laptop.jpg";
import "./app.css";

// ProductCard
const ProductCard = (
  src,
  alt,
  width = "250",
  productName,
  productSummary,
  productPrice,
  category,
  id
) => {
  return (
    <article className="product-card">
      <Image src={src} alt={alt} width="250" height={width * 0.8} />
      <h3>{productName}</h3>
      <p>{productSummary}</p>
      <p>{`£${productPrice}`}</p>
      <BuyNowButton category={category} id={id} />
      <AddToCartButton />
      <AddToWishListButton />
    </article>
  );
};

// Image
const Image = ({ src, alt, width, height }) => {
  return (
    <img className="image" src={src} alt={alt} width={width} height={height} />
  );
};

// ProductRating
const ProductRating = () => {};

// AddToCartButton
const AddToCartButton = () => {
  return <button className="button product-card-button">Add To Cart 🛒</button>;
};

// AddToWishListButton
const AddToWishListButton = () => {
  return (
    <button className="button product-card-button">Add To WishList 🎁</button>
  );
};

// BuyNowButton
const BuyNowButton = ({ category, id, productName }) => {
  return (
    <a
      className="button product-card-button"
      href={`${category}/${id}`}
      title={`Go to ${productName} page.`}
    >
      Buy Now
    </a>
  );
};

// Render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProductCard src={laptop} />);
