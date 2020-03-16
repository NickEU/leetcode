/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// O(n + m)
var findMedianSortedArrays = function(nums1, nums2) {
  let mergedArr = [];
  for (let i = 0, j = 0; i < nums1.length || j < nums2.length; ) {
    if (nums1[i] < nums2[j] || nums2[j] === undefined) {
      mergedArr.push(nums1[i]);
      i++;
    } else {
      mergedArr.push(nums2[j]);
      j++;
    }
  }

  let midIndex = Math.floor(mergedArr.length / 2);
  if (mergedArr.length % 2 === 0) {
    return (mergedArr[midIndex] + mergedArr[midIndex - 1]) / 2;
  } else {
    return mergedArr[midIndex];
  }
};
