/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// using a better data structure
// Runtime: 52 ms, faster than 94.11% of JavaScript online submissions for Two Sum.

var twoSum = function(nums, target) {
  let remainders = {};

  for (let i = 0; i < nums.length; i++) {
    //console.log(remainders);
    if (remainders[nums[i]] !== undefined) {
      return [i, remainders[nums[i]]];
    }

    remainders[target - nums[i]] = i;
  }
};
