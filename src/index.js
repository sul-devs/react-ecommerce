// Imports
import React from "react"
import ReactDOM from "react-dom/client"
import "./app.css"
import laptop from "./assets/images/laptop.jpg"
import airpods from "./assets/images/airpods.jpg"
import camera from "./assets/images/camera.jpg"
import drone from "./assets/images/drone.jpg"
import phone from "./assets/images/phone.jpg"

// Products data
const products = [
  {
    src: laptop,
    alt: "Laptop",
    productName: "Maqbook Pro",
    productSummary: "Quick, efficient laptop for the workplace.",
    productPrice: 249.99,
    category: "Devices",
    id: 1,
  },
  {
    src: airpods,
    alt: "Airpoods Pro",
    productName: "Earpods Pro",
    productSummary: "Comfy earphones, with great sound quality.",
    productPrice: 99.99,
    category: "Devices",
    id: 2,
  },
  {
    src: camera,
    alt: "Camera",
    productName: "Camera NMPO21",
    productSummary: "High quality, antique camera.",
    productPrice: 1199.99,
    category: "Devices",
    id: 3,
  },
  {
    src: drone,
    alt: "Drone",
    productName: "Drone MQ893",
    productSummary: "Drone with 4K HD camera built-in.",
    productPrice: 2499.99,
    category: "Devices",
    id: 4,
  },
  {
    src: phone,
    alt: "Lphone 12 Max",
    productName: "Lphone 12 Pro",
    productSummary: "Durable, lightweight smart phone.",
    productPrice: 899.99,
    category: "Devices",
    id: 5,
  },
]

// ProductList
const ProductList = (props) => {
  const { listName, sectionHeading } = props
  return (
    <section id={listName}>
      <div className="container">
        <h2>{sectionHeading}</h2>
        <ul className="product-list featured-list laptops-list">
          {products.map((product) => {
            return (
              <ProductCard
                src={product.src}
                alt={product.alt}
                width={product.width}
                productName={product.productName}
                productSummary={product.productSummary}
                productPrice={product.productPrice}
                category={product.category}
                id={product.id}
              />
            )
          })}
        </ul>
      </div>
    </section>
  )
}

// ProductCard
const ProductCard = (props) => {
  const {
    src,
    alt,
    width,
    productName,
    productSummary,
    productPrice,
    category,
    id,
  } = props
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
  )
}

ProductCard.defaultProps = {
  width: 230,
}

// ImageLink
const ImageLink = (props) => {
  const { src, alt, width, height, productName, category, id } = props
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
  )
}

// AddToCartButton
const AddToCartButton = (props) => {
  const { productName } = props
  return (
    <button
      className="button secondary-button product-card-button"
      title={`Add ${productName} to your cart.`}
    >
      Add To Cart 🛒
    </button>
  )
}

// AddToWishListButton
const AddToWishListButton = (props) => {
  const { productName } = props
  return (
    <button
      className="button secondary-button product-card-button"
      title={`Add ${productName} to your wish list.`}
    >
      Add To WishList 🎁
    </button>
  )
}

// BuyNowButton
const BuyNowButton = (props) => {
  const { productName, category, id } = props
  return (
    <a
      className="button primary-button product-card-button"
      href={`${category}/${id}`}
      title={`Go to ${productName} page.`}
    >
      Buy Now ➡
    </a>
  )
}

// Image
const Image = (props) => {
  const { src, alt, width } = props
  return <img className="image" src={src} alt={alt} width={width} />
}

// ProductRating
const ProductRating = () => {
  return <p>XXXX (4)</p>
}

// Render app
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<ProductList listName="featured" sectionHeading="Featured" />)
