// @ts-check
/* eslint-disable no-console */

import _ from 'lodash';

// BEGIN (write your solution here)

const generateRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculatePercentages = (dataCounts) => {
  const total = _.sum(_.values(dataCounts));

  return _.mapValues(dataCounts, (count) => Math.round((count / total) * 100));
};

const buildHistogram = (totalThrows, rollDice) => {
  const data = Array.from({ length: totalThrows }, () => rollDice());
  const groupedCounts = _.countBy(data);
  const groupedCountEntries = Object.entries(groupedCounts);

  const counts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };

  groupedCountEntries.forEach(([side, count]) => {
    counts[side] += count;
  });

  const refinedPercentages = calculatePercentages(counts);

  const maxRows = Math.max(..._.values(counts)) + 1;
  const histogram = Array.from({ length: maxRows }, () => []);

  const countValues = _.values(counts);

  for (let i = 0; i < countValues.length; i += 1) {
    const currentCount = countValues[i];

    let currentRowNumber = maxRows - 1;
    let counter = 0;

    while (currentRowNumber >= 0) {
      const histogramRow = histogram[currentRowNumber];
      const currentPercentage = refinedPercentages[i + 1];

      if (counter > currentCount || currentPercentage === 0) {
        histogramRow[i] = '   ';
      } else if (counter < currentCount) {
        histogramRow[i] = '###';
      } else {
        histogramRow[i] = `${currentPercentage}%`.padEnd(3, ' ');
      }

      currentRowNumber -= 1;
      counter += 1;
    }
  }

  const printHistogram = () => {
    histogram.forEach((row) => {
      console.log(row.join(' ').trimEnd());
    });
  };

  const printBase = () => {
    const base = [
      ['---', '---', '---', '---', '---', '---'],
      [' 1 ', ' 2 ', ' 3 ', ' 4 ', ' 5 ', ' 6 '],
    ];

    base.forEach((row, i) => {
      if (i === 0) {
        console.log(row.join('-').trimEnd());
      } else {
        console.log(row.join(' ').trimEnd());
      }
    });
  };

  printHistogram();
  printBase();
};

buildHistogram(32, generateRandomInteger);

export default buildHistogram;
// END
