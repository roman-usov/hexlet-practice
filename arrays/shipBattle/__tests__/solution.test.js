// @ts-check

import { calcShipsCount, isValidField } from '../solution.js';

test('is valid field', () => {
  const battleField1 = [];
  const battleField2 = [
    [0, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 0, 0, 0],
    [0, 1, 1, 1],
  ];
  const battleField3 = [
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 1],
  ];
  const battleField4 = [
    [1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 0],
  ];

  const battleField5 = [
    [1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 1],
    [0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0],
  ];

  const battleField6 = [
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
  ];

  expect(isValidField(battleField1)).toBe(true);
  expect(isValidField(battleField2)).toBe(false);
  expect(isValidField(battleField3)).toBe(true);
  expect(isValidField(battleField4)).toBe(true);
  expect(isValidField(battleField5)).toBe(false);
  expect(isValidField(battleField6)).toBe(true);
});

test('ships count', () => {
  const battleField1 = [];
  const battleField2 = [[1]];
  const battleField3 = [[0]];
  const battleField4 = [
    [0, 0, 1],
    [0, 0, 0],
    [1, 1, 0],
  ];
  const battleField5 = [
    [1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 0],
  ];

  const battleField6 = [
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
  ];

  expect(calcShipsCount(battleField1)).toBe(0);
  expect(calcShipsCount(battleField2)).toBe(1);
  expect(calcShipsCount(battleField3)).toBe(0);
  expect(calcShipsCount(battleField4)).toBe(2);
  expect(calcShipsCount(battleField5)).toBe(6);
  expect(calcShipsCount(battleField6)).toBe(5);
});
