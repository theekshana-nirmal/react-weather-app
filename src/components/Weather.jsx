import React, { useState } from "react";
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
  const [weatherData, setWeatherData] = useState(false);
  const [city, setCity] = useState("");

  const getCityName = (e) => {
    setCity(e.target.value);
  };

  const allIcons = {
    "01d": clear_icon,
    "02d": cloud_icon,
    "03d": cloud_icon,
    "04d": cloud_icon,
    "09d": drizzle_icon,
    "10d": rain_icon,
    "11d": wind_icon,
    "13d": snow_icon,
    "50d": drizzle_icon,
    "01n": clear_icon,
    "02n": cloud_icon,
    "03n": cloud_icon,
    "04n": cloud_icon,
    "09n": drizzle_icon,
    "10n": rain_icon,
    "11n": wind_icon,
    "13n": snow_icon,
    "50n": drizzle_icon,
  };
  const getWeatherData = async (city_name) => {
    try {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`;

      const response = await fetch(URL);
      const data = await response.json();


      console.log(data)
      // Save Data to variables
      setWeatherData({
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        icon: allIcons[data.weather[0].icon],
      });
    } catch (error) {}
  };
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" onChange={getCityName} />
        <img src={search_icon} alt="" onClick={() => getWeatherData(city)} />
      </div>
      <img
        src={weatherData ? weatherData.icon : clear_icon}
        alt=""
        className="weather-icon"
      />
      <div className="location-data">
        <p className="temperature">
          {weatherData ? Math.round(weatherData.temperature) + "°C" : "0°C"}
        </p>
        <p className="location">
          {weatherData ? weatherData.city : "City Name"}
        </p>
      </div>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div>
            <p>{weatherData ? weatherData.humidity + "%" : "0%"}</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
          <div>
            <p>
              {weatherData
                ? Math.round(weatherData.wind * 10) / 10 + " Km/h"
                : "0.0 Km/h"}
            </p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
