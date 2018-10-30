import React from 'react';
import CartItem from './CartItem.jsx';

const CartItems = ({ cartItems, deleteItem }) => (
  <div className="container mt-5">
    <div className="list-group">
      <div className="list-group-item bg-dark text-white">
        <div className="row">
          <div className="col-md-7">Product</div>
          <div className="col-md-2">Price</div>
          <div className="col-md-2">Quantity</div>
        </div>
      </div>
      { cartItems.map(item => <CartItem key={item.id} item={item} deleteItem={deleteItem} />) }
    </div>
  </div>
);

export default CartItems;
