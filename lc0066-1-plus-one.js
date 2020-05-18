'use strict';

// Given a non-empty array of digits representing
// a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit
// is at the head of the list,
// and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero,
// except the number 0 itself.

/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = function(digits) {
  const result = [...digits];

  for (let i = digits.length - 1; i >= 0; i--) {
    result[i] += 1;
    if (result[i] === 10) {
      result[i] = 0;
      if (i === 0) {
        result.unshift(1);
        return result;
      }
    } else {
      return result;
    }
  }

};

console.log(JSON.stringify(plusOne([1, 2, 3])) === '[1,2,4]');
console.log(JSON.stringify(plusOne([9, 9])) === '[1,0,0]');
console.log(JSON.stringify(plusOne([4, 3, 2, 1])) === '[4,3,2,2]');
