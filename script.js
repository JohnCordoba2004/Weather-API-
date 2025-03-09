const date = document.getElementById("date");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const tempImg = document.getElementById("tempImg");
const description = document.getElementById("description");
const feelsLike = document.getElementById("feels_like");
const gnrdLevel = document.getElementById("grnd_level");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const seaLevel = document.getElementById("seaLevel");
const tempMax = document.getElementById("tempMax");
const tempMin = document.getElementById("tempMin");
const lat = document.getElementById("lat");
const lon = document.getElementById("lon");
const deg = document.getElementById("deg");
const speed = document.getElementById("speed");

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month}, ${day}, ${year}`;

const app = document.getElementById("app");

const getWeather = async () => {
  try {
    const cityName = document.getElementById("searchInput").value;
    const weatherFetch = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6fc2305d13da145d4e7e781ef438d1e7&units=metric`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const weatherData = await weatherFetch.json();
    console.log(weatherData);
    city.innerHTML = `${weatherData.name} - ${weatherData.sys.country}`;
    description.innerHTML = `${weatherData.weather[0].description}`;
    tempImg.innerHTML = `<img src ="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" />`;
    temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}°C</h2>`;
    feelsLike.innerHTML = `${weatherData.main.feels_like}°`;
    gnrdLevel.innerHTML = `${weatherData.main.grnd_level}M`;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    pressure.innerHTML = `${weatherData.main.pressure}IN`;
    seaLevel.innerHTML = `${weatherData.main.sea_level}M`;
    tempMax.innerHTML = `${weatherData.main.temp_max}°C`;
    tempMin.innerHTML = `${weatherData.main.temp_min}°C`;
    lat.innerHTML = `${weatherData.coord.lat}°`;
    lon.innerHTML = `${weatherData.coord.lon}M`;
    deg.innerHTML = `${weatherData.wind.deg}°`;
    speed.innerHTML = `${weatherData.wind.speed}KM/H`;
  } catch (error) {
    console.log(error);
  }
};
