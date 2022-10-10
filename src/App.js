import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import ShoppingCart from './Components/ShoppingCart';
import CardProduct from './Components/CardProduct';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shoppingcart" component={ ShoppingCart } />
          <Route path="/cardproduct/:id" component={ CardProduct } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
