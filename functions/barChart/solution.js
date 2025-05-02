// @ts-check
/* eslint-disable no-console */

import _ from 'lodash';

// BEGIN (write your solution here)

const buildBarChart = (sequence) => {
  const positiveBarSection = '*';
  const negativeBarSection = '#';

  const positiveSequence = sequence.map((num) => {
    if (num >= 0) return num;
    return 0;
  });

  const negativeSequence = sequence.map((num) => {
    if (num < 0) return Math.abs(num);
    return 0;
  });

  const buildBars = (barValues, sectionReplacer) => {
    const maxBarLevel = Math.max(...barValues);

    const bars = _.times(maxBarLevel, () => []);

    for (let column = 0; column < barValues.length; column += 1) {
      let currentColumnValue = barValues[column];

      const isPositiveColumn = sectionReplacer === '*';

      for (
        let row = isPositiveColumn ? bars.length - 1 : 0;
        isPositiveColumn ? row >= 0 : row < bars.length;
        isPositiveColumn ? (row -= 1) : (row += 1)
      ) {
        const currentRow = bars[row];

        currentRow[column] = currentColumnValue > 0 ? sectionReplacer : ' ';
        currentColumnValue -= 1;
      }
    }

    return bars;
  };

  const positiveBars = buildBars(positiveSequence, positiveBarSection);
  const negativeBars = buildBars(negativeSequence, negativeBarSection);

  positiveBars.forEach((row) => {
    console.log(row.join('').trimEnd());
  });

  negativeBars.forEach((row, i, arr) => {
    if (i < arr.length - 1) {
      console.log(row.join('').trimEnd());
    } else {
      console.log(row.join(''));
    }
  });
};

// buildBarChart([5, 10, -5, -3, 0, 7]);
// =>  *
//     *
//     *
//     *  *
//     *  *
//    **  *
//    **  *
//    **  *
//    **  *
//    **  *
//      ##
//      ##
//      ##
//      #
//      #

export default buildBarChart;
// END
