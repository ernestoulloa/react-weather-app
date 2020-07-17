import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import PropTypes from 'prop-types';
import { TemperatureScales } from '../../constants/constants';

const TemperatureSelectors = (props) => {
  const { scale } = props;

  const handleRadioChange = (event) => {
    props.onRadioChange(event.target.value);
  };

  return (
    <RadioGroup aria-label="temperature" name="temperature" value={scale} onChange={handleRadioChange} row>
      <FormControlLabel value={TemperatureScales.CELSIUS} control={<Radio color="primary" />} label="Celsius" />
      <FormControlLabel value={TemperatureScales.FAHRENHEIT} control={<Radio color="primary" />} label="Fahrenheit" />
    </RadioGroup>
  );
};

export default TemperatureSelectors;

TemperatureSelectors.propTypes = {
  scale: PropTypes.string.isRequired,
  onRadioChange: PropTypes.func.isRequired,
};
