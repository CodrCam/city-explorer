import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CityData from './CityData';
import ErrorMessage from './ErrorMessage';
import WeatherData from './WeatherData';
import MovieSuggestions from './MovieSuggestions';


function App() {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${city}&format=json`;

      let response = await axios.get(url);

      setCity(city);
      setLatitude(response.data[0].lat);
      setLongitude(response.data[0].lon);
      setError(false);
      setErrorMessage('');
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
    }
  };

  const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${latitude},${longitude}&zoom=14}`;

  return (
    <div className="App">
      <Container>
        <h1 className="text-center mt-4">City Explorer</h1>

        <Row className="justify-content-center mt-4">
          <Col md={8}>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="formCity">
                <Form.Label>Enter a city name</Form.Label>
                <Form.Control type="text" placeholder="City name" value={city} onChange={handleCityChange} />
              </Form.Group>
              <Button variant="primary" type="submit">Explore!</Button>
            </Form>
            {error && <ErrorMessage message={errorMessage} />}
            {latitude && longitude && (
              <div>
                <CityData city={city} latitude={latitude} longitude={longitude} mapUrl={mapUrl} />
                <WeatherData latitude={latitude} longitude={longitude} />
                <MovieSuggestions city={city} />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
