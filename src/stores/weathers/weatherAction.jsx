import API from '../../services';
import ACTION_TYPES from './weatherActionTypes';

const getAll = (query = 'Munich,de', cnt = '40', units = 'imperial') => async (dispatch) => {
  dispatch({ type: ACTION_TYPES.WEATHERS_GET_ALL_REQUEST });

  try {
    const data = await API.weathers.getAll(query, cnt, units).then((res) => res.json());

    dispatch({
      type: ACTION_TYPES.WEATHERS_GET_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: ACTION_TYPES.WEATHERS_GET_ALL_FAILURE });
  }
};

export default getAll;
