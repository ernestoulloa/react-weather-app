import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import getAll from '../../stores/weathers/weatherAction';
import Loading from '../Loading';
import TemperatureSelectors from '../TemperatureSelectors';
import WeatherBarChart from '../WeatherBarChart';
import WeatherCardsSlider from '../WeatherCardsSlider';
import CardArrows from '../CardArrows';
import { TemperatureScales } from '../../constants/constants';

const Home = (data) => {
  const dispatch = useDispatch();
  const { temperatures, isLoading } = data;

  const [showGraph, setShowGraph] = useState(false);
  const [day, setDay] = useState('');
  const [metric, setMetric] = useState(TemperatureScales.FAHRENHEIT);

  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 3;
  const [slideIn, setSlideIn] = useState(true);
  const [hasLeftItems, setHasLeftItems] = useState(false);
  const [hasRightItems, setHasRightItems] = useState(true);
  const [slideDirection, setSlideDirection] = useState('down');
  const numSlides = temperatures.length;
  const content = temperatures.slice(pageIndex * pageSize,
    pageIndex * pageSize + pageSize > numSlides ? undefined : pageIndex * pageSize + pageSize);

  const scaleChanged = (scale) => {
    setMetric(scale);
    const units = scale === TemperatureScales.CELSIUS ? 'metric' : 'imperial';
    setShowGraph(false);
    dispatch(getAll('Munich,de', '40', units));
  };

  const handleSliderNavigation = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = pageIndex + increment;

    const oppDirection = direction === 'left' ? 'right' : 'left';
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setHasLeftItems(newIndex > 0);
      setHasRightItems(newIndex + 1
        <= (numSlides % pageSize > 0 ? numSlides / pageSize + 1 : numSlides / pageSize) - 1);
      setPageIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  useEffect(() => {
    // This is so the loading part can be seen
    setTimeout(() => {
      dispatch(getAll());
    }, 1000);
  }, [dispatch]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 39) {
        handleSliderNavigation('right');
      }
      if (e.keyCode === 37) {
        handleSliderNavigation('left');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const getTemperatureByDay = (newDate) => {
    setShowGraph(true);
    setDay(newDate);
  };

  return (
    <Box>
      {isLoading ? (
        <Loading />
      ) : (
        <Paper>
          <Grid container direction="column" justify="center" alignItems="center">
            <div className="temperature-container">
              <TemperatureSelectors scale={metric} onRadioChange={scaleChanged} />
            </div>
            <CardArrows
              showLeft={hasLeftItems}
              showRight={hasRightItems}
              onArrowClick={handleSliderNavigation}
            />
            {temperatures.length > 0 ? (
              <Slide in={slideIn} direction={slideDirection}>
                <div id="results-slider" className="slider-container">
                  <WeatherCardsSlider
                    scale={metric}
                    content={content}
                    onGraphDetail={getTemperatureByDay}
                  />
                </div>
              </Slide>
            ) : null}
            { showGraph && <WeatherBarChart day={day} scale={metric} /> }
          </Grid>
        </Paper>
      )}
    </Box>
  );
};

export default Home;
