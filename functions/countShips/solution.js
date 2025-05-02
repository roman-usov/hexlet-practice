const calcShipsCount = (board) => {
  let shipCount = 0;
  const fieldSize = board.length;

  const getToShipBorderIndex = (currentIndex, row) => {
    let shipBorderIndex = currentIndex;
    let currentSlot = row[shipBorderIndex];

    while (currentSlot) {
      shipBorderIndex += 1;
      currentSlot = row[shipBorderIndex];
    }

    return shipBorderIndex - 1;
  };

  for (let row = 0; row < fieldSize; row += 1) {
    const currentRow = board[row];
    const prevRow = board[row - 1];

    for (let column = 0; column < fieldSize; column += 1) {
      const currentSlot = currentRow[column];

      if (currentSlot) {
        shipCount += 1;

        const shipBorderIndexInRow = getToShipBorderIndex(column + 1, currentRow);
        const partOfCountedShip = !!prevRow?.slice(column, shipBorderIndexInRow + 1).includes(1);

        if (partOfCountedShip) {
          shipCount -= 1;
        }

        column = shipBorderIndexInRow;
      }
    }
  }

  return shipCount;
};

calcShipsCount([]);

calcShipsCount( [
  [0, 0, 1],
  [0, 0, 0],
  [1, 1, 0],
]);

calcShipsCount([
  [1, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0],
  [1, 1, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1],
  [0, 1, 0, 0, 1, 0],
]); // 5

calcShipsCount( [
  [0, 1, 0, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 1],
  [0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 0, 0],
  [1, 0, 0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0, 0, 0],
]);

/*


[
  [0, 1, 0, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 1],
  [0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 0, 0],
  [1, 0, 0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0, 0, 0],
]

* */

export default calcShipsCount;
