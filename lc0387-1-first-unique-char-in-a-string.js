'use strict';
// Given a string,
// find the first non-repeating character in it and return it's index.
// If it doesn't exist, return -1.

// the string only contains lwrcase letters

/**
 * @param {string} s
 * @return {number}
 */

const firstUniqChar = (s) => {
  const map = new Map();
  let id = -1;
  for (const char of s) {
    id++;
    const obj = {
      id,
      uniq: !map.get(char),
    };
    map.set(char, obj);
  }

  for (const char of map.values()) {
    if (char.uniq) {
      return char.id;
    }
  }

  return -1;
};

console.log(firstUniqChar('hell0 d0rrlhed'));
