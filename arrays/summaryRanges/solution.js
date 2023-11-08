// @ts-check

// BEGIN (write your solution here)
// const summaryRanges = (arr) => {
//   const ranges = [];
//   let currentRange = [];
//
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     const current = arr[i]; // 2
//     const next = arr[i + 1]; // 3
//
//     const isLast = i === arr.length - 2; // 1
//
//     if (next - current === 1) {
//       currentRange = [...currentRange, current, next];
//     } else if (next - current !== 1 || isLast) {
//       if (currentRange.length > 1) {
//         const start = currentRange[0];
//         const end = currentRange.at(-1);
//
//         ranges.push(`${start}->${end}`);
//         currentRange = [];
//       }
//     }
//   }
//
//   if (currentRange.length > 1) {
//     const start = currentRange[0];
//     const end = currentRange.at(-1);
//
//     ranges.push(`${start}->${end}`);
//   }
//
//   return ranges;
// };

// const updateRanges = (start, end, ranges) => {
//   if ((start !== '' && end !== '') && start < end) {
//     ranges.push(`${start}->${end}`);
//   }
//
//   return ranges;
// }
//
// const summaryRanges = (arr) => {
//   let ranges = [];
//   let i = 0;
//   let currentStart = '';
//   let currentEnd = '';
//
//   while (i < arr.length - 1) {
//     const current = arr[i];
//     const next = arr[i + 1];
//
//     const isLast = i === arr.length - 2;
//
//     if (next - current === 1) {
//       if (currentStart === '') {
//         currentStart = current;
//       }
//
//       currentEnd = next;
//
//       if (isLast) {
//         ranges = updateRanges(currentStart, currentEnd, ranges);
//       }
//
//       i += 1;
//
//     } else {
//       currentEnd = current;
//
//       ranges = updateRanges(currentStart, currentEnd, ranges);
//
//       currentStart = next;
//       currentEnd = '';
//
//       i += 1;
//     }
//
//   }
//
//   return ranges;
// };

const summaryRanges = (arr) => {
  const ranges = [];
  let currentStart = arr[0];
  let currentEnd = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    const previous = arr[i - 1];
    const current = arr[i];

    const isConsecutive = current - previous === 1;

    if (isConsecutive) {
      currentEnd = current;
    } else {
      if (currentEnd > currentStart) {
        ranges.push(`${currentStart}->${currentEnd}`);
      }

      currentStart = current;
      currentEnd = current;
    }
  }

  if (currentEnd > currentStart) {
    ranges.push(`${currentStart}->${currentEnd}`);
  }

  return ranges;
};

// [8, 3, 1]
// [1, 2, 3]
// [1, 2, 4]

console.log(summaryRanges([1, 2, 3]));
console.log(summaryRanges([8, 3, 1]));
console.log(summaryRanges([8, 3, 1, 12, 2, 5]));
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([1, 1, 3, 4, 5, -6, 8, 9, 10, 12, 14, 14]));
console.log(summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5]));

// export default summaryRanges;
// END

// Teacher's solution

// BEGIN
const getRangeOfSequence = (sequence) => {
  const first = sequence[0];
  const last = sequence[sequence.length - 1];
  return `${first}->${last}`;
};

const summaryRangesFromTeacher = (numbers) => {
  const ranges = [];
  let sequence = [];

  for (let index = 0; index < numbers.length; index += 1) {
    const current = numbers[index];
    const next = numbers[index + 1];

    sequence.push(current);

    if (current + 1 !== next) {
      if (sequence.length > 1) {
        const range = getRangeOfSequence(sequence);
        ranges.push(range);
      }
      sequence = [];
    }
  }

  return ranges;
};

export default summaryRangesFromTeacher;

// END
