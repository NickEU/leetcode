'use strict';

// Implement strStr().
// Return the index of the first occurrence of
// needle in haystack, or -1 if needle is not part of haystack.

// For the purpose of this problem, we will return 0
// when needle is an empty string.
// This is consistent to C's strstr() and Java's indexOf().

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// time O(n*m) space O(1)
const strStr = function(haystack, needle) {
  if (needle === '') {
    return 0;
  }
  const earlyExitIndex = haystack.length - needle.length + 1;
  for (let i = 0, j = 0; i < earlyExitIndex; i++) {
    while (haystack[i + j] === needle[j]) {
      j++;
      if (j === needle.length) {
        return i;
      }
    }
    j = 0;
  }
  return -1;
};

console.log(strStr('mississippi', 'issipi') === -1);
console.log(strStr('hello', 'll') === 2);
console.log(strStr('helloWorld', '') === 0);
console.log(strStr('aaaaa', 'bba') === -1);
