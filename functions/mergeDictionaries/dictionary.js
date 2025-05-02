// @ts-check

// BEGIN (write your solution here)
const merge = (...dictionaries) => [...dictionaries].reduce((acc, dictionary) => {
  const entries = Object.entries(dictionary);

  entries.forEach(([key, value]) => {
    if (!acc[key]) {
      acc[key] = [value];
    } else if (!acc[key].includes(value)) {
      acc[key].push(value);
    }
  });

  return acc;
}, {});

console.log(merge({ a: 1, b: 2 }, { a: 3 }));
// { a: [1, 3], b: [2] }

console.log(
  merge(
    { a: 1, b: 2, c: 3 },
    {},
    { a: 3, b: 2, d: 5 },
    { a: 6 },
    { b: 4, c: 3, d: 2 },
    { e: 9 },
  ),
);

// { a: [1, 3, 6], b: [2, 4], c: [3], d: [5, 2], e: [9] }

export default merge;
// END
