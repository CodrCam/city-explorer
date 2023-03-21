import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class CityData extends Component {
  render() {
    const { city, latitude, longitude } = this.props;

    const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${latitude},${longitude}&zoom=13`;

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
