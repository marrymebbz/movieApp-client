import { useState, useEffect } from 'react';
import { MovieList } from './MovieCard';

export default function UserView({ moviesData }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (Array.isArray(moviesData)) {
      const activeMovies = moviesData.filter(movie => movie.isActive);
      setMovies(activeMovies);
    } else {
      console.error("Expected moviesData to be an array, but got:", moviesData);
      setMovies([]); 
    }
  }, [moviesData]);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}
