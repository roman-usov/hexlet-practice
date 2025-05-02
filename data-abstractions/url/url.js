// @ts-check
/* eslint no-param-reassign: ["error", { "props": false }] */

// BEGIN (write your solution here)
const make = (url) => new URL(url);

const setProtocol = (data, protocol) => {
  data.protocol = protocol.slice(-1) === ':' ? protocol : `${protocol}:`;
};

const getProtocol = (data) => data.protocol;

const setHost = (data, host) => {
  data.host = host;
};

const getHost = (data) => data.host;

const setPath = (data, path) => {
  data.pathname = path;
};

const getPath = (data) => data.pathname;

const setQueryParam = (data, key, value) => {
  data.searchParams.set(key, value);
};

const getQueryParam = (data, paramName, defaultValue = null) => data.searchParams.get(paramName)
  || defaultValue;

const toString = (data) => data.href;

export {
  make,
  setProtocol,
  getProtocol,
  setHost,
  getHost,
  setPath,
  getPath,
  setQueryParam,
  getQueryParam,
  toString,
};

// END


// @ts-check
// BEGIN (write your solution here)

// END
