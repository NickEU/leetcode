'use strict';

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */

//brute force solution
const longestSubarray = function(nums, limit) {
  if (nums.length === 1) {
    return 1;
  }
  let result = [];
  for (let i = 0; i < nums.length; i++)     {
    const tempSubArr = [nums[i]];
    let minEl = nums[i], maxEl = nums[i];
    if (result.length > nums.length - i) {
      break;
    }
    for (let j = i + 1; j < nums.length; j++)     {
      const currEl = nums[j];
      if (Math.abs(currEl - minEl) <= limit &&
      Math.abs(currEl - maxEl) <= limit) {
        tempSubArr.push(nums[j]);
        if (j === nums.length - 1 && result.length < tempSubArr.length) {
          i += j - i;
          result = tempSubArr;
        }
        if (currEl < minEl) {
          minEl = currEl;
        }
        if (currEl > maxEl) {
          maxEl = currEl;
        }
      } else {
        if (result.length < tempSubArr.length) {
          result = tempSubArr;
        }
        break;
      }
    }
  }

  return result.length;
};

console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0) === 3);
console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5) === 4);
console.log(longestSubarray([9], 10) === 1);
console.log(longestSubarray([8, 2, 4, 7], 4) === 2);
