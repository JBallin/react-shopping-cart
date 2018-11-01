import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader.jsx';
import CartItems from './components/CartItems.jsx';
import AddItem from './components/AddItem.jsx';
import CartFooter from './components/CartFooter.jsx';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  state = {
    cartItems: [],
    products: []
  };

  async componentDidMount() {
    const fetchProducts = fetch(`${API_URL}/products`).then(r => r.json());
    const fetchItems = fetch(`${API_URL}/items`).then(r => r.json());
    const [products, cartItems] = await Promise.all([fetchProducts, fetchItems]);
    this.setState({ products, cartItems });
  }

  addToCart = selected => {
    const product = this.state.products.find(p => p.id === selected.id);
    const { quantity } = selected;
    const lastItem = this.state.cartItems.slice(-1)[0];
    const id = lastItem ? lastItem.id + 1 : 1;
    const priceInCents = product.priceInCents * quantity;
    const addedItem = { id, product: { ...product, priceInCents }, quantity };
    this.setState(prevState => ({ cartItems: [ ...prevState.cartItems, addedItem] }));
  }

  removeFromCart = item => {
    this.setState(prevState => ({ cartItems: prevState.cartItems.filter(({id}) => id !== item.id) }))
  }

  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems cartItems={this.state.cartItems} products={this.state.products} removeFromCart={this.removeFromCart} />
        <AddItem products={this.state.products} addToCart={this.addToCart} />
        <CartFooter copyright={2018} cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default App;
