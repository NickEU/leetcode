'use strict';
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const twoSum = function(result, arr, targetIdx) {
  const targetSum = -arr[targetIdx];
  const hashT = {};
  for (let i = 0; i < arr.length; i++) {
    if (i === targetIdx) {
      continue;
    }
    const currEl = arr[i];
    if (hashT[currEl] === true) {
      const potentialTriplet =
      [-targetSum, targetSum - currEl, currEl].sort((a, b) => a - b);
      if (tripletExistsAndNotDuplicate(result, potentialTriplet)) {
        result.push(potentialTriplet);
      }
    } else {
      hashT[targetSum - currEl] = true;
    }
  }

  return false;
};

const threeSum = function(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    twoSum(result, nums, i);
  }
  return result;
};

function tripletExistsAndNotDuplicate(arr, potentialTriplet) {
  if (!Array.isArray(potentialTriplet)) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    const currTriplet = arr[i];
    if (currTriplet[0] === potentialTriplet[0] &&
    currTriplet[1] === potentialTriplet[1] &&
    currTriplet[2] === potentialTriplet[2]) {
      return false;
    }
  }

  return true;
}

//console.log(twoSum([2, -2, 4, -5, 7], 3));
//console.log(threeSum([0, 0]));
//console.log(threeSum([-1, 0, 1, 2, -1, -4]));
//console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
//console.log(threeSum(
//[-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]));
const arr = [-7, -5, 5, -6, -2, 1, 7, 3,
  -4, -2, -2, -4, -8, -1, 8, 8,
  -2, -7, 3, 2, -7, 8, -3, -10, 5, 2, 8, 7, 7];
console.log(threeSum(arr));
