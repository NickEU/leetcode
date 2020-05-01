'use strict';

// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
  let isNegative = false;
  let signRecorded = false;
  let intStr = '';
  for (let i = 0; i < str.length; i++) {
    const currChar = str[i];
    if (currChar === ' ' && intStr === '' && !signRecorded) {
      continue;
    }

    if ((currChar === '-' || currChar === '+') && !signRecorded) {
      if (intStr !== '') {
        return getReturn();
      }
      signRecorded = true;
      if (currChar === '-') {
        isNegative = true;
      }
      continue;
    }

    const parseIntResult = parseInt(currChar);
    if (isNaN(parseIntResult)) {
      return getReturn();
    } else {
      intStr += parseIntResult;
    }
  }

  function getReturn() {
    if (intStr) {
      let absResult = parseInt(intStr);
      if (absResult >= 2147483647) {
        if (absResult >= 2147483648 && isNegative) {
          absResult = 2147483648;
        } else {
          absResult = 2147483647;
        }
      }
      return isNegative ? -absResult : absResult;
    } else {
      return 0;
    }
  }

  return getReturn();
};

console.log(myAtoi('42') === 42);
console.log(myAtoi('   -42') === -42);
console.log(myAtoi('4193 with words') === 4193);
console.log(myAtoi('words and 987') === 0);
console.log(myAtoi('-91283472332') === -2147483648);
