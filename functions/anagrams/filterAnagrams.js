// @ts-check

// BEGIN (write your solution here)
const filterAnagrams = (word, collection) => {
  const getCharCounts = (str) => [...str].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const isAnagram = (baseWord, wordToTest) => {
    if (baseWord.length !== wordToTest.length) return false;

    const charCounts1 = getCharCounts(baseWord);
    const charCounts2 = getCharCounts(wordToTest);
    const entries1 = Object.entries(charCounts1);

    return entries1.every(
      ([key, value]) => charCounts2[key] && charCounts2[key] >= value,
    );
  };

  return collection.filter((currWord) => isAnagram(word, currWord));
};

// console.log(filterAnagrams('abba', ['aabb', 'abcd']));
// console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(
  filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']),
);

// BEGIN
const teacherSolution = (word, words) => {
  const normalize = (str) => str.split('').sort().join('');
  const normal = normalize(word);

  return words.filter((item) => normalize(item) === normal);
};
// END
export default filterAnagrams;
// END
