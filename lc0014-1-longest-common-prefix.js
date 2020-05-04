'use strict';
// Write a function to find the longest
// common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = function(strs) {
  let result = '';

  if (strs.length === 0) {
    return '';
  }

  for (let j = 0; strs[0][j] !== undefined; j++) {
    const currChar = strs[0][j];
    let charIsCommon = true;
    for (let i = 1; i < strs.length; i++) {
      if (currChar !== strs[i][j]) {
        charIsCommon = false;
        break;
      }
    }

    if (!charIsCommon) {
      return result;
    } else {
      result += currChar;
    }
  }

  return result;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']) === 'fl');
console.log(longestCommonPrefix(['dog', 'racecar', 'car']) === '');
console.log(longestCommonPrefix(['sadist', 'sad']) === 'sad');
