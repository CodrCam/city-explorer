import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class CityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
  }

  handleCityChange = (event) => {
    this.setState({
      city: event.target.value
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit();
  }
  
  

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formCity">
          <Form.Label>Enter a city name</Form.Label>
          <Form.Control type="text" placeholder="City name" value={this.state.city} onChange={this.handleCityChange} />
        </Form.Group>
        <Button variant="primary" type="submit">Explore!</Button>
      </Form>
    );
  }
}

export default CityForm;
