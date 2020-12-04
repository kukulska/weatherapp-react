import React, { useEffect, useState } from "react";
import axios from "axios";

import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({});

  let iconImage = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;

  function checkWeather(response) {
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
    });
  }

  function handleSearch() {
    let apiKey = `af3fca1cbd91099bf648ee4accb9419f`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(checkWeather);
  }

  useEffect(handleSearch, [props.city]);

  return (
    <div className="col-12 col-sm-6 CurrentWeather">
      <h1>{weatherData.city}</h1>
      <FormattedDate date={weatherData.date} />
      <img src={iconImage} alt="weather icon" className="weather-icon" />

      <Temperature temperature={weatherData.temperature} />

      <p className="main-weather-summary">{weatherData.description}</p>
      <div>
        <span className="main-weather-description">
          Wind: {Math.round(3.6 * weatherData.wind)}km/h
        </span>
        <span></span>
      </div>
      <div>
        <span className="main-weather-description">
          Humidity: {weatherData.humidity}%
        </span>
        <span></span>
      </div>
      <div className="no-position-found"></div>
    </div>
  );
}
