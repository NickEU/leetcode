public class LC1528_1_shuffle_string {
    // O(n^2) time O(n) space
    public String restoreString(String s, int[] indices) {
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < indices.length; i++) {
            sb.append(s.charAt(indexOf(indices, i)));
        }
        return sb.toString();
    }

    private static int indexOf(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1;
    }
}
