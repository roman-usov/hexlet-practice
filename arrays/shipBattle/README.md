# Battleship Game

This mini-project implements functions that can validate a Battleship game field and count the number of ships on a Battleship game board.

## Files

### `solution.js`

This file contains two main functions:

#### `calcShipsCount(field)`

This function takes a battlefield as input in the form of a square two-dimensional array of zeros and ones, where zero represents an empty cell, and one represents a part of a ship. The function returns the count of ships on the battlefield.

#### `isValidField(field)`

Since ships should not touch each other, this function checks the arrangement of ships for correctness. It takes the battlefield as input in the same format as `calcShipsCount` and returns a boolean indicating whether the field is valid.

```javascript
calcShipsCount([]); // 0
calcShipsCount([
  [0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 0, 0],
]); // 6
isValidField([
  [0, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 1, 1],
]); // false
