import React from 'react';
import { render } from 'react-dom';
import './styles/base.css';
import { Provider } from 'react-redux';

import App from './components/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './stores/rootStore';

const persistedState = {};

const store = configureStore(persistedState);

const targetRoot = document.querySelector('#root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  targetRoot,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
