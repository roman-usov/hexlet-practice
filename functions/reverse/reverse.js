// @ts-check

// BEGIN (write your solution here)
const reverse = (str) => {
  if (str.length === 0) return str;

  const last = str.slice(-1);
  const rest = str.slice(0, -1);

  return `${last}${reverse(rest)}`;
};

console.log(reverse('abc')); // [-1, 1, -3]

export default reverse;
// END
