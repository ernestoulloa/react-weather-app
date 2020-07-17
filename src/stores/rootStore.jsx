import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import monitorReducersEnhancer from '../helpers/enhancers/monitorReducers';
import loggerMiddleware from '../helpers/middleware/logger';
import rootReducers from './rootReducers';
import history from '../helpers/history/index';

const configureStore = (preloadedState) => {
  const middlewares = [thunkMiddleware, loggerMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(
    rootReducers(history),
    preloadedState,
    composedEnhancers,
  );

  return store;
};

export default configureStore;
