import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import { fetchWeather } from "./services/weatherService";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Juba");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchWeather(cityName);
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather(city);
  }, [city]);

  return (
    <div className="app">
      <SearchBar onSearch={setCity} />

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && !loading && (
        <div className="weather-container">

          <div className="weather-main">
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
              alt="weather icon"
              className="weather-icon"
            />

            <div className="weather-info">
              <h1 className="temperature">
                {Math.round(weather.temperature)}° C
              </h1>
              <h2 className="city-name">{weather.city}</h2>
            </div>
          </div>

          <div className="weather-stats">

            <div className="stat">
              <span className="icon">🌬️</span>
              <div>
                <p className="stat-value">
                  {(weather.windSpeed * 3.6).toFixed(1)} km/h
                </p>
                <p className="stat-label">Wind Speed</p>
              </div>
            </div>

            <div className="stat">
              <span className="icon">💧</span>
              <div>
                <p className="stat-value">{weather.humidity}%</p>
                <p className="stat-label">Humidity</p>
              </div>
            </div>

          </div>

        </div>
      )}
    </div>
  );
}

export default App;