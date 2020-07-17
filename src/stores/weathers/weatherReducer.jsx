import ACTION_TYPES from './weatherActionTypes';

export const initialState = {
  isLoading: true,
  errors: null,
  cod: '',
  message: 0,
  cnt: 0,
  list: '',
  city: '',
};

function weatherReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.WEATHERS_GET_ALL_REQUEST: {
      return {
        ...state,
        errors: false,
        isLoading: true,
      };
    }

    case ACTION_TYPES.WEATHERS_GET_ALL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errors: false,
        cod: action.payload.cod,
        message: action.payload.message,
        cnt: action.payload.cnt,
        list: action.payload.list,
        city: action.payload.city,
      };
    }

    case ACTION_TYPES.WEATHERS_GET_ALL_FAILURE: {
      return {
        ...state,
        errors: true,
        isLoading: false,
      };
    }

    default:
      return state;
  }
}

export default weatherReducer;
