'use strict';

// Given two integers dividend and divisor, divide two integers
// without using multiplication, division and mod operator.

// Return the quotient after dividing dividend by divisor.

// The integer division should truncate toward zero,
// which means losing its fractional part.
// For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

// Both dividend and divisor will be 32-bit signed integers.
// The divisor will never be 0.
// Assume we are dealing with an environment which could
// only store integers within the 32-bit signed integer
// range: [−2^31,  2^31 − 1].
// For the purpose of this problem, assume that your function
// returns 2^31 − 1 when the division result overflows.

/**
* @param {number} dividend
* @param {number} divisor
* @return {number}
*/
// solved using subtraction
const divide = function(dividend, divisor) {
  let result = 0,
    negativeDivisor = false,
    resultUpperLimit = 2147483647;

  if (divisor < 0 && dividend < 0) {
    divisor = -divisor;
    dividend = -dividend;
  } else if (divisor < 0) {
    divisor = -divisor;
    negativeDivisor = true;
    resultUpperLimit = 2147483648;
  } else if (dividend < 0) {
    dividend = -dividend;
    negativeDivisor = true;
    resultUpperLimit = 2147483648;
  }

  if (Math.abs(divisor) !== 1) {
    while (divisor <= dividend && result < resultUpperLimit) {
      dividend -= divisor;
      result++;
    }
  } else {
    result = dividend >= resultUpperLimit ? resultUpperLimit : dividend;
  }

  return negativeDivisor ? -result : result;

};

console.log(divide(10, 3) === 3);
console.log(divide(7, -3) === -2);
