import React, { useEffect, useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [temperature, setTemperature] = useState(props.temperature);
  const [celsiusActive, setCelsiusActive] = useState("");
  const [fahrenheitActive, setFahrenheitActive] = useState("active");

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round(props.temperature * (9 / 5) + 32));
    setCelsiusActive("active");
    setFahrenheitActive("");
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
    setFahrenheitActive("active");
    setCelsiusActive("");
  }

  useEffect(() => {
    setTemperature(props.temperature);
  }, [props.temperature]);

  return (
    <p className="Temperature">
      <span className="temperature-display">{Math.round(temperature)}</span>
      <span className="units-display">
        <a href="/" className={celsiusActive} onClick={showCelsius}>
          {" "}
          °C{" "}
        </a>
        |
        <a href="/" className={fahrenheitActive} onClick={showFahrenheit}>
          {" "}
          °F{" "}
        </a>
      </span>
    </p>
  );
}
