import java.util.Arrays;

class LC1470_1_shuffle_the_array {

    public static void main(String[] args) {
        int[] arr = new int[] {1,4,2,3,3,2,4,1};
        int[] arr2 = shuffle(new int[] {1,2,3,4,4,3,2,1}, 4);
        System.out.println(Arrays.equals(arr, arr2));
    }

    public static int[] shuffle(int[] nums, int n) {
      int[] result = new int[nums.length];
      for (int i = 0, j = n, z = 0; z < nums.length; z++) {
        if (z % 2 == 0) {
          result[z] = nums[i];
          i++;
        } else {
          result[z] = nums[j];
          j++;
        }
      }
      return result;
    }
}