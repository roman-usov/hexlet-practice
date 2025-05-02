Managing dependencies is a critical software development task. An app usually uses a multitude of external components, which, in turn, may depend on other components. One of the tasks that a dependency manager handles is installing dependencies in the right order. Libraries utilized by other components must be installed first. The approach used to determine the sequence is based on sorting a graph.

## sortDependencies.js

Implements and exports a default function that takes in a list of dependencies and returns a list (array) of sorted nodes.

Implements and exports a default function that takes in an array and returns its flattened version.

```js
const deps1 = {
  mongo: [],
  tzinfo: ['thread_safe'],
  uglifier: ['execjs'],
  execjs: ['thread_safe', 'json'],
  redis: [],
};

console.log(sortDeps(deps1));
// => ['mongo', 'thread_safe', 'tzinfo', 'json', 'execjs', 'uglifier', 'redis'];
```
