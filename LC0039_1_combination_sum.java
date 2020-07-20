import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class LC0039_1_combination_sum {
    private List<List<Integer>> result;
    private int[] candidates;
    private int target;
    // bad solution, lots of extra list copying and sorting
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        result = new ArrayList<>();
        this.candidates = candidates;
        this.target = target;
        Arrays.sort(candidates);

        goDeep(0, new ArrayList<>());
        return result;
    }

    private void goDeep(int sum, List<Integer> combo) {
        if (sum == target) {
            combo.sort(null);
            for (List<Integer> list : result) {
                if (list.equals(combo)) {
                    return;
                }
            }
            result.add(combo);
            return;
        }

        for (int num : candidates) {
            if (sum + num > target) {
                return;
            } else {
                List<Integer> nextCombo = new ArrayList<>(combo);
                nextCombo.add(num);
                goDeep(sum + num, nextCombo);
            }
        }
    }
}
