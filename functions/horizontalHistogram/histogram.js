// @ts-check
/* eslint-disable no-console */

import _ from 'lodash';

// BEGIN (write your solution here)

const generateRandomInteger = (min = 1, max = 6) => Math.floor(Math.random() * (max - min + 1)) + min;


const buildHistogram = (rounds, rollDice) => {
  const data = Array.from({ length: rounds }, () => rollDice());

  const buildPrintBar = (face, count) => {
    const BAR_CHUNK = '#';

    return `${face}|${BAR_CHUNK.repeat(count)}${count > 0 ? ` ${count}` : ''}`;
  };

  const faceCounts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };

  data.forEach((int) => faceCounts[int] += 1);

  const facesAndCounts = Object.entries(faceCounts);

  facesAndCounts.forEach(([diceFace, diceCount]) => {
    console.log(buildPrintBar(diceFace, diceCount));
  });
};

buildHistogram(10, generateRandomInteger);

export default buildHistogram;
// END
