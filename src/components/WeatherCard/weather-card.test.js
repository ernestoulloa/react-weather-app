import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as redux from 'react-redux';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import React from 'react';
import ConnectedHome from '../Home';
import { mockTemperaturesByDay } from '../../constants/constants';
import { initialState } from '../../stores/weathers/weatherReducer';

describe('Renders Forecast data', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore(initialState);
  beforeEach(() => {
    fetch.resetMocks();

    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue({
      isLoading: false,
      temperatures: mockTemperaturesByDay,
    });
  });
  it('tells if it will rain', async () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConnectedHome />
      </Provider>,
    );
    expect(wrapper.find('[testid="tempvalue"]').first().text()).toContain(mockTemperaturesByDay[0].avgTemp);
    const cards = wrapper.find('WeatherCard');
    for (let i = 0; i < cards.length; i += 1) {
      const rainInfo = mockTemperaturesByDay[i].items.find((x) => x.rain);
      if (rainInfo) {
        expect(cards.at(i).find('[testid="rain-data"]')).toBeDefined();
      } else {
        expect(cards.at(i).find('[testid="rain-data"]')).not.toBeDefined();
      }
    }
  });
});
