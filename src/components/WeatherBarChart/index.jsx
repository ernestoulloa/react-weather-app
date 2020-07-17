import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import WeatherBarChart from './WeatherBarChart';
import unixToStringHour from '../../helpers/common/timeHelpers';
import { temperaturesBySelectedDaySelector } from '../../stores/weathers/weatherSelectors';

const ConnectedWeatherBarChart = ({ ...props }) => {
  const { day } = props;
  const dataState = useSelector(temperaturesBySelectedDaySelector);
  const temperaturesByDay = dataState.temps[day];
  const data = {
    series: temperaturesByDay.map((item) => [unixToStringHour(item.dt), item.main.temp]),
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (<WeatherBarChart {...data} {...props} />);
};

export { WeatherBarChart };
export default ConnectedWeatherBarChart;

ConnectedWeatherBarChart.propTypes = {
  day: PropTypes.string.isRequired,
};
