import React, { Component } from 'react';
import axios from 'axios';
import CityInput from './CityInput';
import ErrorMessage from './ErrorMessage';
import CityData from './CityData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      error: false,
      errorMessage: ''
    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  getCityData = async (event) => {
    event.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`
      let cityDataFromAxios = await axios.get(url);

      this.setState({
        cityData: cityDataFromAxios.data[0],
        error: false
      });

    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  render() {
    const { cityData, error, errorMessage } = this.state;

    return (
      <>
        <h1>API CALLS</h1>

        <CityInput handleCityInput={this.handleCityInput} getCityData={this.getCityData} />

        {
          error
            ? <ErrorMessage message={errorMessage} />
            : <CityData data={cityData} />
        }
      </>
    );
  }
}

export default App;
