import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;

// Given an array nums, you are allowed to choose one element of nums
// and change it by any value in one move.
// Return the minimum difference between the largest and smallest value
// of nums after performing at most X moves.

// Time O(nlogn) Space O(n)
// Proper sliding window
public class LC1509_3_min_diff_in_X_moves {
    public static void main(String[] args) {
        var o = new LC1509_3_min_diff_in_X_moves();
        int[] input = {6,6,0,1,1,4,6};
        System.out.println(o.minDifference(input, 4) == 0);
        System.out.println(o.minDifference(input, 6) == 0);
        System.out.println(o.minDifference(input, 3) == 2);
        input = new int[]{1, 5, 6, 14, 15};
        System.out.println(o.minDifference(input, 3) == 1);
        System.out.println(o.minDifference(input, 4) == 0);
        System.out.println(o.minDifference(input, 2) == 5);
        System.out.println(o.minDifference(input, 1) == 10);
        System.out.println(o.minDifference(new int[] {5,3,2,4}, 3) == 0);
        System.out.println(o.minDifference(new int[] {1,5,0,10,14},3) == 1);
    }

    public int minDifference(int[] nums, int moves) {
        int maxMoves = moves;
        if (nums.length <= maxMoves + 1) {
            return 0;
        }
        int laElIdx = nums.length - 1;
        // get all possible combinations of indices via sliding window
        int[][] combinations = setupCombinationsOfIndices(maxMoves, nums.length);

        Arrays.sort(nums);
        int minDiff = Integer.MAX_VALUE;

        for (int[] indices : combinations) {
            int[] copy = nums.clone();
            int target = maxMoves--;
            int newMin = copy[0];
            int newMax = copy[laElIdx];
            for (int idx : indices) {
                // copy[target] is a number in nums
                // that is > potential min and < potential max
                copy[idx] = copy[target];
                if (idx <= moves - 1) {
                    newMin = copy[idx + 1];
                }
                // update the max when the sliding window fell over
                // from beginning to end, the second part of || is there
                // to take care of the situation
                // when the sliding window is completely on the right side
                if (idx > moves - 1
                        || idx == moves - 1 && indices.length > 1
                        && indices[indices.length - 2] == idx + 1) {
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

    private int[][] setupCombinationsOfIndices(int maxMoves, int arrLen) {
        int[][] result = new int[maxMoves + 1][maxMoves];
        ArrayList<ArrayList<Integer>> auxResult = new ArrayList<>();
        for (int i = 0; i <= maxMoves; i++) {
            auxResult.add(new ArrayList<>());
            var curList = auxResult.get(i);
            int j = maxMoves - 1;
            // sliding window ends with rightmostId
            int rightmostId = maxMoves - 1 - i;
            while (j >= 0) {
                int nextIdx = rightmostId--;
                // if the next id is < 0 it falls over to the end of the arr
                // with a proper offset from the last el
                curList.add(nextIdx >= 0 ? nextIdx : arrLen + nextIdx);
                j--;
            }
            int sortUpToIdx;
            for (int k = 0; ; k++) {
                // turns 1 0 4 into 0 1 4 to make it easier to iterate over indices
                // when updating minimums in the main algorithm in minDifference()
                if (curList.get(k) == arrLen - 1) {
                    sortUpToIdx = k;
                    break;
                }
                if (k == curList.size() - 1) {
                    sortUpToIdx = maxMoves;
                    break;
                }
            }

            // sorts the first part and combines it with the second part,
            // which is already properly sorted
            if (sortUpToIdx != -1) {
                var leftPart = new ArrayList<>(curList.subList(0, sortUpToIdx));
                leftPart.sort(Comparator.comparingInt(a -> a));
                if (leftPart.size() < maxMoves) {
                    leftPart.addAll(curList.subList(sortUpToIdx, curList.size()));
                }
                result[i] = leftPart.stream().mapToInt(x -> x).toArray();
            }
        }
        return result;
    }
}
