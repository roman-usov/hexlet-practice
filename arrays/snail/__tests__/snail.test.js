// @ts-check

import buildSnailPath from '../snail.js';

describe('snail tests', () => {
  test('first', () => {
    const matrix1 = [
      [1, 2],
      [3, 4],
    ];
    const expected1 = [1, 2, 4, 3];
    expect(buildSnailPath(matrix1)).toEqual(expected1);
  });

  test('second', () => {
    const matrix2 = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];
    const expected2 = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
    expect(buildSnailPath(matrix2)).toEqual(expected2);
  });

  test('third', () => {
    const matrix3 = [
      [undefined, '', null],
      [true, false, 'foo'],
      [[], {}, { key: 'bar' }],
    ];
    const expected3 = [
      undefined,
      '',
      null,
      'foo',
      { key: 'bar' },
      {},
      [],
      true,
      false,
    ];
    expect(buildSnailPath(matrix3)).toEqual(expected3);
  });

  test('fourth', () => {
    const matrix4 = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const expected4 = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    expect(buildSnailPath(matrix4)).toEqual(expected4);
  });

  test('fifth', () => {
    const matrix5 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ];
    const expected5 = [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8];
    expect(buildSnailPath(matrix5)).toEqual(expected5);
  });

  test('border cases', () => {
    expect(buildSnailPath([])).toEqual([]);

    expect(buildSnailPath([[]])).toEqual([]);

    expect(buildSnailPath([[0]])).toEqual([0]);

    expect(buildSnailPath([[1, 2, 3, 4]])).toEqual([1, 2, 3, 4]);

    expect(buildSnailPath([[1], [2], [3], [4]])).toEqual([1, 2, 3, 4]);
  });
});
