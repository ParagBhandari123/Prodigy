const apiKey = 'ea760fdd88627e9caab618b7ee1a07ab';

function fetchWeather() {
  const locationInput = document.getElementById('locationInput');
  const location = locationInput.value;

  if (!location) {
    alert('Please enter a location.');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('Error fetching weather data. Please try again.');
    });
}

function displayWeather(data) {
  const weatherInfo = document.getElementById('weather-info');
  weatherInfo.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
  `;
}
