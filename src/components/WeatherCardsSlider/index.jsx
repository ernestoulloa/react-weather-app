import React from 'react';
import './weather-card-slider.css';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import WeatherCard from '../WeatherCard';

const WeatherCardsSlider = ({ scale, content, onGraphDetail }) => {
  const [activeCard, setActiveCard] = React.useState(false);
  const [activeCardDay, setActiveCardDay] = React.useState('');

  const handleGraphDetail = (day, active) => {
    onGraphDetail(day);
    setActiveCardDay(day);
    setActiveCard(false);
    setActiveCard(active);
  };

  const listItems = content.map((elem) => (
    <Grid
      key={elem.date.toString()}
      item
      onClick={() => handleGraphDetail(elem.date, true)}
    >
      <WeatherCard tempScale={scale} weatherInfo={elem} active={activeCard} day={activeCardDay} />
    </Grid>
  ));
  return (
    <Grid container spacing={3}>
      {listItems}
    </Grid>
  );
};

WeatherCardsSlider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.instanceOf(Array).isRequired,
  onGraphDetail: PropTypes.func.isRequired,
  scale: PropTypes.string.isRequired,
};

export default WeatherCardsSlider;
