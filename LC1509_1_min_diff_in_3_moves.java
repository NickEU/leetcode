import java.util.Arrays;

// Time O(nlogn) Space O(n)
public class LC1509_1_min_diff_in_3_moves {
    public static void main(String[] args) {
        var o = new LC1509_1_min_diff_in_3_moves();
        System.out.println(o.minDifference(new int[] {1,5,0,10,14}) == 1);
        System.out.println(o.minDifference(new int[] {6,6,0,1,1,4,6}) == 2);
        System.out.println(o.minDifference(new int[] {1,5,6,14,15}) == 1);
        System.out.println(o.minDifference(new int[] {5,3,2,4}) == 0);
    }

    public int minDifference(int[] nums) {
        if (nums.length < 5) {
            return 0;
        }
        int laElIdx = nums.length - 1;
        int[][] indices = {{0, 0, 0},
                {0, 0, laElIdx},
                {0, laElIdx, laElIdx},
                {laElIdx, laElIdx, laElIdx}};
        int[] setNums = {3, 2, 1, 0};
        Arrays.sort(nums);
        int minDiff = Integer.MAX_VALUE;
        int i = 0;
        for (int[] row : indices) {
            int[] copy = nums.clone();
            int fromIdx = setNums[i++];
            for (int idx : row) {
                copy[idx] = copy[fromIdx];
                // can be optimized:
                Arrays.sort(copy);
                int newDiff = copy[laElIdx] - copy[0];
                minDiff = Math.min(newDiff, minDiff);
            }
        }
        return minDiff;
    }
}
