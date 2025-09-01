import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.city}, {props.data.country}
      </h1>
      <p>
        <FormattedDate date={props.data.date} />
      </p>
      <div className="row mt-2">
        <div className="col-6">
            <img src={props.data.iconURL} alt="{props.data.icon}" className="float-left" />
            <WeatherTemperature celsius={props.data.temperature} className="float-left" />
      <p>
        <FormattedDate date={props.data.date} />
      </p>
      <div className="row mt-2">
        <div className="col-7">
          <img
            src={props.data.iconURL}
            alt="{props.data.icon}"
            className="float-left"
          />
          <WeatherTemperature
            celsius={props.data.temperature}
          />
        </div>
        <div className="col-5">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              Humidity:
              {props.data.humidity}%
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              Humidity:
              {props.data.humidity}%
            </li>
            <li>Wind Speed: {Math.round(props.data.wind * 36) / 10}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
