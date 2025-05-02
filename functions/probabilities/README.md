Implement and export by default a function that takes as input a history of dice rolls in the form of an array and returns an object. The key of this object is a number from the list, and the value is another object, in which the keys are numbers that immediately followed the original number, and the values are the probability of their occurrence.

For example, if you pass the array [1, 3, 1, 5, 1], the final object will look like this:

```js
{
  1: { 3: 0.5, 5: 0.5 },
  3: { 1: 1 },
  5: { 1: 1 },
};
```

After the number 1, the numbers 3 and 5 occurred with an equal probability of 0.5. And after the numbers 3 and 5, the number 1 always occurred, giving us a probability of 1.

```js
calculateProbabilities([]); // {}
calculateProbabilities([1, 3, 1, 5, 1, 2, 1, 6]);

javascript
Copy code
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
```
