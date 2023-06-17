 // ProductsScreen.js
import React from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';

import HomeScreen from './HomeScreen';
import ProductsScreen from './ProductsScreen';
import ContactUsScreen from './ContactUsScreen';

const App = () => {
  return (
    <div>
      <h1>The Generics</h1>
      <nav>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink exact to="/products" activeClassName="active">
          Products
        </NavLink>
        <NavLink exact to="/contact-us" activeClassName="active">
          Contact Us
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/products" component={ProductsScreen} />
        <Route exact path="/contact-us" component={ContactUsScreen} />
      </Switch>
    </div>
  );
};

export default App;
