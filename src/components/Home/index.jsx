import React from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';

import { temperaturesSelector } from '../../stores/weathers/weatherSelectors';

const ConnectedHome = ({ ...props }) => {
  const data = useSelector(temperaturesSelector);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (<Home {...data} {...props} />);
};

export { Home };
export default ConnectedHome;
