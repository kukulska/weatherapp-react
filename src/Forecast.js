import React, { useEffect, useState } from "react";
import axios from "axios";
import ForecastDisplay from "./ForecastDisplay";

import "./Forecast.css";

export default function Forecast(props) {
  const [forecast, setForecast] = useState(null);

  function checkForecast(response) {
    setForecast(response.data);
  }

  function handleSearch() {
    let apiKey = `af3fca1cbd91099bf648ee4accb9419f`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(checkForecast);
  }

  useEffect(handleSearch, [props.city]);

  if (forecast === null) {
    return null;
  } else {
    return (
      <div className="Forecast row">
        <ForecastDisplay data={forecast.list[0]} />
      </div>
    );
  }
}
