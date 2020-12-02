import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [answer, setAnswer] = useState("Berlin");

  function handleSubmit(event) {
    event.preventDefault();
    setAnswer(city);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="row">
      <div className="col-12 col-sm-6">
        <CurrentWeather city={answer} />
        <div className="Weather">
          <form onSubmit={handleSubmit}>
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
                  >
                    Current
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Forecast />
    </div>
  );
}
