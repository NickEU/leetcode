'use strict';
// Given the array candies and the integer extraCandies,
// where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies
// among the kids such that he or she can have
// the greatest number of candies among them.
// Notice that multiple kids can have the greatest number of candies.

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

const kidsWithCandies = function(candies, extraCandies) {
  const maxEl = Math.max(...candies);
  return candies.map(currCandyCount => currCandyCount + extraCandies >= maxEl);
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3).toString() ===
[true, true, true, false, true].toString());

console.log(kidsWithCandies([4, 2, 1, 1, 2], 1).toString() ===
[true, false, false, false, false].toString());
