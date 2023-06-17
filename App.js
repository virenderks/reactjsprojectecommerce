 // ProductsScreen.js
import React, { useEffect, useState } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import Product from './Product';

const ProductsScreen = () => {
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.example.com/products');
        const data = await response.json();
        setProductsArr(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

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
        <NavLink exact to="/cart" activeClassName="active">
          Cart
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/products">
          <h2>Music</h2>
          <div>
            {productsArr.map((product, index) => (
              <Product
                key={index}
                title={product.title}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </Route>
        <Route exact path="/cart">
          {/* Cart component */}
        </Route>
      </Switch>
    </div>
  );
};

export default ProductsScreen;
