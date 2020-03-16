/**
 * @param {string} s
 * @return {number}
 */

// bad brute force solution, nested loops galore, O(n^2)
//  Runtime: 284 ms, faster than 23.98% of JavaScript online submissions for Longest Substring Without Repeating Characters.
//  Memory Usage: 42.1 MB, less than 23.01% of JavaScript online submissions for Longest Substring Without Repeating Characters.

var lengthOfLongestSubstring = function(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let setOfChars = new Set([s[i]]);
    let currLongest = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (setOfChars.has(s[j])) {
        //console.log(`duplicate ${s[j]}, l = ${currLongest}`);
        break;
      }
      setOfChars.add(s[j]);
      currLongest++;
    }

    if (currLongest > result) {
      result = currLongest;
    }
  }

  return result;
};
