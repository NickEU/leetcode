'use strict';
// Given a non-empty array of integers, return
// the third maximum number in this array.
// If it does not exist, return the maximum number.
// The time complexity must be in O(n).

/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function(nums) {
  let max1 = -Infinity, max2 = max1, max3 = max1;
  for (let i = 0; i < nums.length; i++) {
    const curEl = nums[i];
    if (curEl > max3) {
      if (curEl > max2) {
        if (curEl > max1) {
          max3 = max2;
          max2 = max1;
          max1 = curEl;
        } else if (curEl !== max1) {
          max3 = max2;
          max2 = curEl;
        }
      } else if (curEl !== max2) {
        max3 = curEl;
      }
    }
  }

  return max3 !== -Infinity ? max3 : max1;
};

console.log(thirdMax([1, 1, 2]) === 2);
console.log(thirdMax([1, 2]) === 2);
console.log(thirdMax([2, 2, 3, 1]) === 1);
console.log(thirdMax([5, 2, 2]) === 5);
console.log(thirdMax([2, 2, 3, 1]) === 1);
console.log(thirdMax([1, -2147483648, 2]) === -2147483648);
