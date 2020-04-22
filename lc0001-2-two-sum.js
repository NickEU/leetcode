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

// using a better data structure

const twoSum = function(nums, target) {
  const remainders = {};

  for (let i = 0; i < nums.length; i++) {
    if (remainders[nums[i]] !== undefined) {
      return [i, remainders[nums[i]]];
    }

    remainders[target - nums[i]] = i;
  }
};

console.log(twoSum([2, 4, 6, 9], 10));
