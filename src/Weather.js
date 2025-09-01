import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.temperature.current,
      city: response.data.city,
      country: response.data.country,
      description: response.data.condition.description,
      iconURL: response.data.condition.icon_url,
      icon: response.data.condition.icon,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      ready: true,
    });
  }

  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter city..."
                className="form-control"
                required
                autoFocus="on"
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
        <WeatherInfo data={WeatherData} />
      </div>
    );
  } else {
    let apiKey = "c450930fa53b90f8c5ab74d6t08ao678";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
