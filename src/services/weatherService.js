const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    return {
      name: data.name,
      temp: Math.round(data.main.temp),
      humidity: data.main.humidity,
      wind: data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };
  } catch (error) {
    throw error;
  }
}