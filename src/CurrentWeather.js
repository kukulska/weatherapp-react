import React, { useState } from "react";
import axios from "axios";

import TemperatureUnits from "./TemperatureUnits";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  let [currentCity, setCurrentCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  let iconImage = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  function checkWeather(response) {
    setCurrentCity(response.data.name);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  if (props.city === "Tokyo") {
    let apiKey = `af3fca1cbd91099bf648ee4accb9419f`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=${units}&appid=${apiKey}`;

    axios.get(apiUrl).then(checkWeather);

    return (
      <div className="col-12 col-sm-6 CurrentWeather">
        <h1>{currentCity}</h1>
        <div>
          <p className="main-date" id="current-date">
            Wednesday, Nov 25
          </p>
          <span>Last updated: 09:31</span>
          <span className="main-time"></span>
        </div>
        <img src={iconImage} alt="weathnper icon" className="weather-icon" />

        <TemperatureUnits temperature={temperature} />

        <p className="main-weather-summary">{description}</p>
        <div>
          <span className="main-weather-description">
            Wind: {Math.round(3.6 * wind)}km/h
          </span>
          <span></span>
        </div>
        <div>
          <span className="main-weather-description">
            Humidity: {humidity}%
          </span>
          <span></span>
        </div>
        <div className="no-position-found"></div>
      </div>
    );
  } else {
    let apiKey = `af3fca1cbd91099bf648ee4accb9419f`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${units}&appid=${apiKey}`;

    axios.get(apiUrl).then(checkWeather);

    return (
      <div className="col-12 col-sm-6 CurrentWeather">
        <h1>{currentCity}</h1>
        <div>
          <p className="main-date" id="current-date">
            Wednesday, Nov 25
          </p>
          <span>Last updated: 09:31</span>
          <span className="main-time"></span>
        </div>
        <img src={iconImage} alt="weathnper icon" className="weather-icon" />

        <TemperatureUnits temperature={temperature} />

        <p className="main-weather-summary">{description}</p>
        <div>
          <span className="main-weather-description">
            Wind: {Math.round(3.6 * wind)}km/h
          </span>
          <span></span>
        </div>
        <div>
          <span className="main-weather-description">
            Humidity: {humidity}%
          </span>
          <span></span>
        </div>
        <div className="no-position-found"></div>
      </div>
    );
  }
}
