import React from 'react';

class ErrorMessage extends React.Component {
  render() {
    const { message } = this.props;

    return (
      <p>{message}</p>
    );
  }
}

export default ErrorMessage;
