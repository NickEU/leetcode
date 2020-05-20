'use strict';
// Given a sorted (in ascending order) integer array nums
// of n elements and a target value, write a function
// to search target in nums. If target exists,
// then return its index, otherwise return -1.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//using indices, better space && time complexity
const search = function(nums, target) {
  let startIdx = 0, endIdx = nums.length - 1;
  let cutOff;
  while (true) {
    if (cutOff === endIdx || cutOff === startIdx) {
      if (nums[endIdx] === target) {
        return endIdx;
      } else if (nums[startIdx] === target) {
        return startIdx;
      } else {
        return -1;
      }
    }
    if (!cutOff) {
      cutOff = Math.floor((endIdx - startIdx) / 2);
    }
    if (target > nums[cutOff]) {
      startIdx = cutOff;
    } else {
      endIdx = cutOff;
    }
    cutOff = startIdx + Math.floor((endIdx - startIdx) / 2);
  }
};

const testArr = [...Array(50).keys()].map(x => ++x);
console.log(search(testArr, 18) === 17);
console.log(search(testArr, 27) === 26);
console.log(search(testArr, 50) === 49);
console.log(search(testArr, 0) === -1);
console.log(search(testArr, -5) === -1);
