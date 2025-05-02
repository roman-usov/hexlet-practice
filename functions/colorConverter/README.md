In HTML and CSS, numbers in the hexadecimal system are used to specify colors. To avoid confusion in identifying the number system, a hash symbol # is placed before the hexadecimal number, for example, #135278. A color designation (rrggbb) is divided into three components, where the first two characters represent the red component of the color, the middle two - the green, and the last two - the blue. Thus, each of the three colors - red, green, and blue - can take values from 00 to FF in the hexadecimal system.

## solution.js

When working with colors, it's often necessary to obtain the individual values of the red, green, and blue (RGB) components of a color in the decimal system and vice versa. Implement and export the functions `rgbToHex()` and `hexToRgb()`, which return the corresponding color representations.

## Examples

```js
hexToRgb('#24ab00'); // { r: 36, g: 171, b: 0 }

rgbToHex(36, 171, 0); // '#24ab00'
```
