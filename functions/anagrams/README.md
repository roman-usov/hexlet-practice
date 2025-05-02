## filterAnagrams.js

Anagrams are words comprising the same letters.

`filterAnagrams.js` implements and exports a default function that finds and returns an array of all anagrams of a given word from a provided word collection (array). If there are no anagrams in the given array, the function returns an empty array.

```js
probabilities('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']

probabilities('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']

probabilities('laser', ['lazing', 'lazy', 'lacer']);
// []
```
