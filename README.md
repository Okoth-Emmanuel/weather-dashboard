🌦 Weather Dashboard App
A responsive weather application built with React.js that allows users to search for any city worldwide and retrieve real-time weather data using a public weather API.
________________________________________
🚀 Live Demo
🔗 Deployed on: Vercel
https://vercel.com/emmanuelokoth7-7620s-projects/weather-dashboardv2
________________________________________
📌 Project Overview
This project was built to demonstrate:
•	API integration in React
•	State management using React Hooks
•	Conditional rendering
•	Responsive UI design
•	Secure API key handling with environment variables
•	Deployment workflow using GitHub and Vercel
Users can search for a city and instantly see:
•	🌡 Temperature
•	🌤 Weather condition
•	💧 Humidity
•	🌬 Wind speed
________________________________________
🛠 Tech Stack
•	React.js – Frontend framework
•	JavaScript (ES6+)
•	CSS – Custom styling
•	OpenWeather API (or your actual API used)
•	Vite – Build tool
•	Vercel – Deployment
________________________________________
📂 Project Structure
weather-dashboard/
│
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│
├── .env
├── package.json
├── README.md
________________________________________
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
2️⃣ Install dependencies
npm install
3️⃣ Create environment file
Create a .env file in the root directory and add:
VITE_WEATHER_API_KEY=your_api_key_here
4️⃣ Run development server
npm run dev
________________________________________
🌍 API Integration
This project fetches real-time weather data using:
•	City-based search queries
•	Asynchronous fetch() requests
•	JSON response parsing
•	Error handling for invalid inputs
Example fetch logic:
const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
);
________________________________________
🧠 Key Features
•	Real-time weather search
•	Clean and responsive UI
•	Error handling for invalid cities
•	Dynamic state updates
•	Secure environment variable usage
•	Production deployment
________________________________________
🚧 Challenges Faced
•	Managing asynchronous API requests
•	Handling dependency conflicts during deployment
•	Structuring reusable React components
•	Fixing ESLint and build errors during Vercel deployment
________________________________________
👨🏽‍💻 Author
Emmanuel Okoth
Frontend Developer | ALX Front End Development Program

