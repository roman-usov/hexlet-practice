// @ts-check
// BEGIN (write your solution here)
const reverseInt = (int) => {
  const leadingMinus = int < 0 ? '-' : '';
  const intString = Math.abs(int).toString();

  let reversed = leadingMinus;
  let counter = intString.length - 1;

  while (counter >= 0) {
    const curChar = intString[counter];
    reversed += curChar;
    counter -= 1;
  }

  return Number(reversed);
};

export default reverseInt;
// END
