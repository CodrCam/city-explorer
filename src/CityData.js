import React from 'react';

class CityData extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <p>{data.display_name}</p>
    );
  }
}

export default CityData;
