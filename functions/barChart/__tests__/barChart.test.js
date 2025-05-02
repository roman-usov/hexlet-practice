// @ts-check
/* eslint-disable no-console, jest/valid-title */

import { jest } from '@jest/globals';
import fakerator from 'fakerator';
import _ from 'lodash';
import barChart from '../solution.js';

const getSequense = (seed, min, max) => {
  fakerator().seed(seed);
  const sequenceLength = seed;
  const getRandomNumber = () => fakerator().random.number(min, max);
  const sequence = _.times(sequenceLength, getRandomNumber);

  return sequence;
};

test.each([
  [5, -5, 5],
  [10, -6, 9],
  [20, 2, 8],
  [30, -10, 0],
  [40, -7, 7],
  [50, -8, 12],
  [60, -5, 10],
])('test barchart with bars count %s', (seed, min, max) => {
  console.log = jest.fn();
  const sequence = getSequense(seed, min, max);
  barChart(sequence);
  const actual = console.log.mock.calls.join('\n');
  expect(actual).toMatchSnapshot();
});
