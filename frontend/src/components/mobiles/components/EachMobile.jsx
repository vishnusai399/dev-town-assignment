import React from "react";
import "../../../styles/each-mobile.css"

const EachMobile = ({data}) => {
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
        <p>Color:{data.color}</p>
        <p>processor:{data.processor}</p>
        <p>Type:{data.type}</p> <p>OS:{data.os}</p>
        <p>Memory:{data.memory}</p>
      </div>
    </div>
  );
};

export default EachMobile;
