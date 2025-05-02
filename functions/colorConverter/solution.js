// @ts-check

import chunk from 'lodash/chunk.js';

// BEGIN (write your solution here)
const rgbToHex = (...rgbValues) => rgbValues.reduce(
  (hex, value) => hex + value.toString(16).padStart(2, '0'),
  '#',
);

const hexToRgb = (hexColor) => {
  const hexGradients = chunk(hexColor.slice(1).split(''), 2).map((values) => parseInt(values.join(''), 16));

  const [r, g, b] = hexGradients;

  return { r, g, b };
};

export { rgbToHex, hexToRgb };
// END
