// @ts-check

// BEGIN (write your solution here)

const isEven = (integer) => Math.abs(integer) % 2 === 0;

const sameParityFilter = (collection) => {
  const firstElement = collection[0];
  const isFirstElementEven = isEven(firstElement);

  return collection.filter((int) => isFirstElementEven === isEven(int));
};

console.log(sameParityFilter([-1, 0, 1, -3, 10, -2])); // [-1, 1, -3]
console.log(sameParityFilter([2, 0, 1, -3, 10, -2])); // [2, 0, 10, -2]
console.log(sameParityFilter([]));

export default sameParityFilter;
// END
