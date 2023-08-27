# 06 Server-Side APIs: Weather Dashboard

## Description

This project is week six challenge of the NW full-stack coding bootcamp. We are required to use a third-party APIs to access their data and functionality by making requests with specific parameters to a URL. This particular challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

This project uses the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities.

`localStorage` is also used to store any persistent data. For more information on how to work with the OpenWeather API.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./Assets/06-server-side-apis-homework-demo.png)

## Usage

- When first open the web page, you are shown with weather dashboard.
- If there is localstroage data, the weather dashboard will show all previous searched cities with a button for each city and the weather forecast(current weather and 5 day forecast) for the latest searched city.
- If this is the first time you load this page and there is no localstorage data, then there will be no previous searched cities button available and the weather forecast secion will be empty.
- In the input field, you can enter the city name you want to check the weather for.
- Once you hit search button or hit enter, the current weather and 5 day forecast for that particular city will be displayed on the display section. A button will be created in the searched city section with the name of the city you just searched. The city name will be stored in the localstorage.
- When you click on the searched city button with the name of a particular city, the current weather and 5 day forecast for that city will be displayed

## Github Repo Link

The link for the github repository for this project is:
https://github.com/ChgDave/Weather-Dashboard

## URL Deployment Link

The link for the deployed website for this project is:
https://chgdave.github.io/Weather-Dashboard/

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
