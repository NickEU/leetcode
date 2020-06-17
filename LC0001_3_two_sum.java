import java.util.HashMap;
import java.util.Arrays;

// Given an array of integers, return indices of the two numbers
// such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// Using a hashmap. O(n) time O(n) space
public class LC0001_3_two_sum {
    public static void main(String[] args) {
        int[] input = {2, 7, 11, 15};
        int[] actual = twoSum(input, 9);
        int[] expected = {0, 1};
        System.out.println(Arrays.equals(actual, expected));
    }

    public static int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> remaindersToIndices = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
          int remainder = target - nums[i];
          if (remaindersToIndices.containsKey(remainder)) {
            return new int[] {remaindersToIndices.get(remainder), i};
          } else {
            remaindersToIndices.put(nums[i], i);
          }        
        }
        
        return null;
      }
}