 // ProductsScreen.js
import React, { useEffect, useState } from 'react';
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
  const [showForm, setShowForm] = useState(false);
  const [newMovieObj, setNewMovieObj] = useState({ title: '', price: '', imageUrl: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMovies([...movies, newMovieObj]);
    setShowForm(false);
    setNewMovieObj({ title: '', price: '', imageUrl: '' });
  };

  useEffect(() => {
    const fetchMoviesData = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };
    fetchMoviesData();
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
          {showForm && (
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={newMovieObj.title}
                onChange={(e) => setNewMovieObj({ ...newMovieObj, title: e.target.value })}
                required
              />
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                value={newMovieObj.price}
                onChange={(e) => setNewMovieObj({ ...newMovieObj, price: e.target.value })}
                required
              />
              <label htmlFor="imageUrl">Image URL:</label>
              <input
                type="text"
                id="imageUrl"
                value={newMovieObj.imageUrl}
                onChange={(e) => setNewMovieObj({ ...newMovieObj, imageUrl: e.target.value })}
                required
              />
              <button type="submit">Add Movie</button>
            </form>
          )}
          <button onClick={() => setShowForm(!showForm)}>Add Movies</button>
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
