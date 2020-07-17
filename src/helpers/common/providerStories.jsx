import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PropTypes } from 'prop-types';

import history from '../history';
import configureStore from '../../stores/rootStore';

const store = configureStore(history);

const Provider = ({ story }) => (
  <ReduxProvider store={store}>
    {story}
  </ReduxProvider>
);

Provider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  story: PropTypes.any.isRequired,
};

export default Provider;
