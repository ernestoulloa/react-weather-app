import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import moment from 'moment';
import Temperature from '../Temperature';
import AdditionalWeatherInfo from '../AdditionalWeatherInfo';
import { getIconUrl, getRainInfo4Day, windTransformation } from '../../helpers/common/weatherHelpers';
import { TemperatureScales } from '../../constants/constants';
import './weather-card.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    cursor: 'pointer',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  body: {
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'column',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const WeatherCard = (props) => {
  const classes = useStyles();
  const {
    weatherInfo, tempScale, active, day,
  } = props;
  const [raised, setRaised] = React.useState(false);
  const weatherDaySubtitle = moment(weatherInfo.date).format('DD MMM YYYY');
  const weatherDay = moment(weatherInfo.date).format('YYYY-MM-DD');
  const toggleRaised = () => setRaised(!raised);

  return (
    <Card
      className={classes.root}
      raised={raised || (active && day === weatherDay)}
      onMouseOver={() => toggleRaised()}
      onFocus={() => toggleRaised()}
      onMouseOut={() => toggleRaised()}
      onBlur={() => toggleRaised()}
    >
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe" className={classes.avatar} src={getIconUrl(weatherInfo.items.length > 0 ? weatherInfo.items[0].weather[0].icon : undefined)} />
        )}
        title={weatherInfo.items.length > 0 ? weatherInfo.items[0].weather[0].description : ''}
        subheader={weatherDaySubtitle}
      />
      <CardContent className={classes.body}>
        <Temperature temperature={weatherInfo.avgTemp} tempScale={tempScale} />
        <AdditionalWeatherInfo
          humidity={weatherInfo.avgHumidity}
          wind={windTransformation(weatherInfo.avgWind)}
          rain={weatherInfo.items.length > 0 && getRainInfo4Day(weatherInfo.items)
            ? getRainInfo4Day(weatherInfo.items).rain : undefined}
          snow={weatherInfo.items.length > 0 ? weatherInfo.items[0].snow : undefined}
        />
      </CardContent>
      {
        active && day === weatherDay && (
          <CardActions className={classes.actions}>
            <Button disableElevation size="medium" disableFocusRipple color="secondary">
              <AssessmentIcon color="primary" fontSize="large" />
            </Button>
          </CardActions>
        )
      }
    </Card>
  );
};

WeatherCard.propTypes = {
  weatherInfo: PropTypes.shape({
    avgHumidity: PropTypes.number,
    avgTemp: PropTypes.number,
    avgWind: PropTypes.number,
    date: PropTypes.string,
    items: PropTypes.instanceOf(Array),
  }).isRequired,
  tempScale: PropTypes.string,
  day: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

WeatherCard.defaultProps = {
  tempScale: TemperatureScales.CELSIUS,
};

export default WeatherCard;
