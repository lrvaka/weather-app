import React from "react";
import WeatherCardIcons from '../../WeatherCardInfo/WeatherCardIcons/WeatherCardIcons'
import WeatherCardInfo from '../../WeatherCardInfo/WeatherCardInfo';
import classes from './CompactWeatherCardInfo.module.css';


const CompactWeatherCardInfo = (props) => {
  const maxHandler = () => {
    let max;
    let maxList = [];
    for (let i = 0; i < props.weatherInfo[props.days]?.high.length; i++) {
      maxList.push(props.weatherInfo[props.days]?.high[i]);
      max = Math.max(...maxList);
    }
    return max;
  };

  const minHandler = () => {
    let min;
    let minList = [];
    for (let i = 0; i < props.weatherInfo[props.days]?.low.length; i++) {
      minList.push(props.weatherInfo[props.days]?.low[i]);
      min = Math.min(...minList);
    }
    return min;
  };

  const currentDateHandler = () => {
    console.log(props.value);
    let tempDay = new Date();
    tempDay.setDate(tempDay.getDate() + props.value);
    let month = tempDay.getUTCMonth() + 1;
    let day = tempDay.getUTCDate();
    let finalDate = month + "/" + day;
    return finalDate;
  };

  let finalMax = maxHandler();
  let finalMin = minHandler();
  let finalDate = currentDateHandler();
  return (
    <WeatherCardInfo disabled={props.disabled} >
      <h1>{finalDate}</h1>
      <WeatherCardIcons icon={props.weatherInfo[props.days]?.description[0]} />
      <div className={classes.Description}>
        <p>{props.weatherInfo[props.days]?.description[0]}</p>
      </div>
      <div className={classes.TempInfo}>
        <h4>
          <strong>Hi: </strong>

          {finalMax ? finalMax + "°F" : null}
        </h4>
        <h4>
          <strong>Lo: </strong>

          {finalMin ? finalMin + "°F" : null}
        </h4>
      </div>
    </WeatherCardInfo>
  );
};

export default CompactWeatherCardInfo;
