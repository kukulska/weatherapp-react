import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="col-12 col-sm-6 Forecast">
      <div className="row following-day align-items-center">
        <div className="col-4">
          <span>13:00</span>
        </div>
        <div className="col-4">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" />
        </div>
        <div className="col-4">
          <span className="lowest-temp">12°C</span>
          <br />
          <span className="highest-temp">18°C</span>
        </div>
      </div>
      <div className="row following-day align-items-center">
        <div className="col-4">
          <span>13:00</span>
        </div>
        <div className="col-4">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" />
        </div>
        <div className="col-4">
          <span className="lowest-temp">12°C</span>
          <br />
          <span className="highest-temp">18°C</span>
        </div>
      </div>
      <div className="row following-day align-items-center">
        <div className="col-4">
          <span>13:00</span>
        </div>
        <div className="col-4">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" />
        </div>
        <div className="col-4">
          <span className="lowest-temp">12°C</span>
          <br />
          <span className="highest-temp">18°C</span>
        </div>
      </div>
      <div className="row following-day align-items-center">
        <div className="col-4">
          <span>13:00</span>
        </div>
        <div className="col-4">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" />
        </div>
        <div className="col-4">
          <span className="lowest-temp">12°C</span>
          <br />
          <span className="highest-temp">18°C</span>
        </div>
      </div>
      <div className="row following-day align-items-center">
        <div className="col-4">
          <span>13:00</span>
        </div>
        <div className="col-4">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" />
        </div>
        <div className="col-4">
          <span className="lowest-temp">12°C</span>
          <br />
          <span className="highest-temp">18°C</span>
        </div>
      </div>
    </div>
  );
}
