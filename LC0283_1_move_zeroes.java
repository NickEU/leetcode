import java.util.Arrays;

// Given an array nums, write a function to move all 0's to the end
// of it while maintaining the relative order of the non-zero elements.

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

public class LC0283_1_move_zeroes {
    public static void main(String[] args) {
        int[] actual = {0,1,0,3,12};
        moveZeroes(actual);
        int[] expected = {1,3,12,0,0};

        System.out.println(Arrays.equals(actual, expected));       
    }

    // Time: O(n) Space : O(1)
    public static void moveZeroes(int[] nums) {
        int insertPtr = 0;
      
        // move all non-0s to the beginning
        for (int i = 0; i < nums.length; i++) {
          int currEl = nums[i];
          if (currEl != 0) {
            if (insertPtr != i) {
              nums[insertPtr] = currEl;     
            }          
            insertPtr++;          
          }      
        }       
        
        // if array is consists of only 0s
        // no need to do anything
        if (insertPtr == 0) {
          return;
        }        
        
        // fill the rest with zeroes
        for (int i = insertPtr; i < nums.length; i++) {
          nums[insertPtr++] = 0;
        }    
      }
    
}