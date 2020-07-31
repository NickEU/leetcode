public class LC1523_1_count_odds {
    public static void main(String[] args) {
        test(new LC1523_1_count_odds());
    }

    public int countOdds(int low, int high) {
        int firstOddNum = low % 2 == 0 ? low + 1 : low;
        int lastOddNum = high % 2 == 0 ? high - 1 : high;
        return firstOddNum > lastOddNum
                ? 0
                : (lastOddNum - firstOddNum) / 2 + 1;
    }

    private static void test(LC1523_1_count_odds o) {
        boolean allTestsOk = true;
        if (o.countOdds(3, 7) != 3
            || o.countOdds(8, 9) != 1
            || o.countOdds(10, 10) != 0) {
            allTestsOk = false;
        }
        System.out.println("Tests " + (allTestsOk ? "passed!" : "failed"));
    }
}
