// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)

/*
compare characters
as long as they do not match, continue
as soon as a duplicate is found - register the found substring
get back to the char after the first occurrence of the duplicated string
iterate again
* */

// const getPreviousOccurrence = (str, index, char) => {
//   for (let i = index - 1; i >= 0; i -= 1) {
//     const currentCharacter = str[i];
//
//     if (currentCharacter === char) return i;
//   }
//
//   return null;
// };
//
// const getLongestLength = (str) => {
//   let longestLength = 0;
//   let currentLongestString = '';
//   let currentLongestLength = 0;
//
//   for (let i = 0; i < str.length; i += 1) {
//     const currentCharacter = str[i];
//
//     if (!currentLongestString.includes(currentCharacter)) {
//       currentLongestString += currentCharacter;
//       currentLongestLength = currentLongestString.length;
//
//       const isLast = i === str.length - 1;
//
//       if (isLast) {
//         longestLength = Math.max(longestLength, currentLongestLength);
//       }
//     } else {
//       i = getPreviousOccurrence(str, i, currentCharacter);
//
//       longestLength = Math.max(longestLength, currentLongestLength);
//
//       currentLongestString = '';
//       currentLongestLength = 0;
//     }
//   }
//
//   return longestLength;
// };

// const getLongestLength = (str) => {
//   let map = {};
//   let windowStart = 0;
//   let windowEnd = 0;
//   let longestLength = 0;
//
//   for (let i = 0; i < str.length; i += 1) {
//     const currentCharacter = str[i];
//
//     if (map[currentCharacter] === undefined) {
//       map[currentCharacter] = i;
//       windowEnd = i + 1;
//     } else {
//       longestLength = Math.max(longestLength, windowEnd - windowStart);
//       i = map[currentCharacter];
//       windowStart = i + 1;
//       windowEnd = windowStart;
//       map = {};
//     }
//   }
//
//   return Math.max(longestLength, windowEnd - windowStart);
// };

// const getLongestLength = (str) => {
//   let map = {};
//   let windowStart = 0;
//   let longestLength = 0;
//
//   for (let i = 0; i < str.length; i += 1) {
//     const currentCharacter = str[i];
//     if (map[currentCharacter] !== undefined && map[currentCharacter] >= windowStart) {
//       windowStart = map[currentCharacter] + 1;
//     }
//     map[currentCharacter] = i;
//     longestLength = Math.max(longestLength, i - windowStart + 1);
//   }
//
//   return longestLength;
// };

// const getLongestLength = (str) => {
//   let sequence = [];
//   let maxLength = 0;
//
//   // Проходимся по всем символам переданной строки.
//   for (const char of str) {
//     // Ищем в сформированной последовательности
//     // позицию первого вхождения текущего символа.
//     const index = sequence.indexOf(char);
//     // Добавляем в последовательность текущий символ.
//     sequence.push(char);
//
//
//     if (index !== -1) {
//       // Если символ в последовательности был найден,
//       // значит в неё был добавлен повторяющийся символ.
//       // Отсекаем все символы включая найденный.
//       sequence = sequence.slice(index + 1);
//     }
//     // Получаем длину последовательности.
//     const sequenceLength = sequence.length;
//     if (sequenceLength > maxLength) {
//       // Если длина последовательности больше чем максимальная,
//       // устанавливаем новую максимальную длину.
//       maxLength = sequenceLength;
//     }
//   }
//
//   return maxLength;
// };

const getLongestLength = (str) => {
  let longestLength = 0;
  let currentLongestString = '';

  for (let i = 0; i < str.length; i += 1) {
    const currentCharacter = str[i];

    const existingIndex = currentLongestString.indexOf(currentCharacter);

    currentLongestString += currentCharacter;

    if (existingIndex !== -1) {
      currentLongestString = currentLongestString.slice(existingIndex + 1);
    }

    const currentLongestLength = currentLongestString.length;

    longestLength = Math.max(longestLength, currentLongestLength);
  }

  return longestLength;
};

// console.log(getLongestLength('jabjcdel')); //.toBe(7);
// console.log(getLongestLength('abcddef')); //.toBe(4);
// console.log(getLongestLength('abbccddeffg')); //.toBe(3);
// console.log(getLongestLength('abcbcc')); //.toBe(3);
//
// console.log(getLongestLength('abcd')); //.toBe(4);
// console.log(getLongestLength('1234561qweqwer')); //.toBe(9);
// console.log(getLongestLength('1234561qweqwerqer')); //.toBe(9);
// console.log(getLongestLength('')); //.toBe(0);
// console.log(getLongestLength('jabjcdeljrshmgdhj')); //.toBe(10);
//
// console.log('result', getLongestLength('abcdeef')); // 5
// console.log(getLongestLength('jabjcdel')); // 7
// console.log(getLongestLength('')); // 0
export default getLongestLength;

// END
