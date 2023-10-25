// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
/* eslint-disable no-continue */

// BEGIN (write your solution here)
const evaluateOperation = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      if (secondOperand === 0) return null;
      return firstOperand / secondOperand;
    default:
      throw new Error('Unsupported operator. Please, use: +, -, *, or /');
  }
};

const calculateInPolishNotation = (arr) => {
  const stack = [];

  for (const item of arr) {
    if (typeof item === 'number') {
      stack.push(item);
    } else {
      const secondOperand = stack.pop();
      const firstOperand = stack.pop();

      if (secondOperand === undefined || firstOperand === undefined) {
        throw new Error('Invalid Polish notation format');
      }

      const result = evaluateOperation(firstOperand, secondOperand, item);

      if (result === null) return null;

      stack.push(result);
    }
  }

  return stack.pop();
};

export default calculateInPolishNotation;
// END
