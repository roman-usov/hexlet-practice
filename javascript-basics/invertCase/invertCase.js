// @ts-check
// BEGIN (write your solution here)
// export default function invertCase (str) {
//   const upperCaseLetters = /[A-Z]/;
//   const lowerCaseLetters = /[a-z]/;
//
//   return str
//     .split('')
//     .reduce((inverted, char) => {
//       if (upperCaseLetters.test(char)) {
//         console.log(inverted);
//         return `${inverted}${char.toLowerCase()}`;
//       }
//
//       if (lowerCaseLetters.test(char)) {
//         console.log(inverted);
//         return `${inverted}${char.toUpperCase()}`;
//       }
//       console.log(inverted);
//       return `${inverted}${char}`;
//     }, '');
// }
export default function invertCase(str) {
  let inverted = '';

  for (let i = 0; i < str.length; i += 1) {
    const currChar = str[i];

    const isUpperCase = currChar === currChar.toUpperCase();

    inverted += isUpperCase ? currChar.toLowerCase() : currChar.toUpperCase();
  }

  return inverted;
}
// END
