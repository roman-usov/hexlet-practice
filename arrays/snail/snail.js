// @ts-check
// eslint-disable-next-line no-unused-vars

import _ from 'lodash';

// BEGIN (write your solution here)

const matrix1 = [
  [1, 2],
  [3, 4],
];

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

const matrix4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const intMatrix1 = [
  [6, 7],
  [10, 11],
];

const calculateExternalPath = (matrix) => {
  const height = matrix.length;
  let externalRound = [];

  // Calculate the top, right-hand and bottom parts of the external path
  for (let i = 0; i < height; i += 1) {
    const currentHorizontalLine = matrix[i];

    if (i === 0) {
      externalRound = [...externalRound, ...currentHorizontalLine];
    } else if (i === height - 1) {
      externalRound = [...externalRound, ...[...currentHorizontalLine].reverse()];
    } else {
      externalRound.push(currentHorizontalLine.at(-1));
    }
  }

  // Calculate the left-hand part of the external path
  if (height > 2) {
    for (let i = matrix.length - 2; i > 0; i -= 1) {
      const currentLine = matrix[i];
      const firstElementInCurrent = currentLine[0];

      externalRound.push(firstElementInCurrent);
    }
  }

  return externalRound;
};

const calculateInnerMatrix = (matrix) => {
  const height = matrix.length;
  let remainingMatrix = [];
  const hasInnerMatrix = height > 2;

  if (!hasInnerMatrix) return remainingMatrix;

  for (let i = height - 2; i > 0; i -= 1) {
    const currentLine = matrix[i];

    const remainingInternalPart = currentLine.slice(1, -1);
    remainingMatrix = [remainingInternalPart, ...remainingMatrix];
  }

  return remainingMatrix;
};

const buildSnailPath = (matrix) => {
  const height = matrix.length;
  const width = matrix[0]?.length || 0;


  // Return an empty array if the matrix is empty or contains empty rows
  // Return a simple flat array if the matrix has just one column of values
  if (height === 0 || width === 0 || width === 1) return matrix.flat();

  let snailPath = [];
  let remainingMatrix = matrix;

  while (remainingMatrix.length > 0) {
    snailPath = [...snailPath, ...calculateExternalPath(remainingMatrix)];
    remainingMatrix = calculateInnerMatrix(remainingMatrix);
  }

  return snailPath;
};

const buildSnailPathByRotatingMatrix = (matrix) => {
  let snailPath = [];
  let newMatrix = matrix;

  while (newMatrix.length > 0) {
    const topRow = newMatrix.shift();
    snailPath = [...snailPath, ...topRow];

    const columnIndexesInReverseOrder = Array.from(newMatrix[0]?.keys() || []).reverse();  // Adjusted this line to handle an empty newMatrix

    const matrixRotatedCounterClock = columnIndexesInReverseOrder.map((col) => newMatrix.map((row) => row[col]));

    newMatrix = matrixRotatedCounterClock;
  }

  return snailPath;
};

console.log(buildSnailPathByRotatingMatrix(matrix2));

export default buildSnailPath;
// END
