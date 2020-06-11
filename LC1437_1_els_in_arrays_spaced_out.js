'use strict';
//Given an array nums of 0s and 1s and an integer k,
//return True if all 1's are at least k places away
//from each other, otherwise return False.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

const kLengthApart = function(nums, k) {
  let currDistance;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (currDistance < k) {
        return false;
      } else {
        currDistance = 0;
      }
    } else {
      currDistance++;
    }
  }
  return true;
};

console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2));
console.log(!kLengthApart([1, 0, 0, 1, 0, 1], 2));
console.log(kLengthApart([1, 1, 1, 1, 1], 0));
console.log(kLengthApart([0, 1, 0, 1], 1));
