import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "24c105cc229d1df9d01862bf6747beae";
  let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="dayForecast">Thu</div>
          <WeatherIcon className="iconForecast" code="01d" size={60} />
          <div className="temperatureForecast">
            <span className="temperatureForecast-max">19°</span>
            <span className="temperatureForecast-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
