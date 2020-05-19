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

// bad solution - using an auxiliary array
const search = function(nums, target) {
  let arr = [...nums];
  let cutOff;
  while (true) {
    if (arr.length === 1) {
      if (arr[0] === target) {
        return nums.indexOf(arr[0]);
      } else {
        return -1;
      }
    }

    cutOff = Math.floor(arr.length / 2);
    arr = arr[cutOff] > target ? arr.slice(0, cutOff) : arr.slice(cutOff);
  }
};

const testArr = [...Array(50).keys()].map(x => ++x);
console.log(search(testArr, 18) === 17);
console.log(search(testArr, 27) === 26);
console.log(search(testArr, 50) === 49);
console.log(search(testArr, 0) === -1);
console.log(search(testArr, -5) === -1);
