// @ts-check

// BEGIN (write your solution here)
const chunk = (arr, chunkLength) => {
  if (arr.length === 0) return arr;

  if (arr.length <= chunkLength) return [arr];

  const chunks = [];

  for (let i = 0; i < arr.length; i += chunkLength) {
    chunks.push(arr.slice(i, i + chunkLength));
  }

  return chunks;
};

export default chunk;

console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk(['a', 'b', 'c', 'd'], 3));
console.log(chunk(['a'], 2));
console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2));
// END
