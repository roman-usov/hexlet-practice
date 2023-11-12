// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)

const produceArray = (interval) => {
  const result = [];
  let [start, end] = interval;

  for (let i = start; i <= end; i += 1) {
    result.push(i);
  }

  return result;
};

/*

1) New interval is within existing => skip
2) New interval's end is within existing => remaining part: start of the new interval and start of existing
3) New interval's start is within existing => remaining part: end of existing and end of the new interval
4) New interval includes existing => replace existing with new interval
5) New interval is outside existing => add to the other existing intervals

[5, 6, 7], [1, 2, 3]

[-1, 0, 1, 2, 3, 4, 5, 6]

if intersect

[-1, 0, 1, 2, 3, 4, 5, 6, 6, 7] => set [-1, 0, 1, 2, 3, 4, 5, 6, 7]
[-1, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7] => set {-1, 0, 1, 2, 3, 4, 5, 6, 7]

* */

// const updateProcessed = (processed, sequence) => {
//   const sequenceStart = sequence[0];
//   const sequenceEnd = sequence.at(-1);
//
//   for (let i = 0; i < processed.length; i += 1) {
//     const current = processed[i];
//     const currentStart = current[0];
//     const currentEnd = current.at(-1);
//
//     if ((current.includes(sequenceStart) || current.includes(sequenceEnd)) || (sequenceStart < currentStart && sequenceEnd > currentEnd)) {
//       const updatedCurrent = [...current, ...sequence].sort((a, b) => a - b);
//       const remaining = processed.filter((el, j) => j !== i);
//       return [...remaining, updatedCurrent];
//     }
//   }
//
//   return [...processed, sequence];
// };
//
// const sumIntervals = (intervals) => {
//   let processedIntervals = [];
//
//   for (const current of intervals) {
//     const sequence = produceArray(current);
//     processedIntervals = updateProcessed(processedIntervals, sequence);
//   }
//
//   return processedIntervals.reduce((acc, arr) => {
//     const start = arr[0];
//     const end = arr.at(-1);
//     return acc + (end - start);
//   }, 0);
// };

const sumIntervals = (intervals) => {
  const sortedIntervals = [...intervals].sort((a, b) => a[0] - b[0]);

  let [ accumulatedStart, accumulatedEnd ] = sortedIntervals[0];

  let length = 0;

  for (let i = 1; i < sortedIntervals.length; i += 1) {
    const current = sortedIntervals[i];
    const currentStart = current[0];
    const currentEnd = current[1];

    if (currentStart > accumulatedEnd) {
      length += accumulatedEnd - accumulatedStart;
      accumulatedStart = currentStart;
      accumulatedEnd = currentEnd;
    } else {
      accumulatedEnd = Math.max(currentEnd, accumulatedEnd);
    }

  }

  return length + accumulatedEnd - accumulatedStart;
};

// Teacher's solution

const sumIntervals1 = (intervals) => {
  const values = [];
  for (const [start, end] of intervals) {
    for (let i = start; i < end; i += 1) {
      if (!values.includes(i)) {
        values.push(i);
      }
    }
  }
  return values.length;
};


/*

[ [ -30, 19 ], [ 1, 5 ], [ 1, 7 ], [ 5, 100 ], [ 16, 19 ] ]

[ [ -30, 19 ], [ 20, 22 ], [ 22, 23 ], [ 5, 100 ], [ 16, 19 ] ]
* */

const arr = [[-30, 19], [20, 22], [22, 23], [30, 32]];

// console.log(sumIntervals(arr));


console.log(sumIntervals([
  [1, 5],
  [-30, 19],
  [1, 7],
  [16, 19],
  [5, 100],
])); // 130

export default sumIntervals;
// END
