import React from "react";
import classes from "./App.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

//`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&appid=5672e526c1cbc8d71aed230e5e151426`
import WeatherCards from "./components/WeatherCards/WeatherCards";
import WeatherForm from "./components/WeatherForm/WeatherForm";

function App() {
  const [weather, setWeather] = useState([]);

  function fetchData(e) {
    e.preventDefault();
    const CURRENT_DATES = {
      //Used to compare between current date and date received from API JSON object
      day1: "",
      day2: "",
      day3: "",
      day4: "",
      day5: "",
    };
    const currentDateHandler = () => {
      let i = 0; // needed to manipulate and iterate the getDate function
      let days = Object.keys(CURRENT_DATES); // = [ day1, day2, day3, day4, day5]
      days.forEach((e) => {
        let tempDay = new Date();
        tempDay.setDate(tempDay.getDate() + i);
        let finalDay = tempDay.toISOString();
        CURRENT_DATES[e] = finalDay;
        i++;
      });
      console.log(CURRENT_DATES);
    };
    const WEATHER_INFORMATION = {
      day1: {
        high: [],
        low: [],
        description: [],
      },
      day2: {
        high: [],
        low: [],
        description: [],
      },
      day3: {
        high: [],
        low: [],
        description: [],
      },
      day4: {
        high: [],
        low: [],
        description: [],
      },
      day5: {
        high: [],
        low: [],
        description: [],
      },
    };
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&appid=5672e526c1cbc8d71aed230e5e151426`
    )
      .then((response) => {
        currentDateHandler();
        if (response == null) {
          throw new Error(
            `Expected status 200 ok got status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((forecast) => {
        if (forecast == null) {
          return null;
        }
          
        const list = forecast.list || [];
        const city = forecast.city.name;
        const country = forecast.city.country;
        console.log(forecast);
        console.log(list);
        let days = Object.keys(WEATHER_INFORMATION);
        const finalListHandler = () => {
          list.filter((item) => {
            // filter out null objects
            if (!item) {
              return false;
            }
            return days.forEach((e) => {
              if (
                item.dt_txt.substring(0, 10) ===
                CURRENT_DATES[e].substring(0, 10)
              ) {
                WEATHER_INFORMATION[e]["high"].push(item.main.temp_max);
                WEATHER_INFORMATION[e]["low"].push(item.main.temp_min);
                if (item.dt_txt.substring(11, 20) === "12:00:00") {
                  WEATHER_INFORMATION[e]["description"].push(
                    item.weather[0].description
                  );
                  console.log(item.weather[0].description);
                }
              }
            });
          });
          return WEATHER_INFORMATION;
        };
        const FINAL_LIST = finalListHandler();
        setWeather({
          ...FINAL_LIST,
          city: city,
          country: country,
        });
      }).catch(error => {
        console.error('Error:', error);
      });;
  }

  return (
    <React.Fragment>
      <div className={classes.AppContainer}>
        <h3>3-Day Forecast</h3>
        <WeatherForm getWeather={fetchData} />
          <WeatherCards weatherInfo={weather} />
        {console.log(weather)}
      </div>
    </React.Fragment>
  );
}

export default App;
