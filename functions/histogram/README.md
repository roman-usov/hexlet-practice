A dice is a six-sided cube that is thrown several times. A histogram is a graphical representation of data in the form of bars or columns.

## histogram.js

Implements and exports by default a function that displays a vertical histogram. The function takes as input the number of dice throws and a function that simulates a dice roll. Calling this function generates a value from 1 to 6, corresponding to one of the faces of the dice.

The histogram contains columns, each corresponding to a face of the dice and the number of times that face has come up. The results are displayed graphically (using the '#' symbol) and as a percentage of the total number of throws, except in cases where the count is zero.

Additional conditions:

- Percentage values are aligned to the left of the column.
- The dice face values are centered in the column.
- The columns are separated by a space.
- The number of sections in a column (the height of the column) should correspond to the number of times each side of the dice has come up.
- The standard rounding rules are used to get percentage values.

```js
import displayHistogram from '../histogram.js';

displayHistogram(32, rollDie);
// =>                 28%
//                    ###
//                    ###
//            19%     ###
//            ### 16% ### 16%
//    13%     ### ### ### ###
//    ### 9%  ### ### ### ###
//    ### ### ### ### ### ###
//    ### ### ### ### ### ###
//    ### ### ### ### ### ###
//    -----------------------
//     1   2   3   4   5   6

displayHistogram(13, rollDie);
// =>                 31% 31%
//                    ### ###
//        15%     15% ### ###
//        ### 8%  ### ### ###
//        ### ### ### ### ###
//    -----------------------
//     1   2   3   4   5   6
```
