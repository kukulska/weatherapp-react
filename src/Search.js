import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState(null);
  let [answer, setAnswer] = useState("Tokyo");

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
        <div className="Search">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="input-group">
                <input
                  type="search"
                  placeholder="Type a city..."
                  autofocus="on"
                  autocomplete="off"
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
