// @ts-check

import sumIntervals from '../solution.js';

test('testing solution', () => {
  expect(sumIntervals([[5, 5]])).toEqual(0);
  expect(sumIntervals([[7, 7], [6, 6]])).toEqual(0);

  expect(sumIntervals([[3, 10]])).toEqual(7);

  expect(sumIntervals([[-100, 0]])).toEqual(100);

  expect(sumIntervals([
    [-4, 4],
    [1, 3],
  ])).toEqual(8);

  expect(sumIntervals([
    [1, 2],
    [11, 12],
  ])).toEqual(2);

  expect(sumIntervals([
    [2, 7],
    [6, 6],
  ])).toEqual(5);

  expect(sumIntervals([
    [1, 5],
    [1, 10],
  ])).toEqual(9);

  expect(sumIntervals([
    [1, 9],
    [7, 12],
    [3, 4],
  ])).toEqual(11);

  expect(sumIntervals([
    [7, 10],
    [-1, 4],
    [2, 5],
  ])).toEqual(9);

  expect(sumIntervals([
    [1, 5],
    [-30, 19],
    [1, 7],
    [16, 19],
    [5, 100],
  ])).toEqual(130);
});
