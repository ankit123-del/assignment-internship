// script.js
const apiKey = "1e68f36a34bdbae96ed28452256fee08";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city !== "") {
    fetchWeather(city);
  }
});

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      showError("City not found!");
    } else {
      displayWeather(data);
    }
  } catch (error) {
    showError("Error fetching weather data!");
  }
}
function fetchForecast(city) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const forecastEl = document.getElementById("forecast");
      forecastEl.innerHTML = ""; // Clear old data

      const dailyData = data.list.filter(item => item.dt_txt.includes("12:00:00"));

      dailyData.forEach(day => {
        const date = new Date(day.dt_txt);
        const icon = day.weather[0].icon;
        const temp = day.main.temp.toFixed(1);

        const forecastHTML = `
          <div class="forecast-item">
            <p>${date.toLocaleDateString(undefined, { weekday: 'short' })}</p>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icon">
            <p>${temp}°C</p>
          </div>
        `;
        forecastEl.innerHTML += forecastHTML;
      });
    })
    .catch(err => console.error("Forecast error:", err));
}

function displayWeather(data) {
  document.getElementById("errorMsg").textContent = "";
  document.getElementById("weatherInfo").classList.remove("hidden");

  document.getElementById("cityName").textContent = data.name;
  document.getElementById("temperature").textContent = data.main.temp;
  document.getElementById("condition").textContent = data.weather[0].main;
  document.getElementById("humidity").textContent = data.main.humidity;
  document.getElementById("windSpeed").textContent = data.wind.speed;
  document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

function showError(message) {
  document.getElementById("errorMsg").textContent = message;
  document.getElementById("weatherInfo").classList.add("hidden");
}
