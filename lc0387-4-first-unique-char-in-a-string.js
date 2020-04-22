'use strict';
// Given a string,
// find the first non-repeating character in it and return it's index.
// If it doesn't exist, return -1.

// the string only contains lwrcase letters

/**
 * @param {string} s
 * @return {number}
 */
// using map and its property to remember the original insertion order
// we can shave a bunch of iterations off the for .. of cycle
const firstUniqChar = s => {
  const characters = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!characters.get(char)) {
      const charObj = {
        count: 0,
      };
      characters.set(char, charObj);
    }
    const currentChar = characters.get(char);
    if (currentChar.count === 0) {
      currentChar.id = i;
    }
    currentChar.count++;
  }


  for (const char of characters.values()) {
    if (char.count === 1) {
      return char.id;
    }
  }

  return -1;
};

console.log(firstUniqChar('helldrsrlhed'));
