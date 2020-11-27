import React, { useEffect, useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  let [temperature, setTemperature] = useState(props.temperature);

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round(props.temperature * (9 / 5) + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  useEffect(() => {
    setTemperature(props.temperature);
  }, [props.temperature]);

  return (
    <p className="Temperature">
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
