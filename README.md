# Cities Location

**Author**: Cameron Griffin
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

This app allows a user to enter a city name into a form, and then displays information about the city, including its latitude and longitude and a static map of the area. The app uses the LocationIQ API to retrieve the latitude and longitude information, and then uses that information to generate the map. The app is built using React and the React Bootstrap library for styling.

## Getting Started

1. Enter a city name in the search field and click the "Explore!" button.
2. The app will display the city name, latitude, and longitude, along with a map of the city.

## Architecture
The City Explorer application is a web application designed to allow users to search for and explore cities around the world. The application is built using React.js, a popular front-end JavaScript library for building user interfaces.

The application architecture is based on the Model-View-Controller (MVC) design pattern, where the model manages the data, the view renders the UI, and the controller manages the interaction between the model and the view.

The application is divided into three main components:

App.js: This is the main component of the application and serves as the controller. It is responsible for managing the state of the application and for passing data between the other components. It includes the form component, the data component, and the error message component. It also makes use of the Axios library to handle HTTP requests to the LocationIQ API.
CityForm.js: This is a child component of App.js and serves as the view for the form. It includes an input field where users can enter a city name, and a submit button to trigger the API request.
CityData.js: This is a child component of App.js and serves as the view for the city data. It includes a map image showing the location of the city, as well as the latitude and longitude coordinates of the city.
The application uses several libraries and technologies, including React.js, Axios for making HTTP requests, React Bootstrap for styling the UI, and the LocationIQ API for retrieving location data.

## Change Log

03-20-2023 7:07pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations

- TA help with getting api key from movieDB

Name of feature: Created data and app JS to pull from an API and print a map and cordinates.

Estimate of time needed to complete: 2 hours

Start time: 1:30 pm

Finish time: 7 pm

Actual time needed to complete: 5.5hrs

## Lab 7

Name of feature: Weather Details

Estimate of time needed to complete: 4 hours

Start time: 6 pm

Finish time: 11:50pm

Actual time needed to complete: DNF

![MovieDataBaseImage](/src/img/WeatherDB.png)

## Lab 8

Name of feature: Add Movie DB

Estimate of time needed to complete: 5

Start time: 1 pm

Finish time: 10:30

Actual time needed to complete: 27 hrs

### Diagram

![MovieDataBaseImage](/src/img/MovieDB.png)
