import React, { useEffect, useState } from "react";
import "./ForecastDisplay.css";

export default function ForecastDisplay(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperatureMin() {
    let temperature = Math.floor(props.data.main.temp_min);

    return `${temperature}°C`;
  }

  function temperatureMax() {
    let temperature = Math.ceil(props.data.main.temp_max);

    return `${temperature}°C`;
  }

  const [backgroundColor, setBackgroundColor] = useState(null);

  let iconImage = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function setColor() {
    setBackgroundColor(backgroundColors[props.data.weather[0].icon]);
  }

  const backgroundColors = {
    "01d": "color-day-clear",
    "02d": "color-day-clear",
    "03d": "color-day-clouds",
    "04d": "color-day-clouds",
    "09d": "color-day-clouds",
    "10d": "color-day-rain",
    "11d": "color-day-rain",
    "13d": "color-day-mist-snow",
    "50d": "color-day-mist-snow",
    "01n": "color-night-clear",
    "02n": "color-night-clear",
    "03n": "color-night-clouds",
    "04n": "color-night-clouds",
    "09n": "color-night-clouds",
    "10n": "color-night-rain",
    "11n": "color-night-rain",
    "13n": "color-night-mist-snow ",
    "50n": "color-night-mist-snow ",
  };

  useEffect(setColor, [props.data.weather[0].icon]);

  return (
    <div
      className={`ForecastDisplay row following-day align-items-center ${backgroundColor}`}
    >
      <div className="col-4">{hours()}</div>
      <div className="col-4">
        <img src={iconImage} alt="weather icon" className="weather-icon" />
      </div>
      <div className="col-4">
        <span className="lowest-temp">{temperatureMin()}</span>
        <br />
        <span className="hightest-temp">
          <strong>{temperatureMax()}</strong>
        </span>
      </div>
    </div>
  );
}
