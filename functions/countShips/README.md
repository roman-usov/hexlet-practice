## solution.js

Implements and exports a default function that takes in a ship battlefield as a square two-dimensional array of zeros and ones. Zero is an empty slot, and one is a part of a ship. The function returns the number of ships on the battlefield. Ships can bend in an 'L' shape and like a snake.

```js
calcShipsCount([]); // 0
calcShipsCount([
  [1, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [1, 1, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1],
  [0, 1, 0, 0, 1, 0],
]); // 5
```
