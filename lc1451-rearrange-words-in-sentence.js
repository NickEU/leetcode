'use strict';

// Given a sentence text (A sentence is a string
// of space-separated words) in the following format:

// First letter is in upper case.
// Each word in text are separated by a single space.
// Your task is to rearrange the words in text such that
// all words are rearranged in an increasing order of their lengths.
// If two words have the same length, arrange them in their original order.

// Return the new text following the format shown above.

// text begins with a capital letter and then contains
// lowercase letters and single space between words.

/**
 * @param {string} text
 * @return {string}
 */
const arrangeWords = function(text) {
  const words = text.split(' ');
  words[0] = words[0].toLowerCase();

  words.sort((a, b) => (a === b ? 0 : a.length - b.length));

  words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  return words.join(' ');
};

console.log(arrangeWords('Leetcode is cool') === 'Is cool leetcode');
console.log(arrangeWords('Keep calm and code on') === 'On and keep calm code');
console.log(arrangeWords('To be or not to be') === 'To be or to be not');
