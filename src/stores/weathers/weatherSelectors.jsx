import { createSelector } from 'reselect';
import { getListByDays, getListTemperatureGroupByDay } from '../../helpers/common/weatherHelpers';

const weatherSelector = (state) => state.weather;

export const temperaturesSelector = createSelector(
  [weatherSelector],
  (temperatures) => ({
    isLoading: temperatures.isLoading,
    temperatures: getListByDays(temperatures.list),
  }),
);

export const temperaturesBySelectedDaySelector = createSelector(
  [weatherSelector],
  (temps) => ({
    temps: getListTemperatureGroupByDay(temps.list),
  }),
);
