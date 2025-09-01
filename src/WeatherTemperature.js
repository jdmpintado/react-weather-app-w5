import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">
          {Math.round(props.celsius)}
          <span className="unit">
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              ºF
            </a>
          </span>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">
          {Math.round(fahrenheit())}
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            |ºF
          </span>
        </span>
      </span>
    );
  }
}
