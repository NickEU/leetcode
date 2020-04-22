'use strict';
// Given a string,
// find the first non-repeating character in it and return it's index.
// If it doesn't exist, return -1.

// the string only contains lwrcase letters

/**
 * @param {string} s
 * @return {number}
 */

const firstUniqChar = s => {
  const characters = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!characters[char]) {
      characters[char] = {
        count: 0,
      };
    }
    const currentChar = characters[char];
    if (currentChar.count === 0) {
      currentChar.id = i;
    }
    currentChar.count++;
  }

  let result = -1;
  let minId = Infinity;

  for (const char of Object.keys(characters)) {
    const currentChar = characters[char];
    const id = currentChar.id;
    if (currentChar.count === 1 && id <= minId) {
      minId = result = id;
    }
  }

  return result;
};

console.log(firstUniqChar('helldrsrlhed'));
