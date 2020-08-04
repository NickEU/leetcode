import java.util.Map;

public class LC1529_2_bulb_switcher_IV {
    private final Map<Character, Character> map = Map.of('0', '1',
            '1', '0');

    public int minFlips(String target) {
        char remainingBulbsState = '0';
        int flips = 0;
        int idx = findFirstDiffEl(remainingBulbsState, target, 0);
        while(idx != -1) {
            remainingBulbsState = map.get(remainingBulbsState);
            flips++;
            idx = findFirstDiffEl(remainingBulbsState, target, idx);
        }

        return flips;
    }

    private int findFirstDiffEl(char bulbState, String target, int from) {
        for (int i = from; i < target.length(); i++) {
            if (bulbState != target.charAt(i)) {
                return i;
            }
        }
        return -1;
    }
}
