import React from "react";
import "./Weather.css";
import search_icon from "./../assets/search.png";
import clear_icon from "./../assets/clear.png";
import rain_icon from "./../assets/rain.png";
import snow_icon from "./../assets/snow.png";
import cloud_icon from "./../assets/cloud.png";
import wind_icon from "./../assets/wind.png";
import humidity_icon from "./../assets/humidity.png";
import drizzle_icon from "./../assets/drizzle.png";

const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img src={search_icon} alt="" />
      </div>
      <img src={clear_icon} alt="" className="weather-icon" />
      <div className="location-data">
        <p className="temperature">25°C</p>
        <p className="location">New York</p>
      </div>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div>
            <p>75%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
          <div>
            <p>1.8 Km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
