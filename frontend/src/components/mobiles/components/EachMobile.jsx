import React, { useState } from "react";
import "../../../styles/each-mobile.css";

const EachMobile = ({ data, addToCartHandler }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCartHandler(data);
    setIsAddedToCart(true);
  };

  return (
    <div className="each-mobile">
      <div className="mobile-image-wrapper">
        <img src={data.image} className="mobile-img" alt="" />
      </div>
      <div className="mobile-details">
        <div className="name-price">
          <span className="mobile-name">{data.model}</span>
          <span className="mobile-price">&#8377;{data.price}</span>
        </div>
        <p>Color: {data.color}</p>
        <p>Processor: {data.processor}</p>
        <p>Type: {data.type}</p> <p>OS: {data.os}</p>
        <p>Memory: {data.memory}</p>
        <button
          className={`add-to-cart-button ${isAddedToCart ? "added-to-cart" : ""}`}
          onClick={handleAddToCart}
          disabled={isAddedToCart}
        >
          {isAddedToCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default EachMobile;
