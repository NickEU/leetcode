import java.util.Arrays;

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears
// at least twice in the array, 
// and it should return false if every element is distinct.

// sorting an array first. time O(nlogn) space O(n)
public class LC0217_1_contains_duplicate {
    public static void main(String[] args) {
        int[] input1 = {1,1,1,3,3,4,3,2,4,2};
        int[] input2 = {1,2,3,4};
        
        System.out.println(containsDuplicate(input1));
        System.out.println(!containsDuplicate(input2));        
    }
    
    public static boolean containsDuplicate(int[] nums) {
        int[] sortedNums = new int[nums.length];
        System.arraycopy(nums, 0, sortedNums, 0, nums.length);
        Arrays.sort(sortedNums);
        
        for (int i = 0; i < sortedNums.length - 1; i++) {
          if (sortedNums[i] == sortedNums[i + 1]) {
            return true;
          }        
        }
              
        
        return false;
      }
}