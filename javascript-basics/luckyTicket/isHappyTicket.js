// @ts-check
/* eslint-disable radix */
// BEGIN (write your solution here)
export default function (ticketNumber) {
  const half = ticketNumber.length / 2;
  const firstPart = ticketNumber.slice(0, half);
  const secondPart = ticketNumber.slice(half);

  const sumDigits = (strOfDigits) => strOfDigits.split('').reduce((acc, num) => acc + Number(num), 0);

  return sumDigits(firstPart) === sumDigits(secondPart);
}
// END
