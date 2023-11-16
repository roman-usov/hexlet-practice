# Roman Numbers

## Overview
The Romans used letters of the Latin alphabet to write numbers: I, V, X, L, C, D, M. For example:

The number 1 was represented by the letter I
The number 10 by X
The number 7 by VII
The number 2020 in Roman numerals is MMXX (2000 = MM, 20 = XX).

## solution.js

Implements and exports the function toRoman(), which converts Arabic numbers into Roman numerals. The function takes an integer in the range from 1 to 3000 as input and returns a string with the Roman representation of this number.

Implements and export the function toArabic(), which converts a number in Roman numerals into a number written in Arabic numerals. If the given Roman number is incorrect, the function should return the value false.


This mini-project implements and exports `rotateLeft()` and `rotateRight(0)` functions that spin a given matrix in the form of an array left (counter clockwise) and right (clockwise). The function do not mutate the original matrix.

```js
toRoman(1);
// 'I'
toRoman(59);
// 'LIX'
toRoman(3000);
// 'MMM'

toArabic('I');
// 1
toArabic('LIX');
// 59
toArabic('MMM');
// 3000

toArabic('IIII');
// false
toArabic('VX');
// false
```
