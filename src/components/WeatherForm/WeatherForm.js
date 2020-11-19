import React from "react";
import classes from "./WeatherForm.module.css";
import {motion} from "framer-motion";

const WeatherForm = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="city" />
      <input type="text" name="country" placeholder="country" />
      <motion.button whileHover={{ scale: 1.1 }}>Search</motion.button>
    </form>
  );
};

export default WeatherForm;
