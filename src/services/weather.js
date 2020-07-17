export const url = 'https://api.openweathermap.org/data/2.5/forecast';
function weatherService() {
  async function getAll(query = 'Munich,de', cnt = '40', units = 'imperial') {
    return fetch(`${url}?q=${query}&APPID=${process.env.REACT_APP_OPENWEATHERDATA_API}&cnt=${cnt}&units=${units}`);
  }

  return {
    getAll,
  };
}

export default weatherService;
