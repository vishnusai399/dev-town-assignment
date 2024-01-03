
import React from 'react';
import "../../../styles/mobiles.css"
import EachMobile from './EachMobile';

const Mobiles = ({ mobiles, addToCartHandler }) => {
  return (
    <div className='mobile-wrapper'>
      {mobiles.map((eachMobile) => (
        <EachMobile key={eachMobile?._id} data={eachMobile} addToCartHandler={addToCartHandler} />
      ))}
    </div>
  )
}

export default Mobiles;
