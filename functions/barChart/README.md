## barChart.js

Implements and exports by default a function that displays a bar chart. The function takes as input a number sequence, whose length is equal to the number of bars in the chart. The vertical size is determined by the input data.

```js
import barChart from '../solution.js';

barChart([5, 10, -5, -3, 7]);
// =>  *
//     *
//     *
//     *  *
//     *  *
//    **  *
//    **  *
//    **  *
//    **  *
//    **  *
//      ##
//      ##
//      ##
//      #
//      #

barChart([5, -2, 10, 6, 1, 2, 6, 4, 8, 1, -1, 7, 3, -5, 5]);
// =>   *
//      *
//      *     *
//      *     *  *
//      **  * *  *
//    * **  * *  *  *
//    * **  ***  *  *
//    * **  ***  ** *
//    * ** ****  ** *
//    * ******** ** *
//     #        #  #
//     #           #
//                 #
//                 #
//                 #
```
