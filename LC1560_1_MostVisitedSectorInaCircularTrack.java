import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class LC1560_1_MostVisitedSectorInaCircularTrack {
    public List<Integer> mostVisited(int n, int[] rounds) {
        Map<Integer, Integer> visits = new HashMap<>();
        for (int i = 1; i <= n; i++) {
            visits.put(i, 0);
        }

        int prev = rounds[0];
        visits.put(rounds[0], 1);
        int max = 0;
        for (int i = 1; i < rounds.length; i++) {
            // this is slow, should rly think of an alternative:
            while (prev != rounds[i]) {
                prev = prev + 1 > n ? 1 : prev + 1;
                int newVal = visits.get(prev) + 1;
                if (newVal > max) {
                    max = newVal;
                }
                visits.put(prev, newVal);
            }
        }

        List<Integer> result = new ArrayList<>();
        for (var kvp : visits.entrySet()) {
            if (kvp.getValue() == max) {
                result.add(kvp.getKey());
            }
        }
        return result;
    }
}
