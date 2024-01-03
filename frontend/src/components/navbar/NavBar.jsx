// NavBar.js
import React from 'react';
import "../../styles/navbar.css"

const NavBar = ({ cartItemCount }) => {
  return (
    <div className='navbar'>
      <header className="app-name">Mobile Store</header>
      <div className="cart-icon">🛒 {cartItemCount}</div>
    </div>
  )
}

export default NavBar;
