// @ts-check

// BEGIN (write your solution here)

const matrix1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const cloneMatrix = (matrix) => matrix.map((row) => [...row]);

const rotateClockwise = (matrix) => {
  const matrixClone = cloneMatrix(matrix);

  const columns = Array.from(matrixClone[0].keys());

  return columns.map((col) => matrixClone.map((row) => row[col]).reverse());
};

const rotateCounterClockwise = (matrix) => {
  const matrixClone = cloneMatrix(matrix);

  const columns = Array.from(matrixClone[0].keys()).reverse();

  return columns.map((col) => matrixClone.map((row) => row[col]));
};

const rotate = (matrix, direction) => {
  const matrixClone = cloneMatrix(matrix);

  const indices = Array.from(matrixClone[0].keys());

  const columns = direction === 'right' ? indices : indices.reverse();

  const columnToRow =
    direction === 'right'
      ? (col) => matrixClone.map((row) => row[col]).reverse()
      : (col) => matrixClone.map((row) => row[col]);

  return columns.map(columnToRow);
};

export const rotateRight = (matrix) => rotate(matrix, 'right');
export const rotateLeft = (matrix) => rotate(matrix, 'left');

// END
