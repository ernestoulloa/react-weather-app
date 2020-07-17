import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import * as redux from 'react-redux';
import { Provider } from 'react-redux';
import { initialState } from '../../stores/weathers/weatherReducer';
import ConnectedHome from './index';
import { mockTemperaturesByDay } from '../../constants/constants';

describe('Renders Forecast data', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore(initialState);
  let wrapper;
  beforeEach(() => {
    fetch.resetMocks();

    const spy = jest.spyOn(redux, 'useSelector');
    spy.mockReturnValue({
      isLoading: false,
      temperatures: mockTemperaturesByDay,
    });
    wrapper = mount(
      <Provider store={store}>
        <ConnectedHome />
      </Provider>,
    );
  });

  it('shows the slider with 3 cards', () => {
    expect(wrapper.find('.slider-container').length).toEqual(1);
    expect(wrapper.find('WeatherCard').length).toEqual(3);
  });

  it('shows right arrow and no left arrow', async () => {
    expect(wrapper.find('button[testid="right-arrow"]').length).toEqual(1);
    expect(wrapper.find('button[testid="left-arrow"]').length).toEqual(0);
  });
});
