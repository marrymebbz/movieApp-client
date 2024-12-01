import { useState, useEffect } from 'react';
import { MovieList } from './MovieCard';

export default function UserView({ moviesData }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
=======
    // Check if productsData is an array before filtering
>>>>>>> 4d3fa02957dab91a0267f09b0d78d42a124ba86d
    if (Array.isArray(moviesData)) {
      const activeMovies = moviesData.filter(movie => movie.isActive);
      setMovies(activeMovies);
    } else {
<<<<<<< HEAD
      console.error("Expected moviesData to be an array, but got:", moviesData);
      setMovies([]); 
=======
      console.error("Expected productsData to be an array, but got:", moviesData);
      setMovies([]); // Optionally, set to an empty array if productsData is invalid
>>>>>>> 4d3fa02957dab91a0267f09b0d78d42a124ba86d
    }
  }, [moviesData]);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}
