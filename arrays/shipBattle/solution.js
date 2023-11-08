// @ts-check

// BEGIN (write your solution here)
// const areShipsInLineValid = (line) => {
//   let counter = 0;
//
//   for (let i = 0; i < line.length; i += 1) {
//     if (counter > 4) return false;
//
//     const currSlot = line[i];
//
//     if (currSlot === 1) {
//       counter += 1;
//     } else {
//       counter = 0;
//     }
//   }
//
//   return counter <= 4;
// };
//
// const getColumnFromRow = (field, columnIndex) => {
//   const rowLength = field[0]?.length || 0;
//
//   if (columnIndex >= rowLength) return null;
//
//   const column = [];
//
//   for (let i = 0; i < field.length; i += 1) {
//     const currRow = field[i];
//     column.push(currRow[columnIndex]);
//   }
//
//   return column;
// };
//
// const areShipsValidInColumnAndRows = (field) => {
//   for (let rowNum = 0; rowNum < field.length; rowNum += 1) {
//     const currRow = field[rowNum];
//
//     if (!areShipsInLineValid(currRow)) return false;
//
//     for (let columnNum = 0; columnNum < currRow.length; columnNum += 1) {
//       const currColumn = getColumnFromRow(field, columnNum);
//
//       if (!areShipsInLineValid(currColumn)) return false;
//     }
//   }
//
//   return true;
// };
//
// const areShipsValidDiagonally = (field) => {
//   const numOfRows = field.length;
//   const numOfColumns = field[0] ? field[0].length : 0;
//
//   for (let rowNum = 0; rowNum < numOfRows - 1; rowNum += 1) {
//     const currRow = field[rowNum];
//
//     for (let columnNum = 0; columnNum < numOfColumns; columnNum += 1) {
//       const currSlot = currRow[columnNum];
//
//       if (currSlot === 1) {
//         const nextRow = field[rowNum + 1];
//         const leftDiagonalSlot = nextRow[columnNum - 1] || 0;
//         const rightDiagonalSlot = nextRow[columnNum + 1] || 0;
//
//         if (leftDiagonalSlot === 1 || rightDiagonalSlot === 1) return false;
//       }
//     }
//   }
//
//   return true;
// };
//
// export const isValidField = (field) => areShipsValidInColumnAndRows(field)
//   && areShipsValidDiagonally(field);
//
// export const calcShipsCount = (field) => {
//   const rowCount = field.length;
//   const columnCount = field[0]?.length || 0;
//   let shipCount = 0;
//
//   if (!rowCount || !columnCount) return shipCount;
//
//   for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
//     const currentRow = field[rowIndex];
//     const rowAbove = field[rowIndex + 1];
//     const rowBelow = field[rowIndex - 1];
//
//     for (let columnIndex = 0; columnIndex < columnCount; columnIndex += 1) {
//       const currentSlot = currentRow[columnIndex];
//       const slotAbove = rowAbove ? rowAbove[columnIndex] : 0;
//       const slotBelow = rowBelow ? rowBelow[columnIndex] : 0;
//
//       // Skip 0 or part of a vertical ship counted earlier
//       if (currentSlot === 0 || slotAbove) continue;
//
//       // Count horizontal ship and move on to the next 0
//       if (!slotBelow) {
//         shipCount += 1;
//
//         let nextIndex = columnIndex + 1;
//         let next = currentRow[nextIndex];
//
//         while (next) {
//           nextIndex += 1;
//           next = currentRow[nextIndex];
//         }
//
//         columnIndex = nextIndex;
//         // Count vertical ship
//       } else if (slotBelow) {
//         shipCount += 1;
//       }
//     }
//   }
//
//  return shipCount;
// };
// END
export const calcShipsCount = (battleField) => {
  let shipsCount = 0;
  const fieldSize = battleField.length;

  for (let row = 0; row < fieldSize; row += 1) {
    const currentRow = battleField[row];

    for (let col = 0; col < fieldSize; col += 1) {
      const currentSlot = currentRow[col];
      const previousSlot = currentRow[col - 1];

      if (currentSlot && !previousSlot) {
        const previousRow = battleField[row - 1];
        const slotAbove = previousRow ? previousRow[col] : 0;

        if (!previousRow || !slotAbove) {
          shipsCount += 1;
        }
      }
    }
  }

  return shipsCount;
};

export const isValidField = (battleField) => {
  for (let col = 0; col < battleField.length; col += 1) {
    for (let row = 1; row < battleField.length; row += 1) {
      const currentRow = battleField[row];
      const currentSlot = currentRow[col];
      const previousRow = battleField[row - 1];
      const rightDiagonalSlotAbove = previousRow ? previousRow[col + 1] : 0;
      const leftDiagonalSlotAbove = previousRow ? previousRow[col - 1] : 0;

      if (currentSlot) {
        if (rightDiagonalSlotAbove || leftDiagonalSlotAbove) {
          return false;
        }
      }
    }
  }
  return true;
};
