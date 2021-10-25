import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h2>Atlanta</h2>
      <h4>Monday 25th - 17:00</h4>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        alt="cloudy"
      />
      <h1>55°C</h1>
      <h5>Cloudy</h5>
      <div className="row">
        <div className="col-4">
          <p>Wind: 18 km/h</p>
        </div>
        <div className="col-4">
          <p>Humidity: 70%</p>
        </div>
        <div className="col-4">
          <p>Precipitacion: 15%</p>
        </div>
      </div>
    </div>
  );
}
