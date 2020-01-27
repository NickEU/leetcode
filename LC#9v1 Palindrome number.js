/**
 * @param {number} x
 * @return {boolean}
 */
// solved using integers, without converting to a string
var isPalindrome = function(x) {
  if ((x % 10 === 0 && x !== 0) || x < 0) {
    return false;
  }
  let temp = 0;
  let start = x;

  while (x > 0) {
    console.log(temp);
    if (temp !== 0) {
      temp *= 10;
    }
    temp += x % 10;
    x = Math.floor(x / 10);
  }

  return temp === start ? true : false;
};
