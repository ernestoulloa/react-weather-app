import moment from 'moment';

const unixToStringHour = (unixTimestamp) => {
  const date = moment.unix(unixTimestamp).utc();
  return date.format('HH:mm');
};

export default unixToStringHour;
