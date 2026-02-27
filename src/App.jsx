import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import WeatherCard from "./Components/WeatherCard";
import { fetchWeather } from "./services/weatherService";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  // Handle Enter key press to fetch weather
  const handleSearch = async (e) => {
    if (e.key === "Enter" && city.trim() !== "") {
      try {
        setError("");
        const data = await fetchWeather(city);
        setWeatherData(data);
      } catch (err) {
        setWeatherData(null);
        setError(err.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-blue-800 flex flex-col items-center justify-center p-6">
      
      {/* Search Bar */}
      <SearchBar city={city} setCity={setCity} onKeyDown={handleSearch} />

      {/* Error Message */}
      {error && (
        <div className="text-red-400 mt-4 font-semibold">{error}</div>
      )}

      {/* Weather Card */}
      {weatherData && <WeatherCard data={weatherData} />}

    </div>
  );
}

export default App;