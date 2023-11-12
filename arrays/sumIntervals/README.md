Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив интервалов и возвращает сумму всех длин интервалов. В данной задаче используются только интервалы целых чисел от -100 до 100 , которые представлены в виде массива. Первое значение интервала всегда будет меньше, чем второе значение. Например, длина интервала [-100, 0] равна 100, а длина интервала [5, 5] равна 0. Пересекающиеся интервалы должны учитываться только один раз.

This mini-project implements a default function that receives an array of intervals from -100 to 100 and returns the sum of all interval lengths. The first value of an interval will always be smaller than the second one. For example, the length of `[-100, 0]` equals 100, and the length of `[5, 5]` equals 0. Intersecting intervals must be counted only once.

Usage Examples:
```javascript
sumIntervals([
  [5, 5]
]); // 0

sumIntervals([
  [-100, 0]
]); // 100

sumIntervals([
  [1, 2],
  [11, 12]
]); // 2

sumIntervals([
  [2, 7],
  [6, 6]
]); // 5

sumIntervals([
  [1, 9],
  [7, 12],
  [3, 4]
]); // 11

sumIntervals([
  [1, 5],
  [-30, 19],
  [1, 7],
  [16, 19],
  [5, 100]
]); // 130
```
