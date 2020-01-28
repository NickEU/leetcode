/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let isNegative = false;
  let signRecorded = false;
  let intStr = "";
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    //console.log(`cur char = ${currChar}`)
    if (currChar === " " && intStr === "" && !signRecorded) {
      continue;
    }

    if ((currChar === "-" || currChar === "+") && !signRecorded) {
      if (intStr !== "") {
        return getReturn();
      }
      signRecorded = true;
      if (currChar === "-") {
        isNegative = true;
      }
      continue;
    }

    let parseIntResult = parseInt(currChar);
    //console.log(`converted to = ${parseIntResult}`);
    if (isNaN(parseIntResult)) {
      return getReturn();
    } else {
      intStr += parseIntResult;
      //console.log(intStr);
    }
  }

  function getReturn() {
    if (intStr) {
      let absResult = parseInt(intStr);
      if (absResult >= 2147483647) {
        if (absResult >= 2147483648 && isNegative) {
          absResult = 2147483648;
        } else {
          absResult = 2147483647;
        }
      }
      return isNegative ? -absResult : absResult;
    } else {
      return 0;
    }
  }

  return getReturn();
};
