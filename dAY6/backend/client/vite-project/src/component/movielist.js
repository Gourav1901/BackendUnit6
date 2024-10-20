import React, { useEffect, useState } from 'react';
import { getMovies } from '../services/movieService';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const moviesData = await getMovies();
      setMovies(moviesData);
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title} - Directed by {movie.director}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
