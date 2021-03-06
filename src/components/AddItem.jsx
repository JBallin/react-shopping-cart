import React from 'react';
import { toDollars } from '../utils/formatCurrency';

class AddItem extends React.Component {
  state = {
    selected: { product_id: '', quantity: '' }
  };

  handleChangeQuantity = e => {
    let quantity = e.target.value;
    if (quantity) {
      quantity = Number(quantity);
      if (quantity < 1) quantity = this.state.selected.product_id ? 1 : '';
    }
    this.setState(prevState => ({ selected: { ...prevState.selected, quantity } }));
  }

  handleChangeProduct = e => {
    const product_id = Number(e.target.value);
    this.setState(prevState => ({ selected: { quantity: prevState.selected.quantity || 1, product_id} }));
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addToCart(this.state.selected);
    this.setState({ selected: {product_id: '', quantity: ''} })
  }

  render() {
    const { selected } = this.state;
    const { products } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="product">Product</label>
            <select name="product" onChange={this.handleChangeProduct} value={selected.product_id} className="form-control">
              <option disabled={true} value="">Select an option...</option>
              { products.map(p => <option key={p.id} value={p.id}>{`${ p.name } (${ toDollars(p.priceInCents/100) })`}</option>) }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" value={selected.quantity} onChange={this.handleChangeQuantity} className="form-control" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" disabled={!selected.product_id || !selected.quantity}>Add to cart</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddItem;
