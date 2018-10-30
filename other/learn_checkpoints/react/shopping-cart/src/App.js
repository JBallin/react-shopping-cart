import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader.jsx';
import CartItems from './components/CartItems.jsx';
import AddItem from './components/AddItem.jsx';
import CartFooter from './components/CartFooter.jsx';

class App extends Component {
  state = {
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    selected: {id: "", quantity: 0},
    idCounter: 4,
  }

  handleChangeProduct = e => {
    const id = Number(e.target.value);
    this.setState(prevState => ({ selected: { quantity: prevState.selected.quantity || 1, id} }));
  }

  handleChangeQuantity = e => {
    let quantity = Number(e.target.value);
    if (quantity < 0) quantity = 0;
    this.setState(prevState => ({ selected: { ...prevState.selected, quantity } }));
  }

  handleSubmit = e => {
    e.preventDefault();
    const product = this.state.products.find(p => p.id === this.state.selected.id);
    const { quantity } = this.state.selected;
    this.setState(prevState =>
      ({
        cartItemsList: [ ...prevState.cartItemsList,
          { id: prevState.idCounter, product: { ...product, priceInCents: product.priceInCents * quantity }, quantity }
        ],
        idCounter: prevState.idCounter + 1,
      })
    );
    this.setState({selected: {id: "", quantity: 0} });
  }

  deleteItem = item => {
    this.setState(prevState => ({ cartItemsList: prevState.cartItemsList.filter(({id}) => id !== item.id) }))
  }

  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems cartItems={this.state.cartItemsList} deleteItem={this.deleteItem} />
        <AddItem
          products={this.state.products}
          selected={this.state.selected}
          handleChangeProduct={this.handleChangeProduct}
          handleChangeQuantity={this.handleChangeQuantity}
          handleSubmit={this.handleSubmit}
        />
        <CartFooter copyright={2018} cartItems={this.state.cartItemsList} />
      </div>
    );
  }
}

export default App;
