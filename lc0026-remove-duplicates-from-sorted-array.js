'use strict';

// Given a sorted array nums, remove the duplicates in-place
// such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this
// by modifying the input array in-place with O(1) extra memory.

/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    while (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
    }
  }
  return nums.length;
};

console.log(removeDuplicates([1, 2, 3, 3, 4]));
