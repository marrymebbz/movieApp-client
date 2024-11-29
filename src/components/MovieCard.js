import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container, Row, Col } from 'react-bootstrap';

export default function MovieCard({ movieProp }) {
  const { name, duration} = movieProp;

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Duration:</Card.Subtitle>
        <Card.Text>{duration}</Card.Text>
      </Card.Body>
    </Card>
  );
}

MovieCard.propTypes = {
  movieProp: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  }).isRequired,
};

export function MovieList({ movies }) {
  return (
    <Container className="mt-5 mb-4">
      {/* Title Section */}
      <div className="text-center mb-0">
        <h2>Our Movies</h2>
      </div>

      {/* Responsive Grid for movies */}
      <Row className="g-4">
        {movies.map((movie) => (
          <Col key={movie._id} xs={12} sm={6} md={4}>
            <MovieCard wmovieProp={movie} />
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
      name: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired
    })
  ).isRequired,
};