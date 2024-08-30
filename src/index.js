// Imports
import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import laptop from "./assets/images/laptop.jpg";
import airpods from "./assets/images/airpods.jpg";
import camera from "./assets/images/camera.jpg";
import drone from "./assets/images/drone.jpg";
import phone from "./assets/images/phone.jpg";

// Product objects (data)
const productOne = {
  src: laptop,
  alt: "Laptop",
  productName: "Maqbook Pro Laptop",
  productSummary: "Quick, efficient laptop for the workplace.",
  productPrice: 249.99,
  category: "Devices",
  id: 1,
};

const productTwo = {
  src: airpods,
  alt: "Airpoods Pro",
  productName: "Airpoods Pro",
  productSummary: "Comfy earphones, with great sound quality.",
  productPrice: 249.99,
  category: "Devices",
  id: 2,
};

const productThree = {
  src: camera,
  alt: "Camera",
  productName: "Camera NMPO21",
  productSummary: "High quality, antique camera.",
  productPrice: 1199.99,
  category: "Devices",
  id: 3,
};

const productFour = {
  src: drone,
  alt: "Drone",
  productName: "Drone MQ893",
  productSummary: "Drone with HD camera.",
  productPrice: 2499.99,
  category: "Devices",
  id: 4,
};

const productFive = {
  src: phone,
  alt: "Lphone 12 Max",
  productName: "Lphone 12 Pro Max",
  productSummary: "Durable, lightweight smart phone.",
  productPrice: 899.99,
  category: "Devices",
  id: 5,
};

// ProductList
const ProductList = (props) => {
  return (
    <section id={props.listName}>
      <div className="container">
        <h2>{props.sectionHeading}</h2>
        <ul className="product-list featured-list laptops-list">
          <ProductCard
            src={productOne.src}
            alt={productOne.alt}
            productName={productOne.productName}
            productSummary={productOne.productSummary}
            productPrice={productOne.productPrice}
            category={productOne.category}
            id={productOne.id}
          />
          <ProductCard
            src={productTwo.src}
            alt={productTwo.alt}
            productName={productTwo.productName}
            productSummary={productTwo.productSummary}
            productPrice={productTwo.productPrice}
            category={productTwo.category}
            id={productTwo.id}
          />
          <ProductCard
            src={productThree.src}
            alt={productThree.alt}
            productName={productThree.productName}
            productSummary={productThree.productSummary}
            productPrice={productThree.productPrice}
            category={productThree.category}
            id={productThree.id}
          />
          <ProductCard
            src={productFour.src}
            alt={productFour.alt}
            productName={productFour.productName}
            productSummary={productFour.productSummary}
            productPrice={productFour.productPrice}
            category={productFour.category}
            id={productFour.id}
          />
          <ProductCard
            src={productFive.src}
            alt={productFive.alt}
            productName={productFive.productName}
            productSummary={productFive.productSummary}
            productPrice={productFive.productPrice}
            category={productFive.category}
            id={productFive.id}
          />
        </ul>
      </div>
    </section>
  );
};

// ProductCard
const ProductCard = (props) => {
  return (
    <li>
      <article className="product-card">
        <ImageLink
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.width * 0.8}
          category={props.category}
          id={props.id}
          productName={props.productName}
        />
        <p className="product-price">{`£${props.productPrice}`}</p>
        <h3 className="product-name">{props.productName}</h3>
        <p className="product-summary">{props.productSummary}</p>
        <BuyNowButton
          category={props.category}
          id={props.id}
          productName={props.productName}
        />
        <AddToCartButton productName={props.productName} />
        <AddToWishListButton productName={props.productName} />
      </article>
    </li>
  );
};

ProductCard.defaultProps = {
  width: 230,
};

// ImageLink
const ImageLink = (props) => {
  return (
    <a
      href={`${props.category}/${props.id}`}
      title={`Go to ${props.productName} page.`}
    >
      <Image
        className="image"
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </a>
  );
};

// AddToCartButton
const AddToCartButton = (props) => {
  return (
    <button
      className="button secondary-button product-card-button"
      title={`Add ${props.productName} to your cart.`}
    >
      Add To Cart 🛒
    </button>
  );
};

// AddToWishListButton
const AddToWishListButton = (props) => {
  return (
    <button
      className="button secondary-button product-card-button"
      title={`Add ${props.productName} to your wish list.`}
    >
      Add To WishList 🎁
    </button>
  );
};

// BuyNowButton
const BuyNowButton = (props) => {
  return (
    <a
      className="button primary-button product-card-button"
      href={`${props.category}/${props.id}`}
      title={`Go to ${props.productName} page.`}
    >
      Buy Now ➡
    </a>
  );
};

// Image
const Image = (props) => {
  return (
    <img
      className="image"
      src={props.src}
      alt={props.alt}
      width={props.width}
    />
  );
};

// ProductRating
const ProductRating = () => {
  return <p>XXXX (4)</p>;
};

// Render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProductList listName="featured" sectionHeading="Featured" />);
