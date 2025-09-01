import React from "react";
import "./Weather.css";

export default function Weather(props) {
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
      <h1>{props.defaultCity}</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Condition: Sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://www.gstatic.com/weather/conditions2023/2023.2/svg/mostly_sunny_light.svg"
              alt="Temperature Icon"
              className="float-left"
            />
            <span className="temperature">
              20<span className="unit">°C</span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 50%</li>
            <li>Wind Speed: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
