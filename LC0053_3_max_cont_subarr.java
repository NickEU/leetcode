public class LC0053_3_max_cont_subarr {
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[] {-2,1,-3,4,-1,2,1,-5,4}) == 6);        
    }

    public static int maxSubArray(int[] nums) {
        int largestSum = nums[0];
        int currSum = largestSum;
        for (int i = 1; i < nums.length; i++) {
          if (currSum < 0) {
            currSum = nums[i];
          } else {
            currSum += nums[i];
          }            
          if (currSum > largestSum) {
            largestSum = currSum;
          }
        }
        
        return largestSum;
    }
}