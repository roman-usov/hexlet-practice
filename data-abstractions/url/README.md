## url.js

Implements an abstraction to work with urls. The interface provides the following methods.

- `make(url)` - a constructor. Creates a url.
- `setProtocol(data, protocol)` - a setter. Changes the protocol.
- `getProtocol(data)` - a selector. Gets the protocol.
- `setHost(data, host)` - a setter. Changes the host.
- `getHost(data)` - a getter. Gets the host.
- `setPath(data, path)` - a setter. Changes the query string.
- `getPath(data)` - a getter. Gets the query string.
- `setQueryParam(data, key, value)` - a setter. Sets the value of a query parameter.
- `getQueryParam(data, paramName, defaultValue = null)` - a getter. Gets the value of a query parameter. The third argument is a default value that gets returned if the query string doesn't have the requested parameter.
- `toString(data)` - a getter. Converts the url into a string.

```js
const url = make('https://hexlet.io/community?q=low');

setProtocol(url, 'http:');
toString(url); // 'http://hexlet.io/community?q=low'

setPath(url, '/404');
toString(url); // 'http://hexlet.io/404?q=low'

setQueryParam(url, 'page', 5);
toString(url); // 'http://hexlet.io/404?q=low&page=5'

setQueryParam(url, 'q', 'high');
toString(url); // 'http://hexlet.io/404?q=high&page=5'
```

`url.js` is based on the standard `URL` object, including the `set()` and `get()` methods.
