// @ts-check

import snail from '../snail.js';

describe('Chunk', () => {
  it('should works', () => {
    const result1 = snail(['a', 'b', 'c', 'd'], 2);
    expect(result1).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);

    const result2 = snail(['a', 'b', 'c', 'd'], 3);
    expect(result2).toEqual([['a', 'b', 'c'], ['d']]);

    const result3 = snail([], 4);
    expect(result3).toEqual([]);

    const result4 = snail(['a'], 2);
    expect(result4).toEqual([['a']]);

    const result5 = snail(['a', 'b', 'c', 'd', 'e', 'f'], 2);
    expect(result5).toEqual([
      ['a', 'b'],
      ['c', 'd'],
      ['e', 'f'],
    ]);
  });
});
