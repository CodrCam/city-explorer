import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class ErrorMessage extends Component {
  render() {
    const { message } = this.props;
    return (
      <Alert variant="danger" className="mt-4">{message}</Alert>
    );
  }
}

export default ErrorMessage;
