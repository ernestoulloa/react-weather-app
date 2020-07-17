import Axios from 'axios';
import Weather from './weather';
import BaseApi from './baseApi';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const axios = Axios.create(config);

// Add token if exist
axios.interceptors.request.use((configRequest) => configRequest, (err) => Promise.reject(err));

const api = BaseApi(axios);

export default {
  axios,
  weathers: Weather(api),
};
