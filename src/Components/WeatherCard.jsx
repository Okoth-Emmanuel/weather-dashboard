import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";

function WeatherCard({ weather }) {
  return (
    <div className="bg-white/20 backdrop-blur-lg mt-8 p-8 rounded-3xl shadow-2xl w-96 text-center text-white border border-white/30">
      
      <h2 className="text-3xl font-bold mb-2">
        {weather.city}, {weather.country}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
        alt="weather icon"
        className="mx-auto w-28"
      />

      <p className="text-5xl font-extrabold mt-2">
        {Math.round(weather.temperature)}°C
      </p>

      <p className="capitalize text-lg opacity-90 mb-6">
        {weather.description}
      </p>

      <div className="flex justify-between items-center text-sm mt-4">
        
        <div className="flex items-center gap-2">
          <WiHumidity className="text-3xl" />
          <span>{weather.humidity}%</span>
        </div>

        <div className="flex items-center gap-2">
          <FiWind className="text-xl" />
          <span>{weather.windSpeed} m/s</span>
        </div>

      </div>
    </div>
  );
}

export default WeatherCard;