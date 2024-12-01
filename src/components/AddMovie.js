import { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Notyf } from 'notyf';

export default function AddMovie({ closeModal, addMovie }) {
  const notyf = new Notyf();
  const { user } = useContext(AuthContext);

  // Input states
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");

  // Async function to create the movie
  async function createMovie(e) {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      notyf.error("You need to be logged in to add a movie.");
      return;
    }

    const movieData = { title, director, year, description, genre };

    try {
      const response = await fetch('https://movieapp-api-lms1.onrender.com/movies/addMovie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(movieData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error: ${response.status} - ${errorText}`);
        notyf.error(`Failed to add movie: ${errorText}`);
        return;
      }

      const newMovie = await response.json(); // Parse the response for the newly added movie

      addMovie(newMovie); // Update the movie list dynamically
      setTitle("");
      setDirector("");
      setYear("");
      setDescription("");
      setGenre("");
      notyf.success("Movie added successfully.");
      closeModal();
    } catch (error) {
      console.error('Error:', error);
      notyf.error("Something went wrong. Please try again.");
    }
  }

  return user ? (
    <Form onSubmit={createMovie}>
      <Form.Group className="mb-3">
        <Form.Label className="fw-semibold">Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="fw-semibold">Director</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Director"
          required
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="fw-semibold">Year</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Year"
          required
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="fw-semibold">Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="fw-semibold">Genre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Genre"
          required
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3 w-100">
        Submit
      </Button>
    </Form>
  ) : (
    <Navigate to="/movies" />
  );
}
