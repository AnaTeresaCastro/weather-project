function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  function showTemperature(response) {
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = response.data.city;

    let number = document.querySelector("#number");
    let temperature = Math.round(response.data.temperature.current);
    number.innerHTML = temperature;
  }
  let apiKey = "41f9b9t0ec755bae06caf1o002842139";
  let city = searchInputElement.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function formatDate(date) {
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let formatDay = days[day];
  return `${formatDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDate = new Date();
let currentDateElement = document.querySelector(".time");
currentDateElement.innerHTML = formatDate(currentDate);
