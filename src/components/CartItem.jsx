import React from 'react';
import { toDollars} from '../utils/formatCurrency';

const CartItem = ({ item, removeFromCart, product }) => {

  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-7">{ product.name }</div>
        <div className="col-md-2">{ toDollars(product.priceInCents/100) }</div>
        <div className="col-md-2">{ item.quantity }</div>
        <button className="col-md-1 fa fa-trash btn" aria-hidden="true" onClick={() => removeFromCart(item)}>
        </button>
      </div>
    </div>
  )
};

export default CartItem;
