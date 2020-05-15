'use strict';
// Given an integer array nums,
// find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */
// time O(n) space O(1)
const maxSubArray = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  } else if (nums.length === 0) {
    return null;
  }
  let prevSum = nums[0];
  let largestSum = prevSum;
  for (let i = 1; i < nums.length; i++) {
    const currEl = nums[i];
    prevSum = currEl > prevSum + currEl ? currEl : prevSum + currEl;
    largestSum = Math.max(largestSum, prevSum);
  }

  return largestSum;
};


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
console.log(maxSubArray([]) === null);
console.log(maxSubArray([-1, -2]) === -1);
console.log(maxSubArray([-15, -20, -10]) === -10);
console.log(maxSubArray([5]) === 5);
console.log(maxSubArray([-1, -2, -5, 1, -7]) === 1);
