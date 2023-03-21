import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import CityData from './CityData';
import ErrorMessage from './ErrorMessage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      latitude: '',
      longitude: '',
      error: false,
      errorMessage: ''
    };
  }

  handleCityChange = (event) => {
    this.setState({
      city: event.target.value
    });
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;

      let response = await axios.get(url);

      this.setState({
        city: this.state.city,
        latitude: response.data[0].lat,
        longitude: response.data[0].lon,
        error: false,
        errorMessage: ''
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      });
    }
  }

  render() {
    const { city, latitude, longitude, error, errorMessage } = this.state;

    const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${latitude},${longitude}&zoom=12`;

    return (
      <div className="App">
        <Container>
          <h1 className="text-center mt-4">City Explorer</h1>

          <Row className="justify-content-center mt-4">
            <Col md={8}>
              <Form onSubmit={this.handleFormSubmit}>
                <Form.Group controlId="formCity">
                  <Form.Label>Enter a city name</Form.Label>
                  <Form.Control type="text" placeholder="City name" value={this.state.city} onChange={this.handleCityChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Explore!</Button>
              </Form>
              {error && <ErrorMessage message={errorMessage} />}
              {latitude && longitude && (
                <CityData
                  city={city}
                  latitude={latitude}
                  longitude={longitude}
                  mapUrl={mapUrl}
                />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
