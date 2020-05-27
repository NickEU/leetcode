'use strict';

// A self-dividing number is a number that is divisible
// by every digit it contains.

// For example, 128 is a self-dividing number because
// 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number
// is not allowed to contain the digit zero.

// Given a lower and upper number bound,
// output a list of every possible self dividing number,
// including the bounds if possible.

// The boundaries of each input argument are 1 <= left <= right <= 10000.

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

// naive solution
const selfDividingNumbers = function(left, right) {
  const numbers = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividingNumber(i)) {
      numbers.push(i);
    }
  }

  return numbers;

};

function isSelfDividingNumber(number) {
  const divisors = getDivisors(number);
  if (divisors.length < 1) {
    return false;
  }
  for (let i = 0; i < divisors.length; i++) {
    if (number % divisors[i] !== 0) {
      return false;
    }
  }
  return true;
}

function getDivisors(number) {
  const divisors = [];
  while (number >= 1) {
    const remainder = number % 10;
    if (remainder === 0) {
      return [];
    }
    divisors.push(remainder);
    number = (number - remainder) / 10;
  }
  return divisors;
}

const expected = '[1,2,3,4,5,6,7,8,9,11,12,15,22]';
const actual = selfDividingNumbers(1, 22);

console.log(expected === JSON.stringify(actual));
