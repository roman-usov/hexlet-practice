// @ts-check

// BEGIN (write your solution here)
// 0 1 1 2 3 5

export default function fib(index) {
  if (index === 0) return 0;
  if (index === 1) return 1;

  let nMinusOne = 1;
  let nMinusTwo = 0;
  let current = 1;
  let counter = 2;

  while (counter <= index) {
    current = nMinusOne + nMinusTwo;
    nMinusTwo = nMinusOne;
    nMinusOne = current;

    counter += 1;
  }

  return current;
}

console.log(fib(10));
// END


function fibRec(index) {
  if (index === 0) return 0;
  if (index === 1 || index === 2) return 1;

  return fibRec(index - 1) + fibRec(index - 2);
}

// console.log(fibRec(10));
