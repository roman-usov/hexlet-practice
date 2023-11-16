// @ts-check
/* eslint no-restricted-syntax: [off, ForOfStatement] */

// BEGIN (write your solution here)
const arabicToRomanMap = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};

const romanToArabicMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export const toArabic = (romanNum) => {
  let arabicNumber = 0;

  const getRomanGroup = (romanNumber) => {
    for (let i = 0; i < romanNumber.length; i += 1) {
      const current = romanNumber[i];
      const next = romanNumber[i + 1];

      if (current === next) {
        const substring = romanNumber.slice(i);
        const regexp = new RegExp(`${current}+`);
        const match = substring.match(regexp);

        return match[0];
      }

      if (romanToArabicMap[current] < romanToArabicMap[next]) {
        return current + next;
      }

      if (romanToArabicMap[current] > romanToArabicMap[next]) {
        return current;
      }
    }

    return romanNumber;
  };

  const splitToRomanGroups = (inputRomanNum) => {
    let currentRomanNum = inputRomanNum;
    const groups = [];

    while (currentRomanNum) {
      const group = getRomanGroup(currentRomanNum);
      groups.push(group);

      currentRomanNum = currentRomanNum.slice(group.length);
    }

    return groups;
  };

  const getArabicPart = (romanPart) => {
    let number = 0;

    for (let i = 0; i < romanPart.length; i += 1) {
      const current = romanToArabicMap[romanPart[i]];
      const next = romanToArabicMap[romanPart[i + 1]];

      if (current < next) {
        return next - current;
      }

      number += current + (next || 0);
      i += 1;
    }

    return number;
  };

  const isValidRomanGroup = (romanGroup) => {
    if (romanGroup.length > 3) return false;

    if (romanGroup.length === 2) {
      const [first, second] = romanGroup.split('');
      const arabicFirst = romanToArabicMap[first];
      const arabicSecond = romanToArabicMap[second];
      const bases = ['I', 'X', 'C', 'M'];

      if (arabicFirst < arabicSecond && !bases.includes(first)) return false;
    }

    return true;
  };

  const romanGroups = splitToRomanGroups(romanNum);

  for (let i = 0; i < romanGroups.length; i += 1) {
    const current = romanGroups[i];
    const next = romanGroups[i + 1];

    if (!isValidRomanGroup(current)) return false;

    const currentArabic = getArabicPart(current);
    const nextArabic = next ? getArabicPart(next) : 0;

    if (nextArabic > currentArabic) return false;

    arabicNumber += currentArabic;
  }

  return arabicNumber;
};

export const toRoman = (arabicNum) => {
  if (arabicNum < 1 || arabicNum > 3000) {
    return 'Arabic number should be between 1 and 3000';
  }

  const getRangeStartAndEnd = (num, range) => {
    const result = {};

    for (let i = 0; i < range.length - 1; i += 1) {
      const current = range[i];
      const next = range[i + 1];

      if (num >= current && num <= next) {
        result.start = current;
        result.end = next;
      }
    }

    return result;
  };

  const numToRoman = (numStr, range, base) => {
    const num = Number(numStr);

    if (num === 0) return '';

    const { start, end } = getRangeStartAndEnd(num, range);

    if (num === start) return `${arabicToRomanMap[start]}`;

    if (num === end) return `${arabicToRomanMap[end]}`;

    if (end - base === num) {
      return `${arabicToRomanMap[base]}${arabicToRomanMap[end]}`;
    }

    const length = (num - start) / base;
    let result = `${arabicToRomanMap[start]}`;

    for (let i = 1; i <= length; i += 1) {
      result += arabicToRomanMap[base];
    }

    return result;
  };

  const numString = arabicNum.toString().padStart(4, '0');
  const numSplit = numString.split('');
  const [thousands, hundreds, tens, ones] = numSplit;

  const range1 = [1, 5, 10];
  const range10 = [10, 50, 100];
  const range100 = [100, 500, 1000];
  const range1000 = [1000, 3001];
  const [base1] = range1;
  const [base10] = range10;
  const [base100] = range100;
  const [base1000] = range1000;

  const romanThousands = numToRoman(`${thousands}000`, range1000, base1000);
  const romanHundreds = numToRoman(`${hundreds}00`, range100, base100);
  const romanTens = numToRoman(`${tens}0`, range10, base10);
  const romanOnes = numToRoman(`${ones}`, range1, base1);

  return `${romanThousands}${romanHundreds}${romanTens}${romanOnes}`;
};

// END
