import React from "react";
import classes from "./ExpandedWeatherCard.module.css";
import WeatherCardInfo from "../WeatherCardInfo/WeatherCardInfo";
import { motion } from "framer-motion";

const ExpandedWeatherCard = (props) => {
  return (
    <motion.div
      onClick={props.onCollapse}
      layoutId={props.layoutId}
      style={{ opacity: props.disabled  ? 0.2 : 1}}
      className={classes.ExpandedWeatherCard}
    >
      Apples
    </motion.div>
  );
};

export default ExpandedWeatherCard;
