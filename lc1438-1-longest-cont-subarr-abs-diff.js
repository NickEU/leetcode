'use strict';

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */

//bad brute force solution
const longestSubarray = function(nums, limit) {
  if (nums.length === 1) {
    return 1;
  }
  let result = [];
  for (let i = 0; i < nums.length; i++)     {
    const tempSubArr = [nums[i]];
    let min = nums[i], max = nums[i];
    if (result.length > nums.length - i) {
      break;
    }
    for (let j = i + 1; j < nums.length; j++)     {
      if (Math.abs(nums[j] - min) <= limit &&
      Math.abs(nums[j] - max) <= limit) {
        tempSubArr.push(nums[j]);
        if (j === nums.length - 1 && result.length < tempSubArr.length) {
          result = tempSubArr;
        }
        min = Math.min(...tempSubArr);
        max = Math.max(...tempSubArr);
      } else {
        if (result.length < tempSubArr.length) {
          result = tempSubArr;
        }
        break;
      }
    }
  }
  if (result.length < 1) {
    result = nums[0];
  }
  return result.length;
};

console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0) === 3);
console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5) === 4);
console.log(longestSubarray([9], 10) === 1);
console.log(longestSubarray([8, 2, 4, 7], 4) === 2);
