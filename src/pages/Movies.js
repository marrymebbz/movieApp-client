// import { useState, useEffect, useContext, useCallback } from 'react';
// import { Container, Button, Modal } from 'react-bootstrap';
// import { AuthContext } from '../context/AuthContext';
// import { MovieList } from '../components/MovieCard';
// import AddMovie from '../components/AddMovie';

// export default function Movies() {
//   const { user, setUser } = useContext(AuthContext);
//   const [movies, setMovies] = useState([]); 
//   const [showAddMovieModal, setShowAddMovieModal] = useState(false); // State to control modal visibility

//   // Fetch user data
//   const fetchUserData = useCallback(() => {
//     const token = localStorage.getItem('token');
//     if (!token) return; // No need to fetch user data if no token

//     fetch('https://movieapp-api-lms1.onrender.com/users/details', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.user) {
//           setUser(data.user); // Update context with user data
//         } else {
//           console.error('User data not found:', data);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   }, [setUser]);

//   // Fetch movie data
//   const fetchData = useCallback(() => {
//     const token = localStorage.getItem('token');
//     const fetchUrl = 'https://movieapp-api-lms1.onrender.com/movies/getMovies';

//     fetch(fetchUrl, {
//       headers: {
//         Authorization: token ? `Bearer ${token}` : '', // Only send token if available
//       },
//     })
//       .then(res => res.json())
//       .then(data => {
//         // Check if the response contains movies array
//         if (data && Array.isArray(data.movies)) {
//           setMovies(data.movies); // Extract movies array and update state
//         } else {
//           console.error('Unexpected response format:', data);
//           setMovies([]); // Set empty array if the response is not as expected
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching movies:', error);
//         setMovies([]); // Set empty array in case of error
//       });
//   }, []);

//   useEffect(() => {
//     fetchUserData();
//   }, [fetchUserData]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   // Function to add a new movie to the list without refetching
//   const addNewMovie = (newMovie) => {
//     setMovies((prevMovies) => [newMovie, ...prevMovies]); // Add new movie at the start of the array
//   };

//   // Function to handle the modal open and close
//   const handleCloseModal = () => setShowAddMovieModal(false);
//   const handleShowModal = () => setShowAddMovieModal(true);

//   return (
//     <Container className="mb-5">

//       {/* Displaying list of movies */}
//       <MovieList movies={movies} />

//       {/* Restrict Add Movie button to admins */}
//       {user?.isAdmin && (
//         <Button
//           variant="primary"
//           onClick={handleShowModal}
//           className="mb-1 mx-auto d-flex px-4 py-2 bg-danger border-0 fw-bold text-center"
//         >
//           Add Movie
//         </Button>
//       )}

//       {/* Modal for AddMovie component */}
//       <Modal
//         show={showAddMovieModal}
//         onHide={handleCloseModal}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Add New Movie</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {/* Pass addNewMovie to AddMovie component */}
//           <AddMovie closeModal={handleCloseModal} addMovie={addNewMovie} />
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// }

// import { useState, useEffect, useContext, useCallback } from 'react';
// import { Container, Button, Modal } from 'react-bootstrap';
// import { AuthContext } from '../context/AuthContext';
// import AdminView from '../components/AdminView';
// import UserView from '../components/UserView';
// import AddMovie from '../components/AddMovie';

// export default function Movies() {
//   const { user, setUser } = useContext(AuthContext);
//   const [movies, setMovies] = useState([]);
//   const [showAddMovieModal, setShowAddMovieModal] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // Fetch user data
//   const fetchUserData = useCallback(async () => {
//     const token = localStorage.getItem('token');
//     if (!token) return;

//     try {
//       const res = await fetch('https://movieapp-api-lms1.onrender.com/users/details', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       if (data.user) setUser(data.user);
//       else console.error('User data not found:', data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   }, [setUser]);

//   // Fetch movies data
//   const fetchMovies = useCallback(async () => {
//     const token = localStorage.getItem('token');
//     try {
//       const res = await fetch('https://movieapp-api-lms1.onrender.com/movies/getMovies', {
//         headers: { Authorization: token ? `Bearer ${token}` : '' },
//       });
//       const data = await res.json();
//       if (Array.isArray(data.movies)) setMovies(data.movies);
//       else console.error('Unexpected response format:', data);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//       setMovies([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchUserData();
//   }, [fetchUserData]);

//   useEffect(() => {
//     fetchMovies();
//   }, [fetchMovies]);

//   // Add a new movie to the state
//   const addNewMovie = (newMovie) => {
//     setMovies((prevMovies) => [newMovie, ...prevMovies]);
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <Container className="mb-5">
//       {user?.isAdmin ? (
//         <>
//           {/* Admin View */}
//           <AdminView moviesData={movies} />
//           <Button
//             variant="danger"
//             onClick={() => setShowAddMovieModal(true)}
//             className="mb-3 d-flex px-4 py-2 fw-bold mx-auto"
//           >
//             Add Movie
//           </Button>
//         </>
//       ) : (
//         // User View
//         <UserView movies={movies} />
//       )}

//       {/* Modal for AddMovie component */}
//       <Modal show={showAddMovieModal} onHide={() => setShowAddMovieModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Add New Movie</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <AddMovie closeModal={() => setShowAddMovieModal(false)} addMovie={addNewMovie} />
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// }


// import { useState, useEffect, useContext, useCallback } from 'react';
// import { Container, Button, Modal } from 'react-bootstrap';
// import { AuthContext } from '../context/AuthContext';
// import AdminView from '../components/AdminView';
// import UserView from '../components/UserView';
// import AddMovie from '../components/AddMovie';

// export default function Movies() {
//   const { user, setUser } = useContext(AuthContext);
//   const [movies, setMovies] = useState([]);
//   const [showAddMovieModal, setShowAddMovieModal] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // Fetch user data
//   const fetchUserData = useCallback(async () => {
//     const token = localStorage.getItem('token');
//     if (!token) return;

//     try {
//       const res = await fetch('https://movieapp-api-lms1.onrender.com/users/details', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       if (data.user) setUser(data.user);
//       else console.error('User data not found:', data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   }, [setUser]);

//   // Fetch movies data
//   const fetchMovies = useCallback(async () => {
//     const token = localStorage.getItem('token');
//     try {
//       const res = await fetch('https://movieapp-api-lms1.onrender.com/movies/getMovies', {
//         headers: { Authorization: token ? `Bearer ${token}` : '' },
//       });
//       const data = await res.json();
//       if (Array.isArray(data.movies)) setMovies(data.movies);
//       else console.error('Unexpected response format:', data);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//       setMovies([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchUserData();
//   }, [fetchUserData]);

//   useEffect(() => {
//     fetchMovies();
//   }, [fetchMovies]);

//   // Add a new movie to the state
//   const addNewMovie = (newMovie) => {
//     setMovies((prevMovies) => [newMovie, ...prevMovies]);
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <Container className="mb-5">
//       {user?.isAdmin ? (
//         <>
//           {/* Admin View */}
//           <AdminView moviesData={movies || []} />
//           <Button
//             variant="danger"
//             onClick={() => setShowAddMovieModal(true)}
//             className="mb-3 d-flex px-4 py-2 fw-bold mx-auto"
//           >
//             Add Movie
//           </Button>
//         </>
//       ) : (
//         // User View
//         <UserView moviesData={movies || []} />
//       )}

//       {/* Modal for AddMovie component */}
//       <Modal show={showAddMovieModal} onHide={() => setShowAddMovieModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Add New Movie</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <AddMovie closeModal={() => setShowAddMovieModal(false)} addMovie={addNewMovie} />
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// }
// import { useState, useEffect, useContext, useCallback } from 'react';
// import { Container, Button, Modal } from 'react-bootstrap';
// import { AuthContext } from '../context/AuthContext';
// import AdminView from '../components/AdminView';
// import UserView from '../components/UserView';
// import AddMovie from '../components/AddMovie';

// export default function Movies() {
//   const { user, setUser } = useContext(AuthContext);
//   const [movies, setMovies] = useState([]);
//   const [showAddMovieModal, setShowAddMovieModal] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // Fetch user data
//   const fetchUserData = useCallback(async () => {
//     const token = localStorage.getItem('token');
//     if (!token) return; // Skip if no token

//     try {
//       const res = await fetch('https://movieapp-api-lms1.onrender.com/users/details', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await res.json();
//       if (data.user) setUser(data.user); // Update user context
//       else console.error('User data not found:', data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   }, [setUser]);

//   // Fetch movies data
//   const fetchMovies = useCallback(async () => {
//     const token = localStorage.getItem('token');
//     try {
//       const res = await fetch('https://movieapp-api-lms1.onrender.com/movies/getMovies', {
//         headers: { Authorization: token ? `Bearer ${token}` : '' },
//       });
//       const data = await res.json();
//       if (Array.isArray(data.movies)) setMovies(data.movies);
//       else console.error('Unexpected response format:', data);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//       setMovies([]); // Fallback to empty movies array on error
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchUserData();
//   }, [fetchUserData]);

//   useEffect(() => {
//     fetchMovies();
//   }, [fetchMovies]);

//   // Add new movie to the list without refetching
//   const addNewMovie = (newMovie) => {
//     setMovies((prevMovies) => [newMovie, ...prevMovies]);
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <Container className="mb-5">
//       {user?.isAdmin ? (
//         <>
//           {/* Admin View */}
//           <AdminView moviesData={movies || []} />
//           <Button
//             variant="danger"
//             onClick={() => setShowAddMovieModal(true)}
//             className="mb-3 d-flex px-4 py-2 fw-bold mx-auto"
//           >
//             Add Movie
//           </Button>
//         </>
//       ) : (
//         // For Users and Unauthenticated Users (Non-Admin View)
//         <>
//           <UserView moviesData={movies || []} />
//         </>
//       )}

//       {/* Modal for AddMovie component */}
//       <Modal show={showAddMovieModal} onHide={() => setShowAddMovieModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Add New Movie</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <AddMovie closeModal={() => setShowAddMovieModal(false)} addMovie={addNewMovie} />
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// }

// import { useState, useEffect, useContext, useCallback } from 'react';
// import { Container, Button, Modal } from 'react-bootstrap';
// import { AuthContext } from '../context/AuthContext';
// import { MovieList } from '../components/MovieCard';
// import AdminView from '../components/AdminView';
// import UserView from '../components/UserView';
// import AddMovie from '../components/AddMovie';

// export default function Movies() {
//   const { user, setUser } = useContext(AuthContext);
//   const [movies, setMovies] = useState([]); 
//   const [showAddMovieModal, setShowAddMovieModal] = useState(false); // State to control modal visibility

//   // Fetch user data
//   const fetchUserData = useCallback(() => {
//     const token = localStorage.getItem('token');
//     if (!token) return; // No need to fetch user data if no token

//     fetch('https://movieapp-api-lms1.onrender.com/users/details', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.user) {
//           setUser(data.user); // Update context with user data
//         } else {
//           console.error('User data not found:', data);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   }, [setUser]);

//   // Fetch movie data
//   const fetchData = useCallback(() => {
//     const token = localStorage.getItem('token');
//     const fetchUrl = 'https://movieapp-api-lms1.onrender.com/movies/getMovies';

//     fetch(fetchUrl, {
//       headers: {
//         Authorization: token ? `Bearer ${token}` : '', // Only send token if available
//       },
//     })
//       .then(res => res.json())
//       .then(data => {
//         // Check if the response contains movies array
//         if (data && Array.isArray(data.movies)) {
//           setMovies(data.movies); // Extract movies array and update state
//         } else {
//           console.error('Unexpected response format:', data);
//           setMovies([]); // Set empty array if the response is not as expected
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching movies:', error);
//         setMovies([]); // Set empty array in case of error
//       });
//   }, []);

//   useEffect(() => {
//     fetchUserData();
//   }, [fetchUserData]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   // Function to add a new movie to the list without refetching
//   const addNewMovie = (newMovie) => {
//     setMovies((prevMovies) => [newMovie, ...prevMovies]); // Add new movie at the start of the array
//   };

//   // Function to handle the modal open and close
//   const handleCloseModal = () => setShowAddMovieModal(false);
//   const handleShowModal = () => setShowAddMovieModal(true);

//   return (
//     <Container className="mb-5">

//       {/* Displaying list of movies */}
//       <MovieList movies={movies} />

//       {/* Restrict Add Movie button to admins */}
//       {user?.isAdmin && (
//         <Button
//           variant="primary"
//           onClick={handleShowModal}
//           className="mb-1 mx-auto d-flex px-4 py-2 bg-danger border-0 fw-bold text-center"
//         >
//           Add Movie
//         </Button>
//       )}

//       {/* Modal for AddMovie component */}
//       <Modal
//         show={showAddMovieModal}
//         onHide={handleCloseModal}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Add New Movie</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {/* Pass addNewMovie to AddMovie component */}
//           <AddMovie closeModal={handleCloseModal} addMovie={addNewMovie} />
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// }

import { useState, useEffect, useContext, useCallback } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { MovieList } from '../components/MovieCard';
import AdminView from '../components/AdminView';
import UserView from '../components/UserView';
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

  if (loading) return <div>Loading...</div>;

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
