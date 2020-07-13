import java.util.ArrayList;
import java.util.Collections;

// Brute force, time O(n^2)
public class LC1508_1_range_sum_of_sorted_subarr_sums {
    public static void main(String[] args) {
        int[] input = {1,2,3,4};
        var o = new LC1508_1_range_sum_of_sorted_subarr_sums();
        System.out.println(o.rangeSum(input, 4, 1, 10) == 50);
        System.out.println(o.rangeSum(input, 4, 3, 4) == 6);
        System.out.println(o.rangeSum(input, 4, 1, 5) == 13);
    }
    public int rangeSum(int[] nums, int n, int left, int right) {
        ArrayList<Integer> sums = buildListOfSums(nums);
        Collections.sort(sums);
        return getSumFromLeftToRight(sums, left - 1, right - 1);
    }

    private ArrayList<Integer> buildListOfSums(int[] nums) {
        ArrayList<Integer> sums = new ArrayList<>();
        int sum = 0;
        for (int num : nums) {
            sum += num;
            sums.add(sum);
        }

        for (int i = 1; i < nums.length; i++) {
            int j = i - 1;
            while (j >= 0) {
                sums.add(sums.get(i) - sums.get(j--));
            }
        }
        return sums;
    }

    private int getSumFromLeftToRight(ArrayList<Integer> sums, int begin, int end) {
        int totalSum = 0;
        int divisor = (int) Math.pow(10, 9) + 7;

        for (int i = begin; i <= end; i++) {
            totalSum += sums.get(i) % divisor;
            if (totalSum >= divisor) {
                totalSum %= divisor;
            }
        }

        return totalSum;
    }
}
