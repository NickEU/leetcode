'use strict';

// Given an integer n, return a string with n characters
// such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters.
// If there are multiples valid strings, return any of them.

/**
 * @param {number} n
 * @return {string}
 */

const generateTheString = n => {
  const result = Array(n).fill('a');
  if (n % 2 === 0) {
    result[0] = 'b';
  }
  return result;
};

generateTheString(5);
