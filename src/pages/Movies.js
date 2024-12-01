import { useState, useEffect, useContext, useCallback } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { MovieList } from '../components/MovieCard';
import AdminView from '../components/AdminView';
import AddMovie from '../components/AddMovie';

export default function Movies() {
  const { user, setUser } = useContext(AuthContext);
  const [movies, setMovies] = useState([]); 
  const [showAddMovieModal, setShowAddMovieModal] = useState(false); // State to control modal visibility
  const [loading, setLoading] = useState(true);

  // Fetch user data
  const fetchUserData = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const res = await fetch('https://movieapp-api-lms1.onrender.com/users/details', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.user) setUser(data.user);
      else console.error('User data not found:', data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }, [setUser]);

  // Fetch movie data
  const fetchMovies = useCallback(async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch('https://movieapp-api-lms1.onrender.com/movies/getMovies', {
        headers: { Authorization: token ? `Bearer ${token}` : '' },
      });
      const data = await res.json();
      if (Array.isArray(data.movies)) {
        setMovies(data.movies);
      } else {
        console.error('Unexpected response format:', data);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // Add a new movie to the state
  const addNewMovie = (newMovie) => {
    setMovies((prevMovies) => [newMovie, ...prevMovies]);
  };

  return (
    <Container className="mb-5">
      {user?.isAdmin ? (
        <>
          {/* Admin View */}
          <AdminView moviesData={movies} fetchData={fetchMovies} />
          <Button
            variant="danger"
            onClick={() => setShowAddMovieModal(true)}
            className="mb-3 d-flex px-4 py-2 fw-bold mx-auto"
          >
            Add Movie
          </Button>
        </>
      ) : (
        // User View
        // <UserView moviesData={movies} />
        <MovieList movies={movies} />
      )}

      {/* Modal for AddMovie component */}
      <Modal show={showAddMovieModal} onHide={() => setShowAddMovieModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddMovie closeModal={() => setShowAddMovieModal(false)} addMovie={addNewMovie} />
        </Modal.Body>
      </Modal>
    </Container>
  );
}
