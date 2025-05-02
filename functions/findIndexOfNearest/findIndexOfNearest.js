// @ts-check

// BEGIN (write your solution here)
const findIndexOfNearest = (values, baseValue) => {
  if (values.length === 0) return null;

  const first = values[0];
  let nearestIndex = 0;
  let smallestDiff = Math.abs(first - baseValue);

  for (let i = 1; i < values.length; i += 1) {
    const current = values[i];
    const currentDiff = Math.abs(current - baseValue);

    if (currentDiff < smallestDiff) {
      smallestDiff = currentDiff;
      nearestIndex = i;
    }
  }

  return nearestIndex;
};

// findIndexOfNearest([15, 3, 10, 3, 4], 0);

console.log(findIndexOfNearest([7, 5, 3, 2], 4)); // 1

export default findIndexOfNearest;
// END
