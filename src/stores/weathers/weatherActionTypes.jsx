const apiActionTypes = [
  'GET_ALL',
];
const prefix = 'WEATHERS';

const actionTypes = {};
apiActionTypes.forEach((item) => {
  actionTypes[`${prefix}_${item}_REQUEST`] = `${prefix}_${item}_REQUEST`;
  actionTypes[`${prefix}_${item}_SUCCESS`] = `${prefix}_${item}_SUCCESS`;
  actionTypes[`${prefix}_${item}_FAILURE`] = `${prefix}_${item}_FAILURE`;
});

export default {
  ...actionTypes,
};
