import React from "react";
import WeatherCardIcons from "./WeatherCardIcons/WeatherCardIcons";

import { motion } from "framer-motion";
import classes from "./WeatherCardInfo.module.css";
// initial="hidden" animate="visible" variants={variants}

const WeatherCardInfo = (props) => {
  
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const disabled = props.disabled
  return (
    <motion.div
      layoutId="title"
      style={{ opacity: disabled ? 0.2 : 1}}
      transition={{ ease: "easeOut", duration: 0.5}}
      
    >
    {console.log(props.disabled)}
      {props.children}
    </motion.div>
  );
};

export default WeatherCardInfo;
