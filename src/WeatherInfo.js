import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.city}, {props.data.country}
      </h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.iconURL}
              alt="{props.data.icon}"
              className="float-left"
            />
            <span className="temperature">
              {Math.round(props.data.temperature)}
              <span className="unit">°C</span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind Speed: {Math.round(props.data.wind * 36) / 10}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
