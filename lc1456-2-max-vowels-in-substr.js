'use strict';
// Given a string s and an integer k.
// Return the maximum number of vowel letters
// in any substring of s with length k.

// Constraints:

// 1 <= s.length <= 10^5
// s consists of lowercase English letters.
// 1 <= k <= s.length

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// sliding window
const maxVowels = function(s, k) {
  const strLen = s.length;
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let maxVowelCount = 0;
  let currVowelCount = 0;
  for (let i = 0; i < strLen; i++) {
    if (i < k) {
      if (vowels.has(s[i])) {
        currVowelCount++;
      }
    } else {
      const prevIsaVowel = vowels.has(s[i - k]);
      if (vowels.has(s[i])) {
        if (!prevIsaVowel) {
          currVowelCount++;
        }
      } else if (prevIsaVowel) {
        currVowelCount--;
      }
    }
    if (currVowelCount > maxVowelCount) {
      maxVowelCount = currVowelCount;
    }
  }
  return maxVowelCount;
};

console.log(maxVowels('leetcode', 3) === 2);
console.log(maxVowels('ibpbhixfiouhdljnjfflpapptrxgcomvnb', 33) === 7);
console.log(maxVowels('abciiidef', 3) === 3);
console.log(maxVowels('aeiou', 2) === 2);
console.log(maxVowels('rhythms', 4) === 0);
console.log(maxVowels('tryhard', 4) === 1);
