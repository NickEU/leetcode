'use strict';

/**
 * @param {string} s
 * @return {number}
 */

const maxPower = function(s) {
  let maxLen = 1,
    tempLen = 1;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      tempLen++;
    } else {
      if (tempLen > maxLen) {
        maxLen = tempLen;
      }
      tempLen = 1;
    }
  }
  return Math.max(maxLen, tempLen);
};



console.log(maxPower('abbcccddddeeeeedcba') === 5);
