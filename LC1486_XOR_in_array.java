// Given an integer n and an integer start.

// Define an array nums where nums[i] = start + 2*i (0-indexed)
// and n == nums.length.

// Return the bitwise XOR of all elements of nums.

public class LC1486_XOR_in_array {
    public static void main(String[] args) {
        System.out.println(xorOperation(5, 0) == 8);
        System.out.println(xorOperation(4, 3) == 8);
        System.out.println(xorOperation(1, 7) == 7);
        System.out.println(xorOperation(10, 5) == 2);
    }    

    public static int xorOperation(int n, int start) {
        int[] nums = new int[n];
        int acc = 0;
        int i = 0;
        for (int num : nums) {
          num = start + 2 * i++;
          acc = acc ^ num;
        }    
        
        return acc;
        
        //return Arrays.stream(nums).reduce(0, (acc, cur) -> acc ^ cur);
    }
}