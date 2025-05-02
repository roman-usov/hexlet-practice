import _ from 'lodash';

// BEGIN (write your solution here)
const calculateProbabilities = (rolls) => {
  const calculateProbabilitiesFromOccurrences = (occurrences) => {
    const weightPerItem = 1 / _.sum(_.values(occurrences));
    return _.mapValues(occurrences, (value) => weightPerItem * value);
  };

  const valueOccurrences = rolls.reduce((acc, el, i, arr) => {
    const next = arr[i + 1];

    if (!acc[el]) {
      acc[el] = {};
    }

    if (next) {
      const currentAccValue = acc[el];
      currentAccValue[next] = (currentAccValue[next] || 0) + 1;
    }

    return acc;
  }, {});

  return _.mapValues(valueOccurrences, (value) => calculateProbabilitiesFromOccurrences(value));
};

// console.log(calculateProbabilities([1, 3, 1, 5, 1]));
/*
{
  1: { 3: 0.5, 5: 0.5 },
  3: { 1: 1 },
  5: { 1: 1 },
};
* */

// console.log(calculateProbabilities([1, 3, 1, 5, 1, 2, 1, 6, 1, 5, 7]));
/*
{
  1: {
      2: 0.25,
      3: 0.25,
      5: 0.25,
      6: 0.25,
    },
  2: { 1: 1 },
  3: { 1: 1 },
  5: { 1: 1 },
  6: {},
};
*/

export default calculateProbabilities;
// END
