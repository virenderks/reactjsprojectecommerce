 // ProductsScreen.js
import React, { useEffect, useState } from 'react';

const ProductsScreen = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    const response = await fetch('/api/movies');
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchMoviesData = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
      setLoading(false);
    };
    fetchMoviesData();
  }, []);

  const handleDeleteMovie = async (id) => {
    await fetch(`/api/movies/${id}`, { method: 'DELETE' });
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <p>Price: ${movie.price}</p>
              <img src={movie.imageUrl} alt={movie.title} />
              <button onClick={() => handleDeleteMovie(movie.id)}>Delete Movie</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsScreen;
