import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader.jsx';
import CartItems from './components/CartItems.jsx';
import AddItem from './components/AddItem.jsx';
import CartFooter from './components/CartFooter.jsx';
import products from './db/products';

class App extends Component {
  state = {
    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
  }

  handleSubmit = selected => {
    const product = products.find(p => p.id === selected.id);
    const { quantity } = selected;
    const lastItem = this.state.cartItemsList.slice(-1)[0];
    const id = lastItem ? lastItem.id + 1 : 1;
    const priceInCents = product.priceInCents * quantity;
    const addedItem = { id, product: { ...product, priceInCents }, quantity };
    this.setState(prevState => ({ cartItemsList: [ ...prevState.cartItemsList, addedItem] }));
  }

  deleteItem = item => {
    this.setState(prevState => ({ cartItemsList: prevState.cartItemsList.filter(({id}) => id !== item.id) }))
  }

  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems cartItems={this.state.cartItemsList} deleteItem={this.deleteItem} />
        <AddItem products={products} handleSubmit={this.handleSubmit} />
        <CartFooter copyright={2018} cartItems={this.state.cartItemsList} />
      </div>
    );
  }
}

export default App;
