/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// brute force approach
// var twoSum = function(nums, target) {
//     let remainders = [];

//     for(let i = 0; i < nums.length; i++) {
//       for (let j = 0; j < remainders.length; j++) {
//         if (nums[i] === remainders[j][0]) {
//           return [i, remainders[j][1]];
//         }
//       }
//       remainders.push([target - nums[i], i]);
//       //console.log(remainders);
//     }
// };

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
