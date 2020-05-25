'use strict';

// Given a sentence that consists of some words
// separated by a single space, and a searchWord.

// You have to check if searchWord is a prefix of any word in sentence.

// Return the index of the word in sentence
// where searchWord is a prefix of this word (1-indexed).

// If searchWord is a prefix of more than one word,
// return the index of the first word (minimum index).
// If there is no such word return -1.

// A prefix of a string S is any leading contiguous substring of S.

// Constraints:

// 1 <= sentence.length <= 100
// 1 <= searchWord.length <= 10
// sentence consists of lowercase English letters and spaces.
// searchWord consists of lowercase English letters.

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */

const isPrefixOfWord = function(sentence, searchWord) {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(searchWord)) {
      return i + 1;
    }
  }

  return -1;
};


console.log(isPrefixOfWord('i love eating burger', 'burg') === 4);
console.log(isPrefixOfWord('this problem is an easy problem', 'pro') === 2);
console.log(isPrefixOfWord('i am tired', 'you') === -1);
console.log(isPrefixOfWord('i use triple pillow', 'pill') === 4);
console.log(isPrefixOfWord('hello from the other side', 'they') === -1);
