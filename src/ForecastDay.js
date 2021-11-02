import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tur", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="forecastDay">
      <div className="dayForecast">{day()}</div>
      <WeatherIcon
        className="iconForecast"
        code={props.data.weather[0].icon}
        size={55}
      />
      <div className="temperatureForecast">
        <span className="temperatureForecast-max">{maxTemp()}</span>
        <span className="temperatureForecast-min">{minTemp()}</span>
      </div>
    </div>
  );
}
