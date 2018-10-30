import React from 'react';

const AddItem = ({ products, selected, handleSubmit, handleChangeProduct, handleChangeQuantity }) => (
  <div className="container mt-4">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="quantity">Quantity</label>
        <input type="number" name="quantity" value={selected.quantity} onChange={handleChangeQuantity} className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="product">Product</label>
        <select name="product" onChange={handleChangeProduct} value={selected.id} className="form-control">
          <option disabled={true} value="null">Select an option...</option>
          { products.map(p => <option key={p.id} value={p.id}>{p.name}</option>) }
        </select>
      </div>
      <div className="form-group">
        <button className="btn btn-primary" disabled={!selected.id || !selected.quantity}>Add to cart</button>
      </div>
    </form>
  </div>
);

export default AddItem;
