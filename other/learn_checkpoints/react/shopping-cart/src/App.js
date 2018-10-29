import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CartHeader />
        <CartFooter />
      </div>
    );
  }
}

export default App;
