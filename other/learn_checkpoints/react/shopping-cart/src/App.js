import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader.jsx';
import CartFooter from './components/CartFooter.jsx';

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
