/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let digitsStr = x >= 0 ? x.toString() : x.toString().substring(1);

  let result = parseInt(
    digitsStr
      .split("")
      .reverse()
      .join("")
  );

  if (result > 2147483647 || result < -2147483648) {
    return 0;
  }

  return x >= 0 ? result : -Math.abs(result);
};
