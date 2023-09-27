// @ts-check
const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

// BEGIN (write your solution here)
export default function isHappyNumber(num) {
  function isPowerOfTen(number) {
     return Math.log10(number) % 1 === 0;
  }

  let currNumber = Math.abs(num) < 10 ? num ** 2 : num;

  while (currNumber >= 10) {
    if (isPowerOfTen(currNumber)) {
      return true;
    }

    currNumber = sumOfSquareDigits(currNumber);
  }

  return currNumber === 1;
}
// END
