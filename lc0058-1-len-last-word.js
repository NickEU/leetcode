'use strict';

// Given a string s consists of upper/lower-case alphabets
// and empty space characters ' ', return
// the length of last word (last word means the last appearing word
// if we loop from left to right) in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a maximal substring
// consisting of non-space characters only.


/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLastWord = function(s) {
  let lastWord = '';
  for (let i = s.length - 1; i >= 0; i--)     {
    if (s[i] === ' ' && lastWord !== '') {
      return lastWord.length;
    } else if (s[i] !== ' ') {
      lastWord += s[i];
    }
  }
  return lastWord.length;
};

console.log(lengthOfLastWord('     ') === 0);
console.log(lengthOfLastWord('Hello World') === 5);
console.log(lengthOfLastWord('a') === 1);
console.log(lengthOfLastWord('b   ') === 1);
