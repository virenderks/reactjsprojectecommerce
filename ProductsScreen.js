 // ProductsScreen.js
import React, { useEffect, useState, useCallback } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import Product from './Product';

const fetchMovies = async () => {
  const response = await fetch('https://swapi.dev/api/films');
  const data = await response.json();
  return data.results;
};

const ProductsScreen = () => {
  const [movies, setMovies] = useState([]);

  const memoizedFetchMovies = useCallback(async () => {
    const moviesData = await fetchMovies();
    setMovies(moviesData);
  }, []);

  useEffect(() => {
    memoizedFetchMovies();
  }, [memoizedFetchMovies]);

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
            {movies.map((movie, index) => (
              <Product
                key={index}
                title={movie.title}
                price={movie.price}
                imageUrl={movie.imageUrl}
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
