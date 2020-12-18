import React, { useState } from "react";
import { fetchWeather } from "./api/FetchWeather";
import "./App.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(city);

      setWeather(data);
      setCity("");
    }
  };

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          placeholder="Search ..."
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={search}
          className="search-bar"
        />
        <LocationOnIcon fontSize="large" />
      </div>
      {weather.main && (
        <div className="city">
          <div className="city-name">
            <span>{weather.name}</span>
            <sup className="county">{weather.sys.country}</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <span>{weather.weather[0].description}</span>
          </div>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="feels-like">
            <span>Feels like:</span>
            {Math.round(weather.main.feels_like)}
            <sup>&deg;C</sup>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
