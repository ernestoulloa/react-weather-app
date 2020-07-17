import moment from 'moment';
import { WeatherIconBaseURL, WeatherIconSuffix } from '../../constants/constants';
import groupBy from './arraysHelpers';

export const getIconUrl = (icon) => WeatherIconBaseURL + icon + WeatherIconSuffix;

export const getListByDays = (temperatures) => {
  if (!temperatures) {
    return [];
  }

  const result = [];

  temperatures.map((x) => {
    // eslint-disable-next-line no-param-reassign
    x.dt_txt = moment(x.dt_txt).format('YYYY-MM-DD');
    return x;
  });
  const groupedByDays = groupBy(temperatures, 'dt_txt');

  Object.entries(groupedByDays).forEach(([key, value]) => {
    let avgTemp = 0;
    let avgHumidity = 0;
    let avgWind = 0;
    for (let i = 0; i < value.length; i += 1) {
      avgTemp += value[i].main.temp;
      avgHumidity += value[i].main.humidity;
      avgWind += value[i].wind.speed;
    }
    avgTemp /= value.length;
    avgHumidity /= value.length;
    avgWind /= value.length;
    result.push({
      avgTemp: Math.round(avgTemp),
      avgHumidity: Math.round(avgHumidity),
      avgWind: Math.round(avgWind),
      date: key,
      items: value,
    });
  });
  return result;
};

export const getListTemperatureGroupByDay = (temps) => {
  if (!temps) {
    return [];
  }
  return groupBy(temps, 'dt_txt');
};

export const getRainInfo4Day = (items) => items.find((x) => x.rain);

export const windTransformation = (wind) => Math.round(wind * 3.6);
