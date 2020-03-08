/**
 * @param {number} x
 * @return {boolean}
 */
// solved via conversion to a string
var isPalindrome = function(x) {
  if ((x % 10 === 0 && x !== 0) || x < 0) {
    return false;
  }

  let xStr = x.toString();
  let lastElIndex = xStr.length - 1;

  for (let i = 0; i < lastElIndex - i; i++) {
    if (xStr[i] !== xStr[lastElIndex - i]) {
      return false;
    }
  }

  return true;
};
