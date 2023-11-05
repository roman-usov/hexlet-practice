// @ts-check

import getLongestLength from '../solution.js';

test('longest length', () => {
  expect(getLongestLength('jabjcdel')).toBe(7);
  expect(getLongestLength('abcddef')).toBe(4);
  expect(getLongestLength('abbccddeffg')).toBe(3);
  expect(getLongestLength('abcd')).toBe(4);
  expect(getLongestLength('1234561qweqwer')).toBe(9);
  expect(getLongestLength('1234561qweqwerqer')).toBe(9);
  expect(getLongestLength('')).toBe(0);
  expect(getLongestLength('jabjcdeljrshmgdhj')).toBe(10);
});
