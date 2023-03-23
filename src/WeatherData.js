import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

function WeatherData({ latitude, longitude }) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('http://localhost:3001/weather', { params: { latitude, longitude } });


        setForecast(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, [latitude, longitude]);

  return (
    <Card className="my-4">
      <Card.Header>Weather Forecast</Card.Header>
      <Card.Body>
        {forecast.length > 0 ? (
          <div>
            <p>Date: {forecast[0].date}</p>
            <p>Description: {forecast[0].description}</p>
          </div>
        ) : (
          <p>Loading weather forecast...</p>
        )}
      </Card.Body>
    </Card>
  );
}

export default WeatherData;
