// @ts-check

/* eslint-disable no-console */

// BEGIN (write your solution here)
const fizzBuzz = (start, end) => {
  if (start > end || start < 0 || end < 0) return;

  for (let i = start; i <= end; i += 1) {
    switch (true) {
      case (i % 3 === 0 && i % 5 === 0):
        console.log('FizzBuzz');
        break;
      case (i % 3 === 0):
        console.log('Fizz');
        break;
      case (i % 5 === 0):
        console.log('Buzz');
        break;
      default:
        console.log(i);
    }
  }
};

export default fizzBuzz;
// END
