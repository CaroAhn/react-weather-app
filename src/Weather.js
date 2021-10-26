import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [weatherData, setWeatherData] = useState({});
  let [ready, setReady] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
    });
    setReady(true);
  }

  if (ready) {
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
          <strong>{weatherData.city}</strong>
        </h2>
        <h5>October, Monday 25 | 17:00</h5>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="cloudy"
        />
        <h1>
          <strong>{Math.round(weatherData.temperature)}°C</strong>
        </h1>
        <h4 className="text-capitalize">{weatherData.description}</h4>
        <hr />
        <div className="row information">
          <div className="col-4">
            <p>
              <strong className="data-name">WIND</strong>
              <p className="data">{weatherData.wind} km/h</p>
            </p>
          </div>
          <div className="col-4">
            <p>
              <strong className="data-name">HUMIDITY</strong>
              <p className="data">{weatherData.humidity}%</p>
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
  } else {
    let apiKey = "b3d07099f6c92c0d246342a33fe4b913";
    let city = "Atlanta";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Wait a moment please...";
  }
}
