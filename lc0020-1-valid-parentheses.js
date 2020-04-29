'use strict';
// Given a string containing just the characters
// '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const count = {
    paren: 0,
    square: 0,
    squir: 0,
  };
  const order = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
    case '(':
      order.push('(');
      count.paren++;
      break;
    case ')':
      if (order[order.length - 1] !== '(') {
        return false;
      }
      order.pop();
      count.paren--;
      break;
    case '[':
      order.push('[');
      count.square++;
      break;
    case ']':
      if (order[order.length - 1] !== '[') {
        return false;
      }
      order.pop();
      count.square--;
      break;
    case '{':
      order.push('{');
      count.squir++;
      break;
    case '}':
      if (order[order.length - 1] !== '{') {
        return false;
      }
      order.pop();
      count.squir--;
      break;
    }
  }

  if (count.paren !== 0 || count.square !== 0 || count.squir !== 0) {
    return false;
  }

  return true;
};

console.log(isValid('{[]}') === true);
console.log(isValid('([)]') === false);
console.log(isValid('(]') === false);
console.log(isValid('()[]{}') === true);
