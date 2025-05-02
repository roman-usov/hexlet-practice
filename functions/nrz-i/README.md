# NRZI Encoding
## Overview

NRZI (Non-Return to Zero Invertive) encoding is a method of line coding. 
It features two signal levels and is used for transmitting bit sequences that contain only 0s and 1s. 
NRZI is commonly used in optical fibers where only two states of the signal – light and dark – are reliably recognized.

### Encoding Principle
During transmission, a logical zero is represented by maintaining the potential set in the previous cycle (i.e., the state of the potential remains unchanged), whereas a logical one is represented by inverting the potential to the opposite state.

### solution.js
Implements and exports by default a function that takes a string representing the graphical depiction of the linear signal and returns a string with the binary code. 

```js
const signal1 = '_|¯|____|¯|__|¯¯¯';
nrzi(signal1); // '011000110100'

const signal2 = '|¯|___|¯¯¯¯¯|___|¯|_|¯';
nrzi(signal2); // '110010000100111'

const signal3 = '¯|___|¯¯¯¯¯|___|¯|_|¯';
nrzi(signal3); // '010010000100111'

const signal4 = '';
nrzi(signal4); // ''

const signal5 = '|';
nrzi(signal5); // ''
```
