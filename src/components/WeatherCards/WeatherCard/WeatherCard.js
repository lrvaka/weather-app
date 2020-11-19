import React, {useState} from "react";

import CompactWeatherCard from "./CompactWeatherCard/CompactWeatherCard";
import ExpandedWeatherCard from "./ExpandedWeatherCard/ExpandedWeatherCard";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const WeatherCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const collapseDate = () => {
    setIsExpanded(false);
    props.onCollapse();
  };

  const expandDate = () => {
    setIsExpanded(true);
    props.onExpand();
  };

  return (
    <div>
      <AnimateSharedLayout type="crossfade" >
      <AnimatePresence>
        {isExpanded ? (
          <ExpandedWeatherCard
          layoutId={props.day}
            onCollapse={collapseDate}
            weatherInfo={props.weatherInfo}
            value={props.value}
            day={props.day}
          />
        ) : (
          <CompactWeatherCard
            layoutId={props.day}
            onExpand={expandDate}
            disabled={props.disabled}
            weatherInfo={props.weatherInfo}
            value={props.value}
            day={props.day}
          />
        )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
};

export default WeatherCard;
