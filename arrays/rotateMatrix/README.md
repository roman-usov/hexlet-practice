# Longest Substring Without Duplicates

## Overview

This mini-project implements and exports `rotateLeft()` and `rotateRight(0)` functions that spin a given matrix in the form of an array left (counter clockwise) and right (clockwise). The function do not mutate the original matrix.

```js
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
];

rotateLeft(matrix);
// [
//   [4, 8, 2],
//   [3, 7, 1],
//   [2, 6, 0],
//   [1, 5, 9],
// ]

rotateRight(matrix);
// [
//   [9, 5, 1],
//   [0, 6, 2],
//   [1, 7, 3],
//   [2, 8, 4],
// ]
```
