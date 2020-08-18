public class LC1550_1_three_consecutive_odds {
    public boolean threeConsecutiveOdds(int[] arr) {
        int consecutiveOddNumsCount = 0;
        for (int num : arr) {
            if (num % 2 != 0) {
                consecutiveOddNumsCount++;
            } else {
                consecutiveOddNumsCount = 0;
            }
            if (consecutiveOddNumsCount == 3) {
                return true;
            }
        }
        return false;
    }
}
