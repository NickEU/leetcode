class Solution {
      public int search(int[] nums, int target) {
        int foundId = -1;
        int startIdx = 0;
        int endIdx = nums.length - 1;        
        while (startIdx <= endIdx) {
            int midIdx = startIdx + (endIdx - startIdx) / 2;
            int currId = nums[midIdx];
            if (currId == target) {
                foundId = midIdx;
                break;
            } 
                      
            if (currId > target) {
                endIdx = midIdx - 1;
            } else {
                startIdx = midIdx + 1;                
            }
        }
        return foundId;        
    }
}

