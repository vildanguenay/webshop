import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Cart from './pages/Cart';
import Photos from './pages/Photos';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/webshop">
          <Photos />
        </Route>
        <Route exact path="/webshop/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
