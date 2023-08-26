"strict mode";

const btn = document.querySelector("#searchBtn");
const fetchedData = document.querySelector("#fiveDayForecast");
const locationInput = document.querySelector("#location");
const form = document.querySelector("#searchForm");
const dispCurrent = document.querySelector("#currentForecast");
const dispFiveDay = document.querySelector("#fiveDayForecast");

function display(data) {
  const headerDisp = document.createElement("h2");
  const headerImg = document.createElement("img");
  const tempDisp = document.createElement("p");
  const windDisp = document.createElement("p");
  const humidityDisp = document.createElement("p");

  headerDisp.textContent = `${data.city.name} (${dayjs().format(
    "MM/DD/YYYY"
  )})`;
  headerImg.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
  tempDisp.textContent = `Temp: ${data.list[0].main.temp}`;
  windDisp.textContent = `Wind: ${data.list[0].wind.speed}`;
  humidityDisp.textContent = `Humidity: ${data.list[0].main.humidity}`;

  headerDisp.classList.add("disp");
  tempDisp.classList.add("disp");
  windDisp.classList.add("disp");
  humidityDisp.classList.add("disp");
  headerImg.classList.add("icon");
  dispCurrent.append(headerDisp, tempDisp, windDisp, humidityDisp);
  headerDisp.append(headerImg);
}

function getData(e) {
  e.preventDefault();
  //construct the URL for geocoding
  const urlGeo = `https://api.openweathermap.org/geo/1.0/direct?q=${locationInput.value}&appid=7903dacd04b26691274b62eff226d9c4`;

  fetch(urlGeo)
    .then(function (response) {
      return response.json();
    })
    .then(function (geoData) {
      console.log(geoData);
      // construct the URL for the 5 day 3 hour forecast
      const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=7903dacd04b26691274b62eff226d9c4&units=imperial`;

      console.log(urlForecast);
      // fetch 5 day 3 hour forecast
      fetch(urlForecast)
        .then(function (response) {
          return response.json();
        })
        .then(function (weatherData) {
          console.log(weatherData);
          display(weatherData);
        });
    });
}

form.addEventListener("submit", getData);
