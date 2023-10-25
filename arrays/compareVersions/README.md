This mini project implements a stack machine, which performs calculations based on the Reverse Polish Notation (RPN).

Reverse Polish Notation, also known as postfix notation, is a mathematical notation in which every operator follows all of its operands.

The expression is read from left to right. When an operator is encountered, the respective operation is performed on the two nearest operands to the left of the operator. The result of the operation replaces the sequence of its operands and the operator in the expression, and the expression is evaluated further following the same rule. Eventually, the result of the last operation evaluated becomes the result of the entire expression.

For instance, the expression (1 + 2) _ 4 + 3 in postfix notation would be represented as: 1 2 + 4 _ 3 +, and the evaluation result would be 15. Another example is the expression: 7 - 2 _ 3, in postfix notation: 7 2 3 _ -, and the result: 1.

File: solution.js
Exports a default function that accepts an array, each element of which contains either a number or an operator (+, -, \*, /). The function should return the result of the evaluation based on the Reverse Polish Notation. If at any point a division by zero occurs, the function should return null.
