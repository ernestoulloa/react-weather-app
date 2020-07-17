import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import weather from './weathers/weatherReducer';

export default (history) => combineReducers({
  weather,
  router: connectRouter(history),
});
