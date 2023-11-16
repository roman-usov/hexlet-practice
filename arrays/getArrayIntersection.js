const getIntersectionsOfSortedArrays = (arr1, arr2) => {
  const intersections = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    const value1 = arr1[index1];
    const value2 = arr2[index2];
    const lastCommon = intersections.at(-1);

    if (value1 === value2 && value1 !== lastCommon) {
      intersections.push(value1);
      index1 += 1;
      index2 += 1;
    } else if (value1 > value2) {
      index2 += 1;
    } else {
      index1 += 1;
    }
  }

  return intersections;
};

console.log(getIntersectionsOfSortedArrays([10, 10, 10, 11, 24], [10, 13, 14, 18, 24, 30])); // [10, 24]
console.log(getIntersectionsOfSortedArrays([1, 1, 1, 2, 2, 2], [1, 1, 2, 2, 3, 3])); // [1, 2]
