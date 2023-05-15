//function formatDate(date) {
//  let hours = date.getHours();
//  if (hours < 10) {
//    hours = `0${hours}`;
//  }
//  let minutes = date.getMinutes();
//  if (minutes < 10) {
//    minutes = `0${minutes}`;
//  }
//  let dayIndex = date.getDay();
//  let days = [
//    "Sunday",
//    "Monday",
//    "Tuesday",
//    "Wednesday",
//    "Thursday",
//   "Friday",
//    "Saturday",
//  ];
//  let day = days[dayIndex];

//  return `${day} ${hours}:${minutes}`;
//}

function displayWeatherCondition(response) {
  console.log(response.data);

  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "e2ca49f28ba267a0a3202ae6eebab6dd";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayWeatherCondition);

//function searchCity(city) {
//  let apiKey = "e2ca49f28ba267a0a3202ae6eebab6dd";
//  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//  axios.get(apiUrl).then(displayWeatherCondition);
//}

//function handleSubmit(event) {
//  event.preventDefault();
//  let city = document.querySelector("#city-input").value;
//  searchCity(city);
//}

//function searchLocation(position) {
//  let apiKey = "e2ca49f28ba267a0a3202ae6eebab6dd";
//  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
//  axios.get(apiUrl).then(displayWeatherCondition);
//}

//function getCurrentLocation(event) {
//  event.preventDefault();
//  navigator.geolocation.getCurrentPosition(searchLocation);
//}

//let dateElement = document.querySelector("#date");
//let currentTime = new Date();
//let searchForm = document.querySelector("#search-form");

//searchForm.addEventListener("submit", handleSubmit);

//dateElement.innerHTML = formatDate(currentTime);

//let currentLocationButton = document.querySelector("#current-location-button");
//currentLocationButton.addEventListener("click", getCurrentLocation);

//searchCity("Kyiv");
