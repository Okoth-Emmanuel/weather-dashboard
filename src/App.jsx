import { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import WeatherCard from "./Components/WeatherCard";
import ErrorMessage from "./Components/ErrorMessage";
import { fetchWeather } from "./services/weatherService";

function App() {
  const [city, setCity] = useState("Juba");
  const [weather, setWeather] = useState(null);
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

    const interval = setInterval(() => {
      getWeather(city);
    }, 300000); // refresh every 5 minutes

    return () => clearInterval(interval);
  }, [city]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-indigo-600 to-purple-700 flex flex-col items-center justify-center p-4">
      <SearchBar onSearch={setCity} />

      {loading && <p className="text-white mt-4">Loading...</p>}

      {error && <ErrorMessage message={error} />}

      {weather && !loading && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;