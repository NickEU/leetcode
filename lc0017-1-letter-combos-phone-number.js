'use strict';

// Given a string containing digits from 2-9 inclusive,
// return all possible letter combinations
// that the number could represent.

// A mapping of digit to letters
// (just like on the telephone buttons) is given below.
// Note that 1 does not map to any letters.

/**
 * @param {string} digits
 * @return {string[]}
 */
//recursive solution
//TODO: solution using stack/linked list
const letterCombinations = function(digits) {
  const charMapping = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };
  const result = [];
  if (digits.length === 0) {
    return result;
  }
  buildStr(charMapping, result, '', digits, 0);
  return result;
};

function buildStr(charMapping, result, tempStr, digits, currDigitIdx) {
  const digitsLen = digits.length;
  const currDigitChars = charMapping[digits[currDigitIdx]];
  for (let i = 0; i < currDigitChars.length; i++) {
    tempStr += currDigitChars[i];
    if (tempStr.length === digitsLen) {
      result.push(tempStr);
    } else {
      buildStr(charMapping, result, tempStr, digits, currDigitIdx + 1);
    }
    tempStr = tempStr.slice(0, -1);
  }
}

const actual = JSON.stringify(letterCombinations('23'));
const expected = JSON.stringify(
  ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
console.log(actual === expected);
console.log(JSON.stringify(letterCombinations('')) === '[]');
console.log(JSON.stringify(letterCombinations('2')) === '["a","b","c"]');
