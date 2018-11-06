import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader.jsx';
import CartItems from './components/CartItems.jsx';
import AddItem from './components/AddItem.jsx';
import CartFooter from './components/CartFooter.jsx';
import Spinner from './components/Spinner.jsx';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  state = {
    cartItems: [],
    products: [],
    isLoading: true,
    error: false,
  };

  async componentDidMount() {
    const delay = 700;
    const delayedPromise = new Promise(resolve => setTimeout(resolve, delay));
    const fetchProducts = fetch(`${API_URL}/products`).then(r => r.json());
    const fetchItems = fetch(`${API_URL}/items`).then(r => r.json());
    try {
      const promisesResult = await Promise.all([fetchProducts, fetchItems, delayedPromise]);
      const [products, cartItems] = promisesResult.slice(0,2);
      this.setState({ products, cartItems, isLoading: false });
    }
    catch (err) {
      this.setState({error: `Error fetching API`, isLoading: false })
    }
  }

  addToCart = async (newItem) => {
    const postResponse = await fetch(`${API_URL}/items`, {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const item = await postResponse.json();
    this.setState(prevState => ({ cartItems: [ ...prevState.cartItems, item ] }));
  }

  removeFromCart = async (item) => {
    await fetch(`${API_URL}/items/${item.id}`, { method: 'Delete' });
    this.setState(prevState => ({ cartItems: prevState.cartItems.filter(({id}) => id !== item.id) }));
  }

  render() {
    const cart = (
      <div>
        <CartItems cartItems={this.state.cartItems} products={this.state.products} removeFromCart={this.removeFromCart} />
        <AddItem products={this.state.products} addToCart={this.addToCart} />
        <CartFooter copyright={2018} cartItems={this.state.cartItems} />
      </div>
    );

    const error = (
      <div className="container mt-4">
        <h3>{this.state.error}</h3>
      </div>
    );

    return (
      <div className="App">
        <CartHeader />
        { this.state.isLoading ? <Spinner /> : this.state.error ? error : cart }
      </div>
    );
  }
}

export default App;
