import _ from "lodash";

const arr = [1, 2, 3];

export const prepare = (options = {}) => {
  const h1 = document.querySelector("h1").innerHTML;
  const result = _.reverse(arr);

  // return will do nothing, useful only for testing
  return {
    h1,
    result
  };
};

export const run = (options = {}) => {
  const result = _.map(arr, i => i * 2).join("-");

  return {
    options,
    result
  };
};
