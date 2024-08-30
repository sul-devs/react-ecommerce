// Imports
import React from "react";
import ReactDOM from "react-dom/client";
import laptop from "./assets/images/laptop.jpg";
import "./app.css";

// ProductList
const ProductList = (props) => {
  return (
    <section id={props.listName}>
      <div className="container">
        <h2>{props.sectionHeading}</h2>
        <ul className="product-list featured-list laptops-list">
          <ProductCard
            src={laptop}
            alt="Laptop"
            productName="Maqbook Pro Laptop"
            productSummary="Very nice laptop, with apple."
            productPrice={249.99}
            category="Devices"
            id={1}
          />
          <ProductCard
            src={laptop}
            alt="Laptop"
            productName="Maqbook Pro Laptop"
            productSummary="Very nice laptop, with apple."
            productPrice={249.99}
            category="Devices"
            id={1}
          />
          <ProductCard
            src={laptop}
            alt="Laptop"
            productName="Maqbook Pro Laptop"
            productSummary="Very nice laptop, with apple."
            productPrice={249.99}
            category="Devices"
            id={1}
          />
          <ProductCard
            src={laptop}
            alt="Laptop"
            productName="Maqbook Pro Laptop"
            productSummary="Very nice laptop, with apple."
            productPrice={249.99}
            category="Devices"
            id={1}
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
root.render(
  <ProductCard
    src={laptop}
    alt="Laptop"
    productName="Maqbook Pro Laptop"
    productSummary="Very nice laptop, with apple."
    productPrice={249.99}
    category="Devices"
    id={1}
  />
);
