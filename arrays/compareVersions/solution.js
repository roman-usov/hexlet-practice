// BEGIN (write your solution here)
const compareVersion = (v1, v2) => {
  const v1Parts = v1.split('.');
  const v2Parts = v2.split('.');

  const maxLength = Math.max(v1Parts.length, v2Parts.length);

  for (let i = 0; i < maxLength; i += 1) {
    const v1Part = v1Parts[i] === undefined ? -1 : Number(v1Parts[i]);
    const v2Part = v2Parts[i] === undefined ? -1 : Number(v2Parts[i]);

    if (v1Part > v2Part) {
      return 1;
    }

    if (v1Part < v2Part) {
      return -1;
    }
  }

  return 0;
};

console.log(compareVersion('1.2.1', '1.2'));
// console.log(compareVersion("0.2", "0.1"));
// console.log(compareVersion("4.2", "4.2"));

export default compareVersion;
// END
