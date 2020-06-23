// Given an array of n positive integers and a positive integer s,
// find the minimal length of a contiguous subarray of which the sum ≥ s.
// If there isn't one, return 0 instead.

public class LC0209_minimum_size_subarr_sum {
    public static void main(String[] args) {
        int actual = minSubArrayLen(7, new int[] {2,3,1,2,4,3});
        int expected = 2;
        System.out.println(actual == expected);        
    }

    public static int minSubArrayLen(int targetSum, int[] nums) {
        int currSum = 0;
        int minSubArrLen = Integer.MAX_VALUE;
        int currSubArrLen = 0;
        
        for (int i = 0; i < nums.length; ) {
          int currEl = nums[i];
          if (currSum < targetSum) {
            currSum += currEl;
            currSubArrLen++;
            i++;
          }
          if (currSum >= targetSum) {
            while (currSum >= targetSum) {
              if (currSubArrLen < minSubArrLen) {
                minSubArrLen = currSubArrLen;
              }
              currSum -= nums[i - currSubArrLen--];
            }
          }
        }
        
        return minSubArrLen == Integer.MAX_VALUE ? 0 : minSubArrLen;
      }    
}