import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader.jsx';
import CartItems from './components/CartItems.jsx';
import CartFooter from './components/CartFooter.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartItems />
        <CartFooter copyright={2018} />
      </div>
    );
  }
}

export default App;
