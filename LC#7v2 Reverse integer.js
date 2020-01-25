/**
 * @param {number} x
 * @return {number}
 */
// a solution that does not use arrays
var reverse = function(x) {
  let int = Math.abs(x);

  let result = 0;

  while (int) {
    result = result * 10 + (int % 10);
    int = Math.floor(int / 10);
  }

  if (result > 2147483647 || result < -2147483648) {
    return 0;
  }

  return x >= 0 ? result : -result;
};
