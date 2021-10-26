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
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h2 className="city-name">
        <strong>Atlanta</strong>
      </h2>
      <h5>October, Monday 25 | 17:00</h5>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        alt="cloudy"
      />
      <h1>
        <strong>23°C</strong>
      </h1>
      <h4>Cloudy</h4>
      <hr />
      <div className="row information">
        <div className="col-4">
          <p>
            <strong className="data-name">WIND</strong>
            <p className="data">18 km/h</p>
          </p>
        </div>
        <div className="col-4">
          <p>
            <strong className="data-name">HUMIDITY</strong>
            <p className="data">70%</p>
          </p>
        </div>
        <div className="col-4">
          <p>
            <strong className="data-name">PRECIPITATION</strong>
            <p className="data">15%</p>
          </p>
        </div>
      </div>
    </div>
  );
}
