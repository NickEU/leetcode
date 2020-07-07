import java.util.ArrayList;
import java.util.List;

public class LC0046_1_permutations {
    private static List<List<Integer>> permutations;
    private static int size;

    public static void main(String[] args) {
        LC0046_1_permutations s = new LC0046_1_permutations();
        System.out.println(s.permute(new int[] {1, 2, 3}));
        System.out.println(s.permute(new int[] {0, 1}));
    }

    public List<List<Integer>> permute(int[] nums) {
        permutations = new ArrayList<>();
        size = nums.length;
        printAllPermutations(nums, new ArrayList<>(), 0);
        return permutations;
    }

    private static void printAllPermutations(int[] input, ArrayList<Integer> buf, int bufPos) {
        if (bufPos == size) {
            permutations.add(buf);
            return;
        }

        for (int curEl : input) {
            if (buf.stream().noneMatch(x -> x == curEl)) {
                buf.add(curEl);
                printAllPermutations(input, new ArrayList<>(buf), bufPos + 1);
                buf.remove(Integer.valueOf(curEl));
            }
        }
    }
}
