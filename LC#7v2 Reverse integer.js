/**
 * @param {number} x
 * @return {number}
 */
// a solution that does not use arrays
var reverse = function(x) {
  let intIsNotNegative = x >= 0;
  let int = intIsNotNegative ? x : -1 * x;

  let result = 0;

  while (int) {
    result = result * 10;
    result += int % 10;
    int = Math.floor(int / 10);
    //console.log(int, result);
  }

  if (result > 2147483647 || result < -2147483648) {
    return 0;
  }

  return intIsNotNegative ? result : -1 * result;
};
