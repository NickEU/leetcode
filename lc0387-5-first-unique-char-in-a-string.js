'use strict';
// Given a string,
// find the first non-repeating character in it and return it's index.
// If it doesn't exist, return -1.

// the string only contains lwrcase letters

/**
 * @param {string} s
 * @return {number}
 */
// cute solution that works for these specific requirements
// does not keep the exact count when encounters the same letter > 2 times
// and uses simple string : number key-value pairs in a hashtable
// instead of an object
const firstUniqChar = s => {
  const hashTable = {};

  for (const char of s) {
    hashTable[char] = hashTable[char] ? 2 : 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (hashTable[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar('helldrsrlhed'));
