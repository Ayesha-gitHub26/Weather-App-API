// script.js

const apiKey = '67419f1f85a498e7357101eed7b14eb0';  // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = `
                    <p><strong>City:</strong> ${data.name}</p>
                    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weatherInfo').innerHTML = weatherInfo;
            } else {
                document.getElementById('weatherInfo').innerHTML = `<p>City not found.</p>`;
            }
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML = `<p>Error fetching data.</p>`;
        });
}