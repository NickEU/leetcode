'use strict';
// Given an array of integers, return indices of the two numbers
// such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//bad brute force solution O(n^2) time O(n) space
const twoSum = function(nums, target) {
  const remainders = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < remainders.length; j++) {
      if (nums[i] === remainders[j][0]) {
        return [i, remainders[j][1]];
      }
    }
    remainders.push([target - nums[i], i]);
  }
};

console.log(twoSum([2, 4, 6, 9], 10));
