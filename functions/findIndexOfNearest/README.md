## findIndexOfNearest.js

Implements and exports a default function that takes in an array of numbers and a sought-for number and returns the index of a number closest to the given number. If the array has several numbers closest to the given number, then the smallest index is returned.

```js
findIndexOfNearest([], 2); // null
findIndexOfNearest([15, 10, 3, 4], 0); // 2
findIndexOfNearest([7, 5, 3, 2], 4); // 1
findIndexOfNearest([7, 5, 4, 4, 3], 4); // 2
```
