import java.util.HashSet;

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears
// at least twice in the array, 
// and it should return false if every element is distinct.

// using a hashset. time O(n) space O(n)
public class LC0217_2_contains_duplicate {
    public static void main(String[] args) {
        int[] input1 = {1,1,1,3,3,4,3,2,4,2};
        int[] input2 = {1,2,3,4};
        
        System.out.println(containsDuplicate(input1));
        System.out.println(!containsDuplicate(input2));        
    }
    
    public static boolean containsDuplicate(int[] nums) {
      HashSet<Integer> encounteredNumbers = new HashSet<>();
      
      for (int i = 0; i < nums.length; i++) {
        if (!encounteredNumbers.add(nums[i])) {
          return true;
        }        
      }            
      
      return false;
    }
}