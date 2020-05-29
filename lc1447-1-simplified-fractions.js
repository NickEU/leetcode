'use strict';

// Given an integer n, return a list of all simplified fractions
// between 0 and 1 (exclusive) such that
// the denominator is less-than-or-equal-to n.
// The fractions can be in any order.

// Constraints:
// 1 <= n <= 100

/**
 * @param {number} n
 * @return {string[]}
 */

const simplifiedFractions = function(n) {
  const fractions = [];
  const primes = calcPrimesUpTo(Math.ceil(n / 2));
  for (let denom = 2; denom <= n; denom++) {
    fractions.push(`1/${denom}`);
    for (let numerator = 2; numerator < denom; numerator++) {
      let nextPrime = primes[1];
      let notDivisibleByPrimes = true;
      for (let i = 2; nextPrime <= numerator; i++) {
        if (denom % nextPrime === 0 && numerator % nextPrime === 0) {
          notDivisibleByPrimes = false;
          break;
        }

        nextPrime = primes[i];
      }
      if (notDivisibleByPrimes) {
        fractions.push(`${numerator}/${denom}`);
      }
    }
  }

  return fractions;

};

function calcPrimesUpTo(n) {
  const primes = [1];
  const notPrimes = {};
  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    if (notPrimes[i]) {
      isPrime = false;
    }

    if (isPrime) {
      primes.push(i);
      for (let j = i * i; j <= n; j += i) {
        notPrimes[j] = true;
      }
    }

  }
  return primes;
}

const expected = '["1/2","1/3","2/3","1/4","3/4"]';
const actual = JSON.stringify(simplifiedFractions(4));
console.log(actual === expected);
