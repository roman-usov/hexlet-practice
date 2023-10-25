// @ts-check

import calcInPolishNotation from '../solution.js';

test('polish notation', () => {
  expect(calcInPolishNotation([1, 2, '+', 4, '*', 3, '+'])).toBe(15);
  expect(calcInPolishNotation([1, 2, '+', 4, '*', 3, '/'])).toBe(4);
  expect(calcInPolishNotation([7, 2, 3, '*', '-'])).toBe(1);
  expect(calcInPolishNotation([1, 2, '+', 2, '*'])).toBe(6);
  expect(calcInPolishNotation([1, 2, '+', 4, '*', 0, '/'])).toBe(null);
  expect(calcInPolishNotation([3, 0, '/', 2, '+'])).toBe(null);
  expect(calcInPolishNotation([7, 12, 2, '/', '-'])).toBe(1);
  expect(calcInPolishNotation([8, 6, 2, '-', '/'])).toBe(2);
  expect(calcInPolishNotation([5, 2, '-', 0, '+'])).toBe(3);
});
