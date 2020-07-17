import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import weatherReducer, { initialState } from './weatherReducer';
import ACTION_TYPES from './weatherActionTypes';
import getAll from './weatherAction';
import API from '../../services';
import { mockResponse } from '../../constants/constants';

describe('ACTION_TYPES.WEATHERS_GET_ALL_REQUEST', () => {
  it('should return the initial state', () => {
    expect(weatherReducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle ACTION_TYPES.WEATHERS_GET_ALL_REQUEST', () => {
    expect(
      weatherReducer(initialState,
        {
          type: 'ACTION_TYPES.WEATHERS_GET_ALL_REQUEST',
        }),
    ).toMatchSnapshot();
  });
});

describe('Get Forecast data', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  const fetchForecastData = async () => API.weathers.getAll().then((res) => res.json());

  it('Fetches the forecast data', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockResponse));
    const response = await fetchForecastData();
    expect(response.list).toBeDefined();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('dispatches proper actions', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore(initialState);
    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    return store.dispatch(getAll()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(ACTION_TYPES.WEATHERS_GET_ALL_REQUEST);
      expect(actions[1].type).toEqual(ACTION_TYPES.WEATHERS_GET_ALL_SUCCESS);
    });
  });
});
