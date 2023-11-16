const getMirrorMatrix = (matrix) => {
  const mirroredMatrix = [];
  const rowLength = matrix[0].length;
  const lastIndex = rowLength - 1;
  const halvedRowLength = rowLength / 2;

  for (const row of matrix) {
    const mirroredRow = [];

    for (let i = 0; i < halvedRowLength; i += 1) {
      // const isLast = i === halvedRowLength - 1;
      const current = row[i];

      mirroredRow[i] = current;
      mirroredRow[lastIndex - i] = current;
    }

    mirroredMatrix.push(mirroredRow);
  }

  return mirroredMatrix;
};

const arr1 = [
  ['he', 'xl', 'et', 'io'],
  ['in', 'my', 'hea', 'rt'],
  ['fo', 're', 've', 'r'],
  ['an', 'd', 'ev', 'er'],
];

console.log(getMirrorMatrix(arr1));

// export default getMirrorMatrix;
