import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieSuggestions(props) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://city-explorer-api-server.onrender.com/movies', { params: { city: props.city } });



        setMovies(response.data.results);
        setError(false);
        setErrorMessage('');
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      }
    };

    if (props.city) {
      fetchMovies();
    }
  }, [props.city]);

  return (
    <div className="mt-4">
      <h2>Movie Suggestions</h2>
      {error && <p>{errorMessage}</p>}
      <Row className="mt-4">
        {movies.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              {movie.poster_path ? (
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              ) : (
                <div className="no-image">No Image Available</div>
              )}
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MovieSuggestions;
