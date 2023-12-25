import React from 'react';
import  "../../../styles/mobiles.css"
import EachMobile from './EachMobile';

const Mobiles = ({mobiles}) => {
  return (
    <div className='mobile-wrapper'>
    {mobiles.map((eachMobile) => (
      <EachMobile key={eachMobile?._id} data={eachMobile} />
    ))}
  </div>
  )
}

export default Mobiles
