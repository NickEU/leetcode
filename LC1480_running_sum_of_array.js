'use strict';

// Given an array nums. We define a running sum
// of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.


/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
  return nums.reduce(
    (acc, val) => acc.push(val + (acc[acc.length - 1] || 0)) && acc, []);
};

const testIfMatches = function(actual, expected) {
  console.log(actual === expected);
};

{
  const actual = JSON.stringify(runningSum([1, 2, 3, 4]));
  const expected = '[1,3,6,10]';
  testIfMatches(actual, expected);
}

{
  const actual = JSON.stringify(runningSum([3, 1, 2, 10, 1]));
  const expected = '[3,4,6,16,17]';
  testIfMatches(actual, expected);
}

{
  const actual = JSON.stringify(runningSum([1, 1, 1, 1, 1]));
  const expected = '[1,2,3,4,5]';
  testIfMatches(actual, expected);
}

