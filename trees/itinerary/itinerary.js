// @ts-check

import _ from 'lodash';

const cityTree = [
  'Moscow',
  [
    ['Smolensk'],
    ['Yaroslavl'],
    ['Voronezh',
      [
        ['Liski'],
        // ['Boguchar'],
        // ['Kursk', [['Belgorod', [['Borisovka']]], ['Kurchatov']]],
      ],
    ],
    // ['Ivanovo', [['Kostroma'], ['Kineshma']]],
    // ['Vladimir'],
    // ['Tver', [['Klin'], ['Dubna'], ['Rzhev']]],
  ],
];

// BEGIN (write your solution here)
/*
1) Find a given city
When we found the location of the city, we need to save the root to it.

* */

/*
const findDirectRouteToCity = (tree, city, route = [], initial = true) => {
  // This condition checks that the provided tree contains the given city.
  if (initial) {
    if (!_.flattenDeep(tree).includes(city)) return [];
  }

  // This condition means that we've received an array containing the target city.
  if (tree.includes(city)) return [...route, city];

  const [currentLocation, ...remainingLocations] = tree;

  // This condition checks if the current location, whether a string or an array, contains the target city.
  if (currentLocation === city || currentLocation[0] === city) {
    return [...route, city];
  }

  // This condition checks if the current location is a city name.
  // We check if the nested cities have the target city, and if so supply them as the next tree.
  if (typeof currentLocation === 'string') {
    const listOfRemainingLocations = _.flattenDeep(remainingLocations);

    if (listOfRemainingLocations.includes(city)) {
      return findDirectRouteToCity(remainingLocations.flat(), city, [
        ...route,
        currentLocation,
        ],
        false);
    }
  }

  // This condition checks if the current location is an array of more than one element.
  // If so, we check if the nested cities inside the array have the target city.
  // If so, we supply them as the next tree.
  if (currentLocation.length > 1) {
    const [cityInCurrent, remainingLocationsInCurrent] = currentLocation;

    const listOfRemainingLocationsInCurrent = _.flattenDeep(
      remainingLocationsInCurrent,
    );

    if (listOfRemainingLocationsInCurrent.includes(city)) {
      return findDirectRouteToCity(remainingLocationsInCurrent, city, [
        ...route,
        cityInCurrent,
        ],
        false);
    }
  }

  // If we haven't identified the target city, then we skip the current element, and proceed to the next.
  return findDirectRouteToCity(remainingLocations, city, route, false);
};

*/

const test = ['Moscow', [['Tver'], ['Saratov', ['Klen']]]];

const test1 = [
  'Kursk',
  [['Khor', [['Drozh']]], ['Belgorod', [['Borisovka']]], ['Kurchatov']],
];

const findDirectRouteToCity = (tree, targetCity) => {
  if (tree.length === 1) {
    return tree.flat()[0] === targetCity ? [targetCity] : [];
  }

  if (tree.length === 0) return tree;

  const firstLocation = tree[0];

  if (firstLocation === targetCity) {
    return [firstLocation];
  }

  if (typeof firstLocation === 'string') {
    const remainingLocations = tree[1];
    const foundCitiesOnRoute = findDirectRouteToCity(
      remainingLocations,
      targetCity,
    );

    if (foundCitiesOnRoute.includes(targetCity)) {
      return [firstLocation, ...foundCitiesOnRoute];
    }

    return [];
  }

  for (let i = 0; i < tree.length; i += 1) {
    const current = tree[i];

    const foundCitiesOnRoute = findDirectRouteToCity(current, targetCity);

    if (foundCitiesOnRoute.includes(targetCity)) {
      return [...foundCitiesOnRoute];
    }
  }

  return [];
};

// console.log(findDirectRouteToCity(cityTree, 'Dubna'));
// console.log(findDirectRouteToCity(cityTree, 'Borisovka'));

// const itinerary = (tree, departure, destination) => {
//   const allCities = _.flattenDeep(tree);
//
//   if (!allCities.includes(departure) || !allCities.includes(destination)) {
//     return [];
//   }
//
//   const directToDeparture = findDirectRouteToCity(tree, departure);
//   const directToDestination = findDirectRouteToCity(tree, destination);
//
//   let route;
//
//   for (let i = 0; i < directToDeparture.length; i += 1) {
//     const currentOnDepartureRoute = directToDeparture[i];
//     const nextOnDepartureRoute = directToDeparture[i + 1];
//     const currentOnDestinationRoute = directToDestination[i];
//     const nextOnDestinationRoute = directToDestination[i + 1];
//
//     if (
//       currentOnDepartureRoute === currentOnDestinationRoute &&
//       nextOnDepartureRoute !== nextOnDestinationRoute
//     ) {
//       const departureRouteLeg = directToDeparture.slice(i + 1).reverse();
//       const destinationRouteLeg = directToDestination.slice(i);
//
//       route = [...departureRouteLeg, ...destinationRouteLeg];
//       break;
//     }
//   }
//
//   return route;
// };

// console.log(itinerary(cityTree, 'Dubna', 'Kostroma'));
// ['Dubna', 'Tver', 'Moscow', 'Ivanovo', 'Kostroma']

// console.log(itinerary(cityTree, 'Borisovka', 'Kurchatov'));
// ['Borisovka', 'Belgorod', 'Kursk', 'Kurchatov']

// Teacher's Solution

// BEGIN
const getJunctions = (tree, parent) => {
  const [leaf, children] = tree;

  if (!children) {
    return { [leaf]: [parent] };
  }

  const flatChildren = _.flatten(children);

  const neighbors = [...flatChildren, parent]
    .filter((neighbor) => neighbor && !_.isArray(neighbor));

  const junctions = children
    .reduce((acc, child) => ({ ...acc, ...getJunctions(child, leaf) }), {});

  return { [leaf]: neighbors, ...junctions };
};

/*
Kursk

neigbors [ 'Belgorod', 'Kurchatov', 'Voronezh' ]

junctions {
  Belgorod: [ 'Borisovka', 'Kursk' ],
  Borisovka: [ 'Belgorod' ],
  Kurchatov: [ 'Kursk' ]
}

result {
  Kursk: [ 'Belgorod', 'Kurchatov', 'Voronezh' ],
  Belgorod: [ 'Borisovka', 'Kursk' ],
  Borisovka: [ 'Belgorod' ],
  Kurchatov: [ 'Kursk' ]
}
* */

const findRoute = (start, finish, junctions) => {
  const iter = (current, currentRoute) => {
    console.log('current', current);
    const routeToCurrent = [...currentRoute, current];
    console.log('routeToCurrent', routeToCurrent);

    if (current === finish) {
      return routeToCurrent;
    }

    const neighbors = junctions[current];
    console.log('neigbors', neighbors);
    const filteredNeighbors = neighbors
      .filter((neighbor) => !routeToCurrent.includes(neighbor));
    console.log('filtered', filteredNeighbors);

    const route = filteredNeighbors
      .reduce((acc, neighbor) => _.concat(acc, iter(neighbor, routeToCurrent)), []);

    console.log('reduced', route);
    return route;
  };

  return iter(start, []);
};

const junc = getJunctions(cityTree);
console.log('junctions', junc);
console.log(findRoute('Liski', 'Smolensk', junc));

const itinerary = (tree, start, finish) => {
  const joints = getJunctions(tree);
  return findRoute(start, finish, joints);
};


// console.log(itinerary(cityTree, 'Borisovka', 'Kurchatov'));
// ['Borisovka', 'Belgorod', 'Kursk', 'Kurchatov']


// END


export default itinerary;
// END
