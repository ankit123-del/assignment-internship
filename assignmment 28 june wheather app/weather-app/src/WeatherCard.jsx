import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather?.[0]?.icon}@2x.png`;

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather?.[0]?.description} />
      <p>{weather?.[0]?.main}</p>
      <p>Temperature: {main?.temp} °C</p>
      <p>Humidity: {main?.humidity}%</p>
      <p>Wind Speed: {wind?.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
