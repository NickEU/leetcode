/**
 * @param {string} s
 * @return {string}
 */
// brute force :/
var longestPalindrome = function(s) {
  if (s === "") {
    return s;
  }

  let result = "";
  let lastCharIndex = s.length - 1;

  for (let i = 0; i < lastCharIndex || s.length - i > result.length; i++) {
    let inc = 0;
    for (let j = lastCharIndex; j >= i; ) {
      //console.log('i = ' + i + ' j = ' + j + ' inc = ' + inc);
      //console.log(s[i + inc], s[j - inc])
      if (s[i + inc] === s[j - inc]) {
        if (i + inc >= j - inc) {
          let tmp = s.slice(i, j + 1);
          if (tmp.length > result.length) {
            result = tmp;
          }
          //console.log('res = ' + result);
          break;
        }
        inc++;
      } else {
        j--;
        inc = 0;
      }
    }
  }

  return result;
};
