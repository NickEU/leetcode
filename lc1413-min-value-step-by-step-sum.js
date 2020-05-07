'use strict';
// Given an array of integers nums,
// you start with an initial positive value startValue.

// In each iteration, you calculate the step by step sum
// of startValue plus elements in nums (from left to right).

// Return the minimum positive value of startValue such that
// the step by step sum is never less than 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
const minStartValue = function(nums) {
  for (let i = 1; ; i++) {
    let sum = i;
    let j = 0;
    for (; j < nums.length; j++) {
      sum += nums[j];
      if (sum < 1) {
        break;
      }
    }
    if (j === nums.length) {
      return i;
    }
  }
};


console.log(minStartValue([-3, 2, -3, 4, 2]) === 5);
console.log(minStartValue([1, 2]) === 1);
console.log(minStartValue([1, -2, -3]) === 5);
