/**
 * @param {number[]} height
 * @return {number}
 */
//brute, O(n^2)
var maxArea = function(height) {
  console.log(height);
  let result = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let volume = (j - i) * Math.min(height[i], height[j]);
      if (volume > result) {
        result = volume;
      }
    }
  }
  return result;
};
