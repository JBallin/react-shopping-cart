import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/CartHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CartHeader />
        </header>
      </div>
    );
  }
}

export default App;
