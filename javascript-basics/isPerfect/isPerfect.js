// @ts-check

// BEGIN (write your solution here) (write your solution here)
const isPerfect = (num) => {
  if (num <= 1) {
    return false;
  }

  let currentDivisor = Math.floor(Math.sqrt(num));
  let divisorSum = 1;

  while (currentDivisor >= 2 && divisorSum < num) {
    if (num % currentDivisor === 0) {
      if (currentDivisor === num / currentDivisor) {
        divisorSum += currentDivisor;
      } else {
        divisorSum += currentDivisor + num / currentDivisor;
      }
    }

    if (divisorSum >= num) {
      break;
    }

    currentDivisor -= 1;
  }

  return divisorSum === num;
};
// END

export default isPerfect;
