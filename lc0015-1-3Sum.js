'use strict';
// Given an array nums of n integers, are there
// elements a, b, c in nums such that a + b + c = 0?
// Find all unique triplets in the array which gives the sum of zero.
// The solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// replaced an iliffe vector with a set:
// a far superior option for dealing with duplicates.
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
      result.add(JSON.stringify(potentialTriplet));
    } else {
      hashT[targetSum - currEl] = true;
    }
  }

  return false;
};

const threeSum = function(nums) {
  const setOfTriplets = new Set();
  for (let i = 0; i < nums.length; i++) {
    twoSum(setOfTriplets, nums, i);
  }
  const result = Array.from(setOfTriplets);
  return result.map(el => JSON.parse(el));
};


let expected = JSON.stringify([]);
let actual = JSON.stringify(threeSum([0, 0]));
test(actual, expected);

expected = JSON.stringify([ [ -1, 0, 1 ], [ -1, -1, 2 ] ]);
actual = JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4]));
test(actual, expected);

const inputArr = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
expected = JSON.stringify([
  [ -4, 2, 2 ],
  [ -4, 1, 3 ],
  [ -4, 0, 4 ],
  [ -4, -2, 6 ],
  [ -2, 0, 2 ],
  [ -2, -2, 4 ]
]);
actual = JSON.stringify(threeSum(inputArr));
test(actual, expected);

function test(actual, expected) {
  console.log(actual === expected);
}
