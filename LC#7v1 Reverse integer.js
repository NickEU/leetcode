/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let intIsNotNegative = x >= 0;

  let digitsStr = intIsNotNegative ? x.toString() : x.toString().substring(1);

  let result = parseInt(
    digitsStr
      .split("")
      .reverse()
      .join("")
  );

  if (result > 2147483647 || result < -2147483648) {
    return 0;
  }

  return intIsNotNegative ? result : -1 * result;
};
