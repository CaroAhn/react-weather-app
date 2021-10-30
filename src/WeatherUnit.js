import React, { useState } from "react";

import "./WeatherUnit.css";

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
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <strong>
        {Math.round(props.celsius)}°C |{" "}
        <a href="/" rel="noreferrer" onClick={convertFarenheit}>
          °F
        </a>{" "}
      </strong>
    );
  } else {
    return (
      <strong>
        {Math.round(farenheit())}{" "}
        <a href="/" rel="noreferrer" onClick={convertCelsius}>
          °C
        </a>{" "}
        | °F
      </strong>
    );
  }
}
