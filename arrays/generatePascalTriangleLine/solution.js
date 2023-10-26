// BEGIN (write your solution here)

const generatePascalLineWithCache = () => {
  const cachedPascalTriangleLines = [[1], [1, 1]];

  return (lineNum) => {
    const cachedLine = cachedPascalTriangleLines[lineNum];

    if (cachedLine) {
      return cachedLine
    }

    let lineCounter = cachedPascalTriangleLines.length;

    while (lineCounter <= lineNum) {
      const source = cachedPascalTriangleLines[lineCounter - 1];
      const lineValues = [1];
      const length = source.length - 1;

      for (let i = 0; i < length; i += 1) {
        const firstVal = source[i];
        const secondVal = source[i + 1];
        const sum = firstVal + secondVal;
        lineValues.push(sum);
      }

      lineValues.push(1);

      cachedPascalTriangleLines.push(lineValues);

      lineCounter += 1;
    }

    return cachedPascalTriangleLines[lineNum];
  };
};

const generate = generatePascalLineWithCache();

// const generate = (lineNum) => {
//   const pascalTriangleLines = [[1], [1, 1]];
//   let lineCounter = 2;
//
//   if (lineNum === 0 || lineNum === 1) return pascalTriangleLines[lineNum];
//
//   while (lineCounter <= lineNum) {
//     const source = pascalTriangleLines[lineCounter - 1];
//     const lineValues = [1];
//     const length = source.length - 1;
//
//     for (let i = 0; i < length; i += 1) {
//       const firstVal = source[i];
//       const secondVal = source[i + 1];
//       const sum = firstVal + secondVal;
//       lineValues.push(sum);
//     }
//
//     lineValues.push(1);
//
//     pascalTriangleLines.push(lineValues);
//
//     lineCounter += 1;
//   }
//
//   return pascalTriangleLines[lineNum];
// };

export default generate;

console.log(generate(3));
console.log(generate(3));
console.log(generate(4));
// console.log(generate(7));
// END
