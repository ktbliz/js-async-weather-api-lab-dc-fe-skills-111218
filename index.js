const API_KEY = "9cf3c910c321f7d61398645708287a77"

function handleFormSubmit(event) {
  //handle submit event
  
  document.querySelector("input[type=text]").addEventListener("keydown", function(e) {console.log(e.which)})
}

function fetchCurrentWeather(city) {
  
  fetch("https://api.openweathermap.org/data/2.5/weather?q=")
  .then(response => response.json())
  .then(json => console.log(json));
  
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
}


function fetchFiveDayForecast(city) {
  fetch("https://api.openweathermap.org/data/2.5/forecast?q=")
  .then(response => response.json())
  .then(json => console.log(json));
 
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector("input[type=submit]").addEventListener("click", function(e) {alert("Hi!")})
})
