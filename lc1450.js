'use strict';

const busyStudent = function(startTime, endTime, queryTime) {
  return startTime.reduce(
    (acc, cur, idx) =>
      (cur <= queryTime && queryTime <= endTime[idx] ? ++acc : acc), 0);
};

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4) === 1);
