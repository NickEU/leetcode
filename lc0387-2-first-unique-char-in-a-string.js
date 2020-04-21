'use strict';
// Given a string,
// find the first non-repeating character in it and return it's index.
// If it doesn't exist, return -1.

// the string only contains lwrcase letters

/**
 * @param {string} s
 * @return {number}
 */

const buildMap = () => {
  const result = new Map();
  for (let i = 97; i <= 122; i++) {
    const charObj = {
      count: 0,
    };
    result.set(String.fromCharCode(i), charObj);
  }
  return result;
};

const firstUniqChar = s => {
  const characters = buildMap();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (characters.get(char).count === 0) {
      characters.get(char).id = i;
    }
    characters.get(char).count++;
  }

  let result = -1;
  let minId = Infinity;

  for (const char of characters.values()) {
    const id = char.id;
    if (char.count === 1 && id <= minId) {
      minId = result = id;
    }
  }

  return result;
};

console.log(firstUniqChar('helldrsrlhed'));
