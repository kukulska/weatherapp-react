import React from "react";
import Search from "./Search";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="col-12 col-sm-6 CurrentWeather">
      <h1 id="current-city">Lisbon</h1>
      <p className="main-date" id="current-date">
        Wednesday, Nov 25
      </p>
      <div>
        <span>Last updated: 09:31</span>
        <span className="main-time" id="current-time"></span>
      </div>
      <img src="" alt="" className="weather-icon" id="weather-icon" />
      <p>
        <span className="temperature-display" id="displayed-temperature">
          12
        </span>
        <span className="units-display">
          <a href="#" id="temperature-celsius" className="active">
            °C
          </a>{" "}
          |
          <a href="#" id="temperature-farenheit">
            °F
          </a>
        </span>
      </p>
      <p className="main-weather-summary" id="current-weather">
        Sunny
      </p>
      <div>
        <span className="main-weather-description">Wind: 10km/h</span>
        <span id="wind-speed"></span>
      </div>
      <div>
        <span className="main-weather-description">Humidity:100%</span>
        <span id="humidity"></span>
      </div>
      <div className="no-position-found" id="no-position-found"></div>
      <Search />
    </div>
  );
}
