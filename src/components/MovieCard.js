<<<<<<< HEAD
// import React from 'react';
// import PropTypes from 'prop-types';
// import { Card, Container, Row, Col } from 'react-bootstrap';

// export default function MovieCard({ movieProp }) {
//   const { title, director, year, description, genre} = movieProp;

//   return (
//     <Card className="h-100">
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>{director}</Card.Text>
//         <Card.Text>{year}</Card.Text>
//         <Card.Text>{description}</Card.Text>
//         <Card.Text>{genre}</Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// MovieCard.propTypes = {
//   movieProp: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     director: PropTypes.string.isRequired,
//     year: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     genre: PropTypes.string.isRequired
//   }).isRequired,
// };

// export function MovieList({ movies }) {
//   return (
//     <Container className="mt-5 mb-4">
//       {/* Title Section */}
//       <div className="text-center mb-0">
//         <h2>Our Movies</h2>
//       </div>

//       {/* Responsive Grid for movies */}
//       <Row className="g-4">
//         {movies.map((movie) => (
//           <Col key={movie._id} xs={12} sm={6} md={4}>
//             <MovieCard movieProp={movie} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       director: PropTypes.string.isRequired,
//       year: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       genre: PropTypes.string.isRequired
//     })
//   ).isRequired,
// };

=======
>>>>>>> 4d3fa02957dab91a0267f09b0d78d42a124ba86d
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container, Row, Col } from 'react-bootstrap';

export default function MovieCard({ movieProp }) {
<<<<<<< HEAD
  const { title, director, year, description, genre } = movieProp;
=======
  const { name, duration} = movieProp;
>>>>>>> 4d3fa02957dab91a0267f09b0d78d42a124ba86d

  return (
    <Card className="h-100">
      <Card.Body>
<<<<<<< HEAD
        <Card.Title>{title}</Card.Title>
        <Card.Text><strong>Director:</strong> {director}</Card.Text>
        <Card.Text><strong>Year:</strong> {year}</Card.Text>
        <Card.Text><strong>Description:</strong> {description}</Card.Text>
        <Card.Text><strong>Genre:</strong> {genre}</Card.Text>
=======
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Duration:</Card.Subtitle>
        <Card.Text>{duration}</Card.Text>
>>>>>>> 4d3fa02957dab91a0267f09b0d78d42a124ba86d
      </Card.Body>
    </Card>
  );
}

MovieCard.propTypes = {
  movieProp: PropTypes.shape({
    _id: PropTypes.string.isRequired,
<<<<<<< HEAD
    title: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
=======
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
>>>>>>> 4d3fa02957dab91a0267f09b0d78d42a124ba86d
  }).isRequired,
};

export function MovieList({ movies }) {
  return (
    <Container className="mt-5 mb-4">
<<<<<<< HEAD
      <div className="text-center mb-0">
        <h2>Our Movies</h2>
      </div>
      <Row className="g-4">
        {movies.map((movie) => (
          <Col key={movie._id} xs={12} sm={6} md={4}>
            <MovieCard movieProp={movie} />
=======
      {/* Title Section */}
      <div className="text-center mb-0">
        <h2>Our Movies</h2>
      </div>

      {/* Responsive Grid for movies */}
      <Row className="g-4">
        {movies.map((movie) => (
          <Col key={movie._id} xs={12} sm={6} md={4}>
            <MovieCard wmovieProp={movie} />
>>>>>>> 4d3fa02957dab91a0267f09b0d78d42a124ba86d
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
<<<<<<< HEAD
      title: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })
  ).isRequired,
};
=======
      name: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired
    })
  ).isRequired,
};
>>>>>>> 4d3fa02957dab91a0267f09b0d78d42a124ba86d
