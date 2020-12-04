import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [answer, setAnswer] = useState("Berlin");
  const [noLocation, setNoLocation] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setAnswer(city);
    setNoLocation(null);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  function getCityByLocation(response) {
    console.log(response.data.name);
    setAnswer(response.data.name);
    setNoLocation(null);
  }

  function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let units = "metric";
    let apiKey = "af3fca1cbd91099bf648ee4accb9419f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(getCityByLocation);
  }

  function noPosition() {
    setNoLocation(`Sorry, we can't get your location, please type a city.`);
  }

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(showPosition, noPosition);
  }

  return (
    <div className="Weather row">
      <div className="main-column-1 col-12 col-sm-6">
        <CurrentWeather city={answer} />
        <div className="no-position-found">{noLocation}</div>
        <div>
          <form onSubmit={handleSubmit} className="form">
            <div>
              <div className="input-group">
                <input
                  type="search"
                  placeholder="Type a city..."
                  autoFocus="on"
                  autoComplete="off"
                  onChange={updateCity}
                  className="form-control shadow-sm"
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="btn btn-light shadow-sm btn-outline-secondary"
                  >
                    Search
                  </button>
                  <button
                    type="button"
                    className="btn btn-light shadow-sm btn-outline-secondary"
                    onClick={getCurrentLocation}
                  >
                    Current
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="main-column-2 col-12 col-sm-6">
        <Forecast city={answer} />
      </div>
    </div>
  );
}
