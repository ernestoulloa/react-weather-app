import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const AdditionalWeatherInfo = (props) => {
  const {
    humidity, wind, rain, snow,
  } = props;

  const round = (temp) => Math.round(temp);

  return (
    <div>
      <Typography variant="subtitle1" color="textSecondary">
        Humidity:&nbsp;
        {round(humidity)}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Wind:&nbsp;
        {round(wind)}
        km/h
      </Typography>
      {rain || snow ? (
        <Typography testid={rain ? 'rain-data' : 'snow-data'} variant="subtitle1" color="textSecondary">
          {rain ? 'Precipitation' : 'Snow'}
          :&nbsp;
          {rain['3h'] || snow['3h']}
          mm
        </Typography>
      ) : ''}
    </div>
  );
};

AdditionalWeatherInfo.defaultProps = {
  rain: undefined,
  snow: undefined,
};

AdditionalWeatherInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  rain: PropTypes.shape({
    '3h': PropTypes.number.isRequired,
  }),
  snow: PropTypes.shape({
    '3h': PropTypes.number.isRequired,
  }),
};

export default AdditionalWeatherInfo;
