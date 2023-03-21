import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class CityData extends Component {
  render() {
    const { city, latitude, longitude, mapUrl } = this.props;

    return (
      <Card className="mt-4">
        <Card.Img variant="top" src={mapUrl} />
        <Card.Body>
          <Card.Title>{city}</Card.Title>
          <Card.Text>
            <strong>Latitude:</strong> {latitude}<br />
            <strong>Longitude:</strong> {longitude}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default CityData;
