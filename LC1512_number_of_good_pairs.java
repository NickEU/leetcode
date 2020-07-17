import java.util.HashMap;

public class LC1512_number_of_good_pairs {
    public static void main(String[] args) {
        var o = new LC1512_number_of_good_pairs();
        System.out.println(o.numIdenticalPairs(new int[] {1,2,3,1,1,3}) == 4);
        System.out.println(o.numIdenticalPairs(new int[] {1,1,1,1}) == 6);
        System.out.println(o.numIdenticalPairs(new int[] {1,2,3}) == 0);

    }
    // time O(n) space O(n)
    public int numIdenticalPairs(int[] nums) {
        HashMap<Integer, Integer> encounteredNums = new HashMap<>();
        int countGoodPairs = 0;
        for (int num : nums) {
            int seenBeforeCount = encounteredNums.getOrDefault(num, 0);
            countGoodPairs += seenBeforeCount;
            encounteredNums.put(num, seenBeforeCount + 1);
        }
        return countGoodPairs;
    }
}
