## solution.js

Implements and exports the `ipToInt()` and `intToIP()` functions that convert an IP address representation from the decimal format with dots into a 32-bit decimal number and back.

`ipToInt()` takes in a string and returns a number. `intToIp()` takes in a number and returns a string.

```js
ipToInt('128.32.10.1'); // 2149583361
ipToInt('0.0.0.0'); // 0
ipToInt('255.255.255.255'); // 4294967295

intToIp(2149583361); // '128.32.10.1'
intToIp(0); // '0.0.0.0'
intToIp(4294967295); // '255.255.255.255'
```
