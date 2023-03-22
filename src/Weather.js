import React, { Component } from 'react';
import axios from 'axios';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecasts: [],
      error: false,
      errorMessage: ''
    };
  }

  componentDidMount() {
    const { city } = this.props;

    const weatherUrl = `${process.env.REACT_APP_SERVER}/weather?city=${city}`;

    axios.get(weatherUrl)
      .then(response => {
        this.setState({
          forecasts: response.data,
          error: false,
          errorMessage: ''
        });
      })
      .catch(error => {
        this.setState({
          error: true,
          errorMessage: error.message
        });
      });
  }

  render() {
    const { forecasts, error, errorMessage } = this.state;

    return (
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>5-day Weather Forecast</Card.Title>
          {error && <p className="text-danger">{errorMessage}</p>}
          <ListGroup>
            {forecasts.map(forecast => (
              <ListGroupItem key={forecast.date}>
                <strong>{forecast.date}</strong>: {forecast.description}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}

export default Weather;

