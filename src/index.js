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
    <>
      <Image src={src} alt={alt} width={width} height={width * 0.8} />
      <ProductCardText
        productName={productName}
        productSummary={productSummary}
        productPrice={productPrice}
      />
      <ProductCardButtons
        category={category}
        id={id}
        productName={productName}
      />
    </>
  );
};

// Image
const Image = ({ src, alt, width = "250" }) => {
  return (
    <img
      className="image"
      src={src}
      alt={alt}
      width={width}
      height={width * 0.8}
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
root.render(<ProductCard />);
