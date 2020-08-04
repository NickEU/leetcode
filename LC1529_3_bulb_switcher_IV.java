import java.util.Map;

public class LC1529_3_bulb_switcher_IV {
    private final Map<Character, Character> map = Map.of('0', '1',
            '1', '0');

    public int minFlips(String target) {
        char remainingBulbsState = '0';
        int flips = 0;
        for (int i = 0; i < target.length(); i++) {
            if (remainingBulbsState != target.charAt(i)) {
                flips++;
                remainingBulbsState = map.get(remainingBulbsState);
            }
        }

        return flips;
    }
}
