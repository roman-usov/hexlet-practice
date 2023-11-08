// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)

const transposeMatrix = (matrix) => {
  const reversedIndices = Array.from(matrix[0]?.keys());

  return reversedIndices.map((column) => matrix.map((row) => row[column]));
};

const multiplyRows = (row1, row2) => {
  let multipliedRow = 0;

  for (let i = 0; i < row1.length; i += 1) {
    multipliedRow += row1[i] * row2[i];
  }

  return multipliedRow;
};

// const multiplyMatrices = (matrix1, matrix2) => {
//   const rotatedMatrix2 = rotateMatrix(matrix2);
//
//   const multipliedMatrix = Array.from({length: matrix1.length}, () => []);
//
//   const rowCount1 = rotatedMatrix2.length || 0;
//   const rowCount2 = matrix1.length || 0;
//
//   for (let rowIndex2 = rowCount1 - 1; rowIndex2 >= 0; rowIndex2 -= 1) {
//     const currentRow2 = rotatedMatrix2[rowIndex2];
//
//     for (let rowIndex1 = 0; rowIndex1 < rowCount2; rowIndex1 += 1) {
//       const currentRow1 = matrix1[rowIndex1];
//       const product = multiplyRows(currentRow2, currentRow1);
//
//       multipliedMatrix[rowIndex1].push(product);
//     }
//   }
//
//   return multipliedMatrix;
// };
//

const getColumn = (matrix, columnIndex) => {
  const column = [];

  for (let i = 0; i < matrix.length; i += 1) {
    const currentRow = matrix[i];
    column.push(currentRow[columnIndex]);
  }

  return column;
};

const matrixA = [
  [2, 3],
  [4, 5],
];

const matrixB = [
  [6, 7],
  [8, 9],
];

const transposedB = [
  [6, 8],
  [7, 9],
];

const result = [[36, 41], []];

const multiplyMatrices = (matrix1, matrix2) => {
  const multipliedMatrix = Array.from({ length: matrix1.length }, () => []);
  const transposedMatrix2 = transposeMatrix(matrix2);

  for (let rowIndex1 = 0; rowIndex1 < matrix1.length; rowIndex1 += 1) {
    const currentRow1 = matrix1[rowIndex1];

    for (
      let rowIndex2 = 0;
      rowIndex2 < transposedMatrix2.length;
      rowIndex2 += 1
    ) {
      const currentRow2 = transposedMatrix2[rowIndex2];
      const multipliedRows = multiplyRows(currentRow1, currentRow2);
      multipliedMatrix[rowIndex1].push(multipliedRows);
    }
  }

  return multipliedMatrix;
};

multiplyMatrices(matrixA, matrixB);

// export default multiplyMatrices;
// END

// BEGIN
export default (matrixA, matrixB) => {
  const rowsCountA = matrixA.length;
  const rowsCountB = matrixB.length;
  const [firstRowB] = matrixB;
  const [firstRowA] = matrixA
  const columnsCountB = firstRowB.length;
  const columnsCountA = firstRowA.length;
  const matrixC = [];

  for (let row = 0; row < rowsCountA; row += 1) {
    matrixC[row] = [];
    for (let column = 0; column < columnsCountB; column += 1) {
      let sum = 0;
      for (let mover = 0; mover < columnsCountA; mover += 1) {
        sum += matrixA[row][mover] * matrixB[mover][column];
      }
      matrixC[row][column] = sum;
    }
  }

  return matrixC;
};


const multiplyMatrices = (matrixA, matrixB) => {
  const matrixC = [];
  const rowsACount = matrixA.length;
  const columnsACount = matrixA[0].length;
  const columnsBCount = matrixB[0].length;

  for (let i = 0; i < rowsACount; i += 1) {
    matrixC[i] = [];
    const currentRow = matrixC[i];

    for (let j = 0; j < columnsBCount; j += 1) {
      let sum = 0;

      for (let k = 0; k < columnsACount; k += 1) {
        const elementA = matrixA[i][k];
        const elementB = matrixB[k][j];

        sum += elementA * elementB;
      }

      currentRow.push(sum);
    }
  }

  return matrixC;
};

const m1 = [
  [2, 3],
  [4, 5],
];

const m2 = [
  [6, 7],
  [8, 9],
];

console.log(multiplyMatrices(m1, m2));
// END
