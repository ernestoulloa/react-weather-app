/*!
 * Group items from an array together by some criteria or value.
 * (c) 2019 Tom Bremmer (https://tbremer.com/) and Chris Ferdinandi (https://gomakethings.com), MIT License,
 * @param  {Array}           arr      The array to group items from
 * @param  {String|Function} criteria The criteria to group by
 * @return {Object}                   The grouped object
 */
const groupBy = (arr, criteria) => arr.reduce((obj, item) => {
  // Check if the criteria is a function to run on the item or a property of it
  const key = typeof criteria === 'function' ? criteria(item) : item[criteria];

  // If the key doesn't exist yet, create it
  // eslint-disable-next-line no-prototype-builtins
  if (!obj.hasOwnProperty(key)) {
    // eslint-disable-next-line no-param-reassign
    obj[key] = [];
  }

  // Push the value to the object
  obj[key].push(item);

  // Return the object to the next item in the loop
  return obj;
}, {});

export default groupBy;
