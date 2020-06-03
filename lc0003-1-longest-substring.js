'use strict';

// Given a string, find the length of the longest substring
// without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */

// bad brute force solution, nested loops galore, O(n^2)
const lengthOfLongestSubstring = function(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const setOfChars = new Set([s[i]]);
    let currLongest = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (setOfChars.has(s[j])) {
        break;
      }
      setOfChars.add(s[j]);
      currLongest++;
    }

    if (currLongest > result) {
      result = currLongest;
    }
  }

  return result;
};

console.log(lengthOfLongestSubstring('abcabcbb') === 3);
console.log(lengthOfLongestSubstring('bbbbb') === 1);
console.log(lengthOfLongestSubstring('pwwkew') === 3);
