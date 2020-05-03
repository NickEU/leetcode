'use strict';
// Determine whether an integer is a palindrome.
// An integer is a palindrome when
// it reads the same backward as forward.

/**
 * @param {number} x
 * @return {boolean}
 */
// solved via conversion to a string
const isPalindrome = function(x) {
  if ((x % 10 === 0 && x !== 0) || x < 0) {
    return false;
  }

  const xStr = x.toString();
  const lastElIndex = xStr.length - 1;

  for (let i = 0; i < lastElIndex - i; i++) {
    if (xStr[i] !== xStr[lastElIndex - i]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(121) === true);
console.log(isPalindrome(-121) === false);
console.log(isPalindrome(10) === false);
