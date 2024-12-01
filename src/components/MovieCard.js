import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container, Row, Col } from 'react-bootstrap';

export default function MovieCard({ movieProp }) {
  const { title, director, year, description, genre } = movieProp;

  return (
    <Card className="h-100">
      <Card.Body className="border border-primary">
        <Card.Title className="text-primary">{title}</Card.Title>
        <Card.Text className="mb-0"><strong>Director:</strong> {director}</Card.Text>
        <Card.Text className="mb-0"><strong>Year:</strong> {year}</Card.Text>
        <Card.Text className="mb-0"><strong>Description:</strong> {description}</Card.Text>
        <Card.Text className="mb-0"><strong>Genre:</strong> {genre}</Card.Text>
      </Card.Body>
    </Card>
  );
}

MovieCard.propTypes = {
  movieProp: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export function MovieList({ movies }) {
  return (
    <Container className="mt-5 mb-4">
      <div className="text-center mb-0">
        <h2>Our Movies</h2>
      </div>
      <Row className="g-4">
        {movies.map((movie) => (
          <Col key={movie._id} xs={12} sm={6} md={4}>
            <MovieCard movieProp={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })
  ).isRequired,
};
