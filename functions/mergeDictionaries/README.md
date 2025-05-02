## dictionary.js

Implements and exports a default function that merges several dictionaries (objects) into a common dictionary. The function can accept any number of arguments and returns the result as an object where each key contains an array of unique values. Elements in the array keep the order in which they appear in the source dictionaries.

```js
merge({}, {}, {});
// {}

merge({ a: 1, b: 2 }, { a: 3 });
// { a: [1, 3], b: [2] }

merge(
  { a: 1, b: 2, c: 3 },
  {},
  { a: 3, b: 2, d: 5 },
  { a: 6 },
  { b: 4, c: 3, d: 2 },
  { e: 9 },
);
// { a: [1, 3, 6], b: [2, 4], c: [3], d: [5, 2], e: [9] }
```
