import java.util.Arrays;

// Time O(nlogn) Space O(n)
// a faster solution without unnecessary sorting
public class LC1509_2_min_diff_in_3_moves {
    public static void main(String[] args) {
        var o = new LC1509_2_min_diff_in_3_moves();
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
        int[][] combinations = {{0, 1, 2},
                {0, 1, laElIdx},
                {0, laElIdx, laElIdx - 1},
                {laElIdx, laElIdx - 1, laElIdx - 2}};
        int[] setNums = {3, 2, 1, 0};
        Arrays.sort(nums);
        int minDiff = Integer.MAX_VALUE;
        int i = 0;
        for (int[] indices : combinations) {
            int[] copy = nums.clone();
            int target = setNums[i++];
            int newMin = copy[0];
            int newMax = copy[laElIdx];
            for (int idx : indices) {
                copy[idx] = copy[target];
                if (idx <= 2) {
                    newMin = copy[idx + 1];
                }
                if (idx > 2 || idx == 2 && indices[1] == idx + 1) {
                    newMax = copy[idx - 1];
                }
                int newDiff = newMax - newMin;
                if (newDiff < minDiff) {
                    minDiff = newDiff;
                }
            }
        }
        return minDiff;
    }
}
