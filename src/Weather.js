import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({});
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      feels: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      iconweather: response.data.weather[0].icon,
    });

    setReady(true);
  }

  function search() {
    let apiKey = "24c105cc229d1df9d01862bf6747beae";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                onChange={handleCityChange}
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
        <h5>
          <FormatDate date={weatherData.date} />{" "}
        </h5>
        <WeatherIcon code={weatherData.iconweather} />
        <h1>
          <WeatherUnit celsius={weatherData.temperature} />
        </h1>
        <h4 className="text-capitalize">{weatherData.description}</h4>
        <hr />
        <div className="row information">
          <div className="col-4">
            <div>
              <strong className="data-name">WIND</strong>
              <div className="data">{weatherData.wind} km/h</div>
            </div>
          </div>
          <div className="col-4">
            <div>
              <strong className="data-name">HUMIDITY</strong>
              <div className="data">{weatherData.humidity}%</div>
            </div>
          </div>
          <div className="col-4">
            <div>
              <strong className="data-name">FEELS LIKE</strong>
              <div className="data">{Math.round(weatherData.feels)}°C</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Wait a moment please...";
  }
}
