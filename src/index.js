// Imports
import React from "react";
import ReactDOM from "react-dom/client";
import laptop from "./assets/images/laptop.jpg";
import "./app.css";

// ProductList
const ProductList = () => {
  return (
    <section>
      <div className="container">
        <h2>Shop Laptops</h2>
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
const ProductCard = ({
  src,
  alt,
  width = 250,
  productName,
  productSummary,
  productPrice,
  category,
  id,
}) => {
  return (
    <li>
      <article className="product-card">
        <ImageLink
          src={src}
          alt={alt}
          width={width}
          height={width * 0.8}
          category={category}
          id={id}
          productName={productName}
        />
        <p className="product-price">{`£${productPrice}`}</p>
        <h3 className="product-name">{productName}</h3>
        <p className="product-summary">{productSummary}</p>
        <BuyNowButton category={category} id={id} productName={productName} />
        <AddToCartButton productName={productName} />
        <AddToWishListButton productName={productName} />
      </article>
    </li>
  );
};

// ImageLink
const ImageLink = ({ src, alt, width, height, category, id, productName }) => {
  return (
    <a href={`${category}/${id}`} title={`Go to ${productName} page.`}>
      <Image
        className="image"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </a>
  );
};

// AddToCartButton
const AddToCartButton = ({ productName }) => {
  return (
    <button
      className="button secondary-button product-card-button"
      title={`Add ${productName} to your cart.`}
    >
      Add To Cart 🛒
    </button>
  );
};

// AddToWishListButton
const AddToWishListButton = ({ productName }) => {
  return (
    <button
      className="button secondary-button product-card-button"
      title={`Add ${productName} to your wish list.`}
    >
      Add To WishList 🎁
    </button>
  );
};

// BuyNowButton
const BuyNowButton = ({ category, id, productName }) => {
  return (
    <a
      className="button primary-button product-card-button"
      href={`${category}/${id}`}
      title={`Go to ${productName} page.`}
    >
      Buy Now ➡
    </a>
  );
};

// Image
const Image = ({ src, alt, width, height }) => {
  return (
    <img className="image" src={src} alt={alt} width={width} height={height} />
  );
};

// ProductRating
const ProductRating = () => {
  return <p>XXXX (4)</p>;
};

// Render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProductList />);
