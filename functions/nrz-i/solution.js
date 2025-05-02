// @ts-check

// BEGIN (write your solution here)
const nrzi = (code) => {
  let binary = '';

  if (code === '|') return binary;

  for (let i = 0; i < code.length; i += 1) {
    const current = code[i];

    if (current === '|') {
      binary += '1';
      i += 1;
    } else {
      binary += '0';
    }
  }

  return binary;
};

console.log(nrzi('¯|__|¯|___|¯¯'));
console.log(nrzi('_|¯¯¯|_|¯¯¯¯|_|¯¯'));
console.log(nrzi('¯|___|¯¯¯¯¯|___|¯|_|¯'));
console.log(nrzi('|¯|___|¯¯¯¯¯|___|¯|_|¯'));

/*
Teacher's solution

// BEGIN
export default (str) => str
  .split('')
  .map((e, i, arr) => {
    if (e === '|') return '';
    return arr[i - 1] === '|' ? 1 : 0;
  })
  .join('');
// END

* */

export default nrzi;
// END
