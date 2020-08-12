public class LC1539_kth_missing_positive_number {
    // O(n) time O(1) space
    public int findKthPositive(int[] arr, int k) {
        int currPositiveInt = 0;
        int missingInts = 0;
        for (int num : arr) {
            missingInts += num - currPositiveInt - 1;
            currPositiveInt = num;
            if (missingInts >= k) {
                return currPositiveInt - 1 - missingInts + k;
            }
        }
        return currPositiveInt + k - missingInts;
    }
}
