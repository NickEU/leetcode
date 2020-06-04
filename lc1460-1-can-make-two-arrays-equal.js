'use strict';
// Given two integer arrays of equal length target and arr.
// In one step, you can select any non-empty sub-array of arr
// and reverse it. You are allowed to make any number of steps.

// Return True if you can make arr equal to target, or False otherwise.

// Constraints:

// target.length == arr.length
// 1 <= target.length <= 1000
// 1 <= target[i] <= 1000
// 1 <= arr[i] <= 1000


/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
// O(nlogn) time O(n) space
const canBeEqual = function(target, arr) {
  const targetCopy = target.slice();
  const arrCopy = arr.slice();

  const ascComparator = (a, b) => a - b;
  targetCopy.sort(ascComparator);
  arrCopy.sort(ascComparator);

  let canBeEqual = true;
  for (let i = 0; i < arrCopy.length; i++) {
    if (targetCopy[i] !== arrCopy[i]) {
      canBeEqual = false;
      break;
    }
  }
  return canBeEqual;
};

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]) === true);
console.log(canBeEqual([7], [7]) === true);
console.log(canBeEqual([1, 12], [12, 1]) === true);
console.log(canBeEqual([3, 7, 9], [3, 7, 11]) === false);
console.log(canBeEqual([1, 1, 1, 1, 1], [1, 1, 1, 1, 1]) === true);
