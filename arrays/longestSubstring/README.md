# Pascal's Triangle Line Generator

## Overview

Pascal's Triangle is an infinite table of binomial coefficients arranged in a triangular shape. At the apex and along the sides of this triangle are ones. Each number in the triangle is the sum of the two numbers above it. The rows of the triangle are symmetric with respect to the vertical axis.

```text
0:      1
1:     1 1
2:    1 2 1
3:   1 3 3 1
4:  1 4 6 4 1
```

This mini-project implements a default function that returns the specified row of Pascal's triangle as an array.

```js
generate(1); // returns [1, 1]
generate(4); // returns [1, 4, 6, 4, 1]
```
