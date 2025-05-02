
A dice is a six-sided cube that is thrown several times. A horizontal histogram is a graphical representation of data in the form of horizontal bars.

## histogram.js

Implements and exports by default a function that displays a horizontal histogram. The function takes as input the number of dice throws and a function that simulates a dice roll. Calling this function generates a value from 1 to 6, corresponding to one of the faces of the dice.

The histogram contains rows, each corresponding to a face of the dice and the number of times that face has come up. The results are displayed graphically (using the '#' symbol) and as the total number of throws, except in cases where the count is zero.

```js
import play from '../histogram.js';

play(100, rollDie);
// => 1|####################### 23
//    2|################## 18
//    3|############# 13
//    4|#################### 20
//    5|############ 12
//    6|############## 14

play(13, rollDie);
// => 1|
//    2|## 2
//    3|# 1
//    4|## 2
//    5|#### 4
//    6|#### 4
```
