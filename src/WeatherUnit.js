import React, { useState } from "react";

export default function WeatherUnit(props) {
  let [unit, setUnit] = useState("celsius");

  function convertFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farenheit() {
    return (props * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <strong>
        {Math.round(weatherData.temperature)}°C |{" "}
        <a href="/" onClick={convertFarenheit}>
          °F
        </a>{" "}
      </strong>
    );
  } else {
    return (
      <strong>
        {Math.round(farenheit())}
        <a href="/" onClick={convertCelsius}>
          °C
        </a>{" "}
        °F
      </strong>
    );
  }
}
