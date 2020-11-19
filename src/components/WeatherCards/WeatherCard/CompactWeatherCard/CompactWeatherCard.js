import React from "react";
import classes from "./CompactWeatherCard.module.css";
import WeatherCardInfo from '../WeatherCardInfo/WeatherCardInfo';
import CompactWeatherCardInfo from './CompactWeatherCardInfo/CompactWeatherCardInfo';
import {motion} from "framer-motion";

const CompactWeatherCard = (props) => {
  return(
  <motion.div
    onClick={props.disabled ? undefined : props.onExpand}
    layoutId={props.layoutId}
    whileHover={{ scale: 1.1 }}
    style={{ opacity: props.disabled  ? 0.2 : 1, opacity: props.disabled  ? 0.2 : 1, opacity: props.disabled  ? 0.2 : 1}}
    whileTap={{ scale: 1.1 }}
    className={classes.CompactWeatherCard}
  >
    <CompactWeatherCardInfo
      weatherInfo={props.weatherInfo}
      days={props.day}
      value={props.value}
      disabled={props.disabled}
    />
  </motion.div>
  )
};

export default CompactWeatherCard;
