class LC1464 {
    public int maxProduct(int[] nums) {
      int max = nums[0] > nums[1] ? nums[0] : nums[1];
      int maxSecond = max == nums[0] ? nums[1] : nums[0];
      
      for (int i = 2; i < nums.length; i++) {
        if (nums[i] > maxSecond) {
          if (nums[i] > max) {
            maxSecond = max;
            max = nums[i];
          } else {
            maxSecond = nums[i];
          }          
        }
      }
      
      return (max - 1) * (maxSecond - 1);
    }
}