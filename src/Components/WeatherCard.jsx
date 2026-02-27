export default function WeatherCard({ data }) {
  return (
    <div className="bg-blue-700 text-white rounded-2xl p-6 w-full max-w-xl flex flex-col items-center">
      
      {/* Icon + Temperature */}
      <div className="flex items-center gap-4 mb-4">
        <img src={data.icon} alt="weather icon" className="w-20 h-20" />
        <div className="text-5xl font-bold">{data.temp}°C</div>
      </div>

      {/* City Name */}
      <div className="text-xl font-medium mb-6">{data.name}</div>

      {/* Details */}
      <div className="flex justify-around w-full">
        <div className="flex flex-col items-center">
          <img src="/wind-icon.svg" alt="wind icon" className="w-6 h-6 mb-1" />
          <span className="text-sm">{data.wind} km/h</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/humidity-icon.svg" alt="humidity icon" className="w-6 h-6 mb-1" />
          <span className="text-sm">{data.humidity}%</span>
        </div>
      </div>

    </div>
  );
}