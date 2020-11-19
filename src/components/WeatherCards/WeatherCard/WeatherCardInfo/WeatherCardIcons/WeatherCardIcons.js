import React from "react";
import clearSky from "../../../../../assets/animated/day.svg";
import scatteredClouds from "../../../../../assets/animated/cloudy-day-1.svg";
import brokenClouds from "../../../../../assets/animated/cloudy-day-2.svg";
import lightRain from "../../../../../assets/animated/rainy-1.svg";
import overcastClouds from "../../../../../assets/animated/cloudy.svg";
import questionMark from "../../../../../assets/static/question.svg";
import classes from "./WeatherCardIcons.module.css";

const WeatherCardIcons = (props) => {
  let icon = null

  switch (props.icon) {
    case "clear sky":
      icon = <img src={clearSky} alt="clear sky" />;
      break;
    case "scattered clouds":
      icon = <img src={scatteredClouds} alt="scattered clouds" />;
      break;
    case "few clouds":
      icon = <img src={scatteredClouds} alt="few clouds" />;
      break;
    case "broken clouds":
      icon = <img src={brokenClouds} alt="broken clouds" />;
      break;
    case "light rain":
      icon = <img src={lightRain} alt="light rain" />;
      break;
    case "overcast clouds":
      icon = <img src={overcastClouds} alt="overcast clouds" />;
      break;
    default:
      icon = (
        null
      );
  }

  
  return icon;
};

export default WeatherCardIcons;
