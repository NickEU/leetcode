import java.util.Arrays;

// Given an array of integers nums sorted in ascending order,
// find the starting and ending position of a given target value.
// Your algorithm's runtime complexity must be in the order of O(log n).
// If the target is not found in the array, return [-1, -1].

public class LC0034_find_first_and_last_pos_in_sorted_arr {
    public static void main(String[] args) {
        int[] input = {5,7,7,8,8,10};
        int[] expected = {3, 4};
        System.out.println(Arrays.equals(searchRange(input, 8), expected)); 
        expected = new int[] {-1, -1};
        System.out.println(Arrays.equals(searchRange(input, 6), expected)); 
    }   
    
    // time O(logn) space O(1)
    public static int[] searchRange(int[] nums, int target) {
        int start = 0;
        int end = nums.length - 1;
        int leftmostTargetIdx = -1;
        
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
                if (nums[mid] == target) {
                    leftmostTargetIdx = mid;
                }
            }    
        }
        
        start = 0;
        end = nums.length - 1;
        int rightmostTargetIdx = -1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
                if (nums[mid] == target) {
                    rightmostTargetIdx = mid;            
                }
            }
        }
        
        return new int[] {leftmostTargetIdx, rightmostTargetIdx};
    }
}