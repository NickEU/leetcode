import java.util.Map;

public class LC1529_1_bulb_switcher_IV {
    private final Map<Character, Character> map = Map.of('0', '1',
                                                         '1', '0');

    public int minFlips(String target) {
        StringBuilder initial = new StringBuilder("0".repeat(target.length()));
        int flips = 0;
        int idx = findFirstDiffEl(initial, target, 0);
        while (idx != -1) {
            flipAllBulbsFromIdx(initial, idx);
            flips++;
            idx = findFirstDiffEl(initial, target, idx);
        }

        return flips;
    }

    private void flipAllBulbsFromIdx(StringBuilder sb, int idx) {
        // this is the slow part
        for (int i = idx; i < sb.length(); i++) {
            sb.setCharAt(i, map.get(sb.charAt(i)));
        }
    }

    private int findFirstDiffEl(StringBuilder initial, String target, int from) {
        for (int i = from; i < initial.length(); i++) {
            if (initial.charAt(i) != target.charAt(i)) {
                return i;
            }
        }
        return -1;
    }
}
