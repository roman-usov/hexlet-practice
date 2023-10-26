This mini-project implement and exports a default function that compares the given versions `version1` and `version2`. If `version1` > `version2`, the function should return `1`. If `version1` < `version2`, the function should return `-1`. If `version1` is equal to `version2`, the function should return `0`.

A version is a string where two numbers (major and minor versions) are separated by a dot, for instance: 12.11. It's essential to understand that a version is not a floating-point number, but several numbers unrelated to each other. The comparison for greater or lesser is carried out by comparing each number independently. Therefore, version 0.12 is greater than version 0.2.

Version Order Example:
0.1 < 1.1 < 1.2 < 1.11 < 13.37

Usage Examples:

```javascript
compareVersion('0.1', '0.2'); // returns -1
compareVersion('0.2', '0.1'); // returns 1
compareVersion('4.2', '4.2'); // returns 0
```

Notes:
For more information about versioning, refer to Semantic Versioning.
