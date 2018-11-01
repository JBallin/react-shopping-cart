import React from 'react';
import CartItem from './CartItem.jsx';
import { toDollars } from '../utils/formatCurrency';

const CartItems = ({ cartItems, removeFromCart, products }) => {
  const totalInCents = cartItems.reduce((sum, item) => sum + products[item.product_id - 1].priceInCents, 0);
  const total = toDollars(totalInCents/100);
  return (
    <div className="container mt-5">
      <div className="list-group">
        <div className="list-group-item bg-dark text-white">
          <div className="row">
            <div className="col-md-7">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        { cartItems.map(item => <CartItem key={item.id} product={products[item.product_id - 1]} item={item} removeFromCart={removeFromCart} />) }
      </div>
      <div className="text-right mt-2">
        <p className="font-weight-bold">Total: {total}</p>
      </div>
    </div>
  );
}

export default CartItems;
