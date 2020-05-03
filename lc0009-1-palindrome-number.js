'use strict';
// Determine whether an integer is a palindrome.
// An integer is a palindrome when
// it reads the same backward as forward.

/**
 * @param {number} x
 * @return {boolean}
 */
// solved using integers, without converting to a string
const isPalindrome = function(x) {
  if ((x % 10 === 0 && x !== 0) || x < 0) {
    return false;
  }
  let temp = 0;
  const start = x;

  while (x > 0) {
    if (temp !== 0) {
      temp *= 10;
    }
    temp += x % 10;
    x = Math.floor(x / 10);
  }

  return temp === start;
};

console.log(isPalindrome(121) === true);
console.log(isPalindrome(-121) === false);
console.log(isPalindrome(10) === false);
