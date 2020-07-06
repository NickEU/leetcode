import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class LC1502_arithm_progr_from_seq {
    public static void main(String[] args) {
        int[] success = {1, 5, 3};
        int[] failure = {5, 2, 1};
        var a = new LC1502_arithm_progr_from_seq();
        System.out.println(a.canMakeProgression(success));
        System.out.println(!a.canMakeProgression(failure));
        System.out.println(a.canMakeProgression2(success));
        System.out.println(!a.canMakeProgression2(failure));
    }

    // O(nlogn) time O(1) space(if can modify arg array)
    public boolean canMakeProgression(int[] arr) {
        if (arr == null || arr.length == 0) {
            return false;
        }
        if (arr.length == 1) {
            return true;
        }
        arr = arr.clone();
        Arrays.sort(arr);
        int delta = arr[1] - arr[0];
        for (int i = 2; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] != delta) {
                return false;
            }
        }

        return true;
    }

    // O(n) time O(n) space
    private boolean canMakeProgression2(int[] arr) {
        if (arr == null || arr.length == 0) {
            return false;
        }
        if (arr.length == 1) {
            return true;
        }

        int max = arr[0];
        int min = arr[0];
        Set<Integer> elements = new HashSet<>();

        for (int num : arr) {
            if (num < min) {
                min = num;
            }
            if (num > max) {
                max = num;
            }
            elements.add(num);
        }

        int delta = (max - min) / (arr.length - 1);

        for (int i = min; i < max; i += delta) {
            if (!elements.contains(i)) {
                return false;
            }
        }

        return true;
    }

}
