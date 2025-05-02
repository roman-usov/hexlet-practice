// @ts-check

// BEGIN (write your solution here)
const getIntersectionIndices = (baseArray, lookupArray) => {
  const intersections = [];

  for (let i = 0; i < baseArray.length; i += 1) {
    const current = baseArray[i];

    if (lookupArray.includes(current)) {
      intersections.push(i);
    }
  }

  return intersections;
};

const addUniqueItems = (targetArr, sourceArr) => {
  return sourceArr.reduce((acc, el) => {
    if (acc.includes(el)) {
      return acc;
    }

    return [...acc, el];
  }, targetArr);
};

const sortDeps = (input, originalDeps = null) => {
  if (originalDeps === null) {
    originalDeps = input;
  }

  const originalDependencies = Object.entries(originalDeps);
  const componentsAndDependencies = Object.entries(input);

  if (componentsAndDependencies.length === 0) return [];

  const processedComponents = [];
  const components = Object.keys(originalDeps);

  return componentsAndDependencies.reduce(
    (result, [currentComponent, currentDependencies], i, arr) => {
      if (processedComponents.includes(i)) return result;

      const currentDependenciesToAdd = [
        ...currentDependencies,
        currentComponent,
      ];

      if (currentDependencies.length === 0) {
        return addUniqueItems(result, [currentComponent]);
      } else {
        const intersectionIndices = getIntersectionIndices(
          components,
          currentDependencies,
        );

        if (intersectionIndices.length === 0) {
          return addUniqueItems(result, currentDependenciesToAdd);
        } else {
          let interDependencies = [...result];

          intersectionIndices.forEach((index) => {
            processedComponents.push(index);
            const dependencyItem = Object.fromEntries([
              originalDependencies.at(index),
            ]);
            const processedDependencies = sortDeps(
              dependencyItem,
              originalDeps,
            );
            interDependencies = addUniqueItems(
              interDependencies,
              processedDependencies,
            );
          });

          return addUniqueItems(interDependencies, currentDependenciesToAdd);
        }
      }
    },
    [],
  );
};

// const reducedVersion = (input) => {
//   const componentsAndDependencies = Object.entries(input);
//
//   const iterate = (componentsDependenciesArray) => {
//     if (componentsDependenciesArray.length === 0) return;
//
//     const processedComponents = [];
//     const components = Object.keys(input);
//
//     return componentsDependenciesArray.reduce((result, [currentComponent, currentDependencies], i) => {
//       if (processedComponents.includes(i)) return result;
//
//       const currentDependenciesToAdd = [...currentDependencies, currentComponent];
//
//       if (currentDependencies.length === 0) {
//         return addUniqueItems(result, [currentComponent]);
//       } else {
//         const intersectionIndices = getIntersectionIndices(components, currentDependencies);
//
//         if (intersectionIndices.length === 0) {
//           return addUniqueItems(result, currentDependenciesToAdd);
//         } else {
//           let interDependencies = [...result];
//
//           intersectionIndices.forEach((index) => {
//             processedComponents.push(index);
//             const dependencyItem = [componentsAndDependencies.at(index)];
//             const processedDependencies = iterate(dependencyItem);
//             interDependencies = addUniqueItems(interDependencies, processedDependencies);
//           });
//
//           return addUniqueItems(interDependencies, currentDependenciesToAdd);
//         }
//       }
//     }, []);
//   };
//
//   return iterate(componentsAndDependencies);
// };

const sortDependencies = (input) => {
  let sorted = [];

  const iterate = (deps) => {
    // Components are keys in the provided dependencies object
    // Dependencies are an array of dependencies associated with a particular component
    // An item is component with its dependencies,
    // i.e a key-value pair from the provided dependencies object

    const componentsAndDependencies = Object.entries(deps);

    if (componentsAndDependencies.length === 0) return;

    const [firstItem, ...rest] = componentsAndDependencies;

    const [componentOne, dependenciesOfComponentOne] = firstItem;

    const remainingItems = Object.fromEntries(rest);
    const remainingComponents = Object.keys(remainingItems);

    if (dependenciesOfComponentOne.length === 0) {
      sorted.push(componentOne);
      iterate(remainingItems);
    } else {
      const intersectionIndex = getIntersection(
        remainingComponents,
        dependenciesOfComponentOne,
      );

      if (intersectionIndex === null) {
        sorted = dependenciesOfComponentOne.reduce((acc, dependency) => {
          if (acc.includes(dependency)) {
            return acc;
          }

          return [...acc, dependency];
        }, sorted);

        sorted = sorted.includes(componentOne)
          ? sorted
          : [...sorted, componentOne];

        iterate(remainingItems);
      } else {
        const dependencyComponent = rest.at(intersectionIndex);
        const remainingComponentsAndDependencies = [
          dependencyComponent,
          firstItem,
          ...rest.slice(0, intersectionIndex),
          ...rest.slice(intersectionIndex + 1),
        ];
        const remaining = Object.fromEntries(
          remainingComponentsAndDependencies,
        );
        iterate(remaining);
      }
    }
  };

  iterate(input);

  return sorted;
};

const dfs = (input) => {
  const nodesToVisit = Object.keys(input);
  const inProgress = new Set();

  const visit = (nodes, currentlySorted) => nodes.reduce((acc, node) => {
    if (inProgress.has(node)) {
      throw new Error('A cycle dependency detected');
    }

    if (acc.includes(node)) {
      return acc;
    }

    inProgress.add(node);

    const deps = input[node] || [];

    const updatedAcc = deps.length > 0 ? visit(deps, acc) : acc;

    inProgress.delete(node);

    return [...updatedAcc, node];
  }, currentlySorted);

  return visit(nodesToVisit, []);
};

/*
In this implementation:

The visit function takes nodes (the nodes to visit) and currentlySorted (the current state of the sorted nodes).
It uses reduce() to iterate over nodes, processing each one and its dependencies.
The accumulator (acc) in reduce() is initialized with currentlySorted to maintain the current state of the sorted nodes.
The visit function is called recursively for each node's dependencies, passing the updated accumulator as an argument. This ensures that currentlySorted is always up to date during the recursive calls.
This approach leverages reduce() to streamline the sorting process and maintain the correct order of nodes, ensuring that the DFS logic is respected throughout the sorting process.
* */


// TEACHER's SOLUTION

/*
// BEGIN
export default (deps) => {
  const add = (acc, node) => {
    const subDeps = deps[node] || [];
    const subAcc = subDeps.reduce(add, []);
    return { ...acc, ...subAcc, [node]: true };
  };
  const set = Object.keys(deps).reduce(add, {});
  return Object.keys(set);
};
// END
* */

const deps1 = {
  mongo: [],
  uglifier: ['execjs'],
  tzinfo: ['thread_safe'],
  execjs: ['thread_safe', 'json'],
  redis: [],
};

const deps2 = {
  mongo: [],
  uglifier: ['execjs', 'thread_safe'],
  tzinfo: ['thread_safe'],
  uglifier1: ['execjs'],
  execjs: ['thread_safe', 'json'],
  thread_safe: ['bla'],
  redis: [],
};

const deps3 = {
  wrong: ['predicated', 'sexp_processor'],
  xpath: ['nokogiri'],
  predicated: ['htmlentities'],
  sexp_processor: [],
  nokogiri: ['wrong'],
  virtus: [],
};

const deps4 = {
  wrong: ['predicated', 'sexp_processor'],
  xpath: ['nokogiri'],
  predicated: ['htmlentities'],
  sexp_processor: [],
  nokogiri: ['wrong', 'libxml2'],
  libxml2: ['libxslt'],
  virtus: [],
};

// console.log(sortDependencies(deps1));
// => ['mongo', 'thread_safe', 'tzinfo', 'json', 'execjs', 'uglifier', 'redis'];

// console.log(sortDependencies(deps2));

// console.log(reducedVersion(deps1));
// console.log(sortDeps(deps2));
// console.log(sortDeps(deps1));
// console.log(sortDeps(deps3));
// console.log(sortDeps(deps4));

console.log(dfs(deps3));


// DFS Classical

/*
const dfs = (input) => {
  let sorted = [];
  const nodesToVisit = Object.keys(input);
  const inProgress = new Set();

  const visit = (n) => {
    if (inProgress.has(n)) {
      console.error('A cycle dependency detected');
    }

    if (sorted.includes(n)) {
      return;
    }

    inProgress.add(n);

    const deps = input[n];

    if (deps) {
      for (const dep of deps) {
        if (!sorted.includes(dep)) {
          visit(dep);
        }
      }
    }

    inProgress.delete(n);
    sorted.push(n);
  };

  for (const node of nodesToVisit) {
    visit(node);
  }

  return sorted;
};

export default dfs;
// END
* */


export default dfs;
// END
