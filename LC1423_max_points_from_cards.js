'use strict';

// There are several cards arranged in a row,
// and each card has an associated number of points
// The points are given in the integer array cardPoints.

// In one step, you can take one card from the beginning
// or from the end of the row. You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken.

// Given the integer array cardPoints and the integer k,
// return the maximum score you can obtain.

// Constraints:

// 1 <= cardPoints.length <= 10^5
// 1 <= cardPoints[i] <= 10^4
// 1 <= k <= cardPoints.length


/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore = function(cardPoints, k) {
  const lastElIdx = cardPoints.length - 1;
  let currentScore = 0;

  // get k elements going right
  let i = 0;
  for (let j = 0; j < k; i++, j++) {
    currentScore += cardPoints[i];
  }
  i--;

  let maxScore = currentScore;

  if (k === cardPoints.length) {
    return maxScore;
  }

  // slide left by one el each step
  // each time check intermidiary sum for new max
  for (let j = lastElIdx; j > lastElIdx - k; i--, j--) {
    if (i === -1) {
      i = lastElIdx;
    }

    currentScore += cardPoints[j] - cardPoints[i];
    if (currentScore > maxScore) {
      maxScore = currentScore;
    }
  }

  return maxScore;

};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3) === 12);
console.log(maxScore([2, 2, 2], 2) === 4);
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7) === 55);
console.log(maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3) === 202);
console.log(maxScore([1, 1000, 1], 1) === 1);
