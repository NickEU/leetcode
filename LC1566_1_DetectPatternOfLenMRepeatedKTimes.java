public class LC1566_1_DetectPatternOfLenMRepeatedKTimes {
    public static void main(String[] args) {
        var o = new LC1566_1_DetectPatternOfLenMRepeatedKTimes();
        System.out.println(o.containsPattern(
                new int[]{1, 2, 3, 4, 5, 6}, 5, 1));
        System.out.println(!o.containsPattern(
                new int[]{2, 2, 2, 2}, 2, 3));
        System.out.println(o.containsPattern(
                new int[]{1, 2, 1, 2, 1, 1, 1, 3}, 2, 2));
    }
    // Given an array of positive integers arr,
    // find a pattern of length m that is repeated k or more times.
    //
    // A pattern is a subarray (consecutive sub-sequence) that consists of one
    // or more values, repeated multiple times consecutively without overlapping.
    // A pattern is defined by its length and the number of repetitions.
    //
    // Return true if there exists a pattern of length m
    // that is repeated k or more times, otherwise return false.

    // Space O(1) Time O(n * m)
    public boolean containsPattern(int[] arr, int len, int repeats) {
        int idxToRemember = len;
        int consecutivePatternsFound = 1;
        for (int i = idxToRemember; i < arr.length; ) {
            int end = i + len <= arr.length ? i + len : 0;
            boolean patternLegit = end != 0;
            for (int start = i; start < end; start++) {
                if (arr[start] != arr[start - len]) {
                    patternLegit = false;
                    break;
                }
            }

            if (patternLegit) {
                if (++consecutivePatternsFound >= repeats) {
                    return true;
                }
                i += len;
            } else {
                consecutivePatternsFound = 1;
                i = ++idxToRemember;
            }
        }

        return repeats == 1 && len <= arr.length;
    }
}
