// Imports
import React from "react";
import ReactDOM from "react-dom/client";
import laptop from "./assets/images/laptop.jpg";

// ProductCardImage
const ProductCardImage = ({ src, alt, width }) => {
  return <img src={src} alt={alt} width={250} height={200} />;
};

// Render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProductCardImage src={laptop} alt="Laptop" />);
