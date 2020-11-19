import React, { useState } from "react";
import WeatherCard from "./WeatherCard/WeatherCard";
import classes from "./WeatherCards.module.css";
import { motion, AnimateSharedLayout } from "framer-motion";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
      
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const days = [
  { day: "day2", value: 1 },
  { day: "day3", value: 2 },
  { day: "day4", value: 3 },
];

const WeatherCards = (props) => {
  const [expandedDay, setCollapsedDay] = useState();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ ease: "easeOut", duration: 1 }}
      variants={container}
      className={classes.WeatherCardsContainer}
    >
      <h1>
        {props.weatherInfo.city ? props.weatherInfo.city + ", " : "City, "}
        {props.weatherInfo.country ? props.weatherInfo.country : "Country"}
      </h1>
      
      <motion.ul className={classes.WeatherCards} variants={item} layout>
        {days.map((forecast) => (
         
            <WeatherCard
              value={forecast.value}
              key={forecast.day}
              day={forecast.day}
              disabled={
                expandedDay !== forecast.day && expandedDay !== undefined
              }
              weatherInfo={props.weatherInfo}
              onExpand={() => setCollapsedDay(forecast.day)}
              onCollapse={() => setCollapsedDay()}
            />
          
        ))}
      </motion.ul>
      
    </motion.div>
  );
};

export default WeatherCards;
