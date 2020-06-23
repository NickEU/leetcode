public class LC0704_4_binary_search {
    public static void main(String[] args) {
        int[] input = {2, 4, 5, 8, 11, 15, 27};
        System.out.println(getIndex(input, 5) == 2);        
    }

    private static int getIndex(int[] sortedNums, int target) {
        int start = 0;
        int end = sortedNums.length - 1;
        while (start <= end) {
          int mid = (start + end) / 2;
          int currEl = sortedNums[mid];
          if (currEl > target) {
            end = mid - 1;
          } else if (currEl < target) {
            start = mid + 1;
          } else {
            return mid;
          }
        }
    
        // if no match found
        return -1;
    }    
}