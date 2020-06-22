'use strict';
// Given an integer array nums,
// find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */

// awful brute force O(n^2) time O(1) space
const maxSubArray = function(nums) {
  let maxSum = -Infinity,
    currSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currSum = 0;
    currSum += nums[i];
    if (currSum > maxSum) {
      maxSum = currSum;
    }
    for (let j = i + 1; j < nums.length; j++) {
      currSum += nums[j];
      if (currSum > maxSum) {
        maxSum = currSum;
      }
    }

  }

  return maxSum;

};


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
console.log(maxSubArray([5]) === 5);
