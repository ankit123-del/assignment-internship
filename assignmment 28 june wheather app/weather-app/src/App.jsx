import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 const getWeather = async () => {
  if (!city.trim()) {
    setError("Please enter a city name");
    return;
  }

  setLoading(true);
  setError("");
  setWeather(null);

  try {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
    const response = await axios.get(url);
    setWeather(response.data);
  } catch (err) {
    setError("City not found or API error");
  }

  setLoading(false);
};


  return (
    <div className="app">
      <h1>🌤️ Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
