import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { TemperatureScales } from '../../constants/constants';

const Temperature = (props) => {
  const { temperature } = props;
  const { tempScale } = props;

  const roundTemp = (temp) => Math.round(temp);

  return (
    <Typography testid="tempvalue" variant="h1" color="textPrimary">
      {roundTemp(temperature)}
      °
      {tempScale === TemperatureScales.CELSIUS ? 'C' : 'F'}
    </Typography>
  );
};

export default Temperature;

Temperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  tempScale: PropTypes.string,
};

Temperature.defaultProps = {
  tempScale: 'C',
};
