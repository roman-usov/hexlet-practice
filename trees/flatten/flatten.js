// @ts-check

// BEGIN (write your solution here)
const flatten = (input) => {
  let flattened = [];

  const iterate = (arr) => {
    if (arr.length === 0) return;

    const [first, ...rest] = arr;

    if (Array.isArray(first)) {
      iterate(first);
      iterate(rest);
    } else {
      flattened = [...flattened, first];
      iterate(rest);
    }
  };

  iterate(input);

  return flattened;
};

const list = [1, 2, [3, 5], [[4, 3], 2]];

console.log(flatten(list));

// Teacher's Solution

/*
// BEGIN
const flatten = (list) => list.reduce((acc, element) => {
  const result = (Array.isArray(element) ? [...acc, ...flatten(element)] : [...acc, element]);
  return result;
}, []);

export default flatten;
// END
* */

export default flatten;
// END
