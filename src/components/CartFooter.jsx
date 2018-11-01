import React from 'react';

const CartFooter = ({ copyright }) => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#footer">&copy; { copyright }</a>
  </nav>
);

export default CartFooter;
