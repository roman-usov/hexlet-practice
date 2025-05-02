// @ts-check

import chunk from 'lodash/chunk.js';

// BEGIN (write your solution here)
const ipToInt = (ip) => {
  const ipChunks = ip.split('.');

  const ipChunksInBinary = ipChunks.map((chunkEl) => parseInt(chunkEl, 10)
    .toString(2).padStart(8, '0'));

  const ipInBinary = ipChunksInBinary.join('');

  return parseInt(ipInBinary, 2);
};

const intToIp = (ipInt) => {
  const ipInBinary = ipInt.toString(2).padStart(32, '0');

  const ipInBinaryChunks = chunk(ipInBinary.split(''), 8).map((chunkEl) => chunkEl.join(''));

  const ipInIntChunks = ipInBinaryChunks.map((chunkEl) => parseInt(chunkEl, 2));

  return ipInIntChunks.join('.');
};

console.log(ipToInt('128.32.10.1'));

console.log(intToIp(32));

export { ipToInt, intToIp };
// END
