import React from 'react';

const CartFooter = ({ copyright, cartItems }) => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#footer">&copy; { copyright }</a>
    <p style={{color: "white"}}>Total: ${cartItems.reduce((total, item) => total + item.product.priceInCents, 0)/100}</p>
  </nav>
);

export default CartFooter;
