/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = "";

  if (strs.length === 0) {
    return "";
  }

  for (let j = 0; strs[0][j] !== undefined; j++) {
    let currChar = strs[0][j];
    let charIsCommon = true;
    for (let i = 1; i < strs.length; i++) {
      if (currChar !== strs[i][j]) {
        charIsCommon = false;
        break;
      }
    }

    if (!charIsCommon) {
      return result;
    } else {
      result += currChar;
    }
  }

  return result;
};
