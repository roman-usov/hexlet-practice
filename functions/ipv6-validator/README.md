## validator.js

Implements an `isValidIPv6()` predicate function that checks a given IPv6 address for validity.

The function takes in an IPv6 address string and returns `true` if the given address is valid and `false` if it's not valid. The function is exported by default.

Additional conditions:

- IPv6 addresses are not case-sensitive
- Leading zeros are not mandatory
- The longest sequence of groups with zeros, e.g. `:0:0:0:`, can be replaced by `::` but only once

```js
isValidIPv6('10:d3:2d06:24:400c:5ee0:be:3d'); // true
isValidIPv6('0B0:0F09:7f05:e2F3:0D:0:e0:7000'); // true
isValidIPv6('000::B36:3C:00F0:7:937'); // true
isValidIPv6('::1'); // true
isValidIPv6('1001:208:67:4f00:e3::2c6:0'); // true

isValidIPv6('2607:G8B0:4010:801::1004'); // false
isValidIPv6('2.001::'); // false
isValidIPv6('9f8:0:69S0:9:9:d9a:672:f90d'); // false
```
