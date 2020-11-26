import React, { useState } from "react";
import "./TemperatureUnits.css";

export default function TemperatureUnits(props) {
  let [temperature, setTemperature] = useState(props.temperature);

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round(props.temperature * (9 / 5) + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  return (
    <p className="TemperatureUnits">
      <span className="temperature-display">{Math.round(temperature)}</span>
      <span className="units-display">
        <a href="/" className="active" onClick={showCelsius}>
          {" "}
          °C{" "}
        </a>
        |
        <a href="/" onClick={showFahrenheit}>
          {" "}
          °F{" "}
        </a>
      </span>
    </p>
  );
}
