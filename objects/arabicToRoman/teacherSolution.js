const numerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const sortedNumerals = Object.entries(numerals)
  .sort(([, arabic1], [, arabic2]) => Math.sign(arabic2 - arabic1));

export const toRoman = (number) => {
  let digit = number;
  const result = [];
  for (const [roman, arabic] of sortedNumerals) {
    const repetitionsCount = Math.floor(digit / arabic);
    digit -= repetitionsCount * arabic;
    result.push(roman.repeat(repetitionsCount));
  }

  return result.join('');
};

export const toArabic = (romanNumber) => {
  let result = 0;
  let currentLine = romanNumber;
  for (const [roman, arabic] of sortedNumerals) {
    while (currentLine.indexOf(roman) === 0) {
      result += arabic;
      currentLine = currentLine.slice(roman.length);
    }
  }

  if (toRoman(result) !== romanNumber) {
    return false;
  }

  return result;
};
