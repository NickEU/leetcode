'use strict';
// You are given the array paths,
// where paths[i] = [cityAi, cityBi] means
// there exists a direct path going from cityAi to cityBi.
// Return the destination city, that is,
// the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop,
// therefore, there will be exactly one destination city.

/**
 * @param {string[][]} paths
 * @return {string}
 */

const destCity = function(paths) {
  const notDestinations = new Set();
  for (const id in paths) {
    notDestinations.add(paths[id][0]);
  }
  for (const id in paths) {
    const potentialDest = paths[id][1];
    if (!notDestinations.has(potentialDest)) {
      return potentialDest;
    }
  }
};

console.log(destCity([['London', 'New York'],
  ['New York', 'Lima'],
  ['Lima', 'Sao Paulo']]) === 'Sao Paulo');
console.log(destCity([['B', 'C'], ['D', 'B'], ['C', 'A']]) === 'A');
console.log(destCity([['A', 'Z']]) === 'Z');
