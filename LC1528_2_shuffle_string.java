import java.util.HashMap;

public class LC1528_2_shuffle_string {
    // O(n) time O(n) space
    public String restoreString(String s, int[] indices) {
        StringBuilder sb = new StringBuilder();
        var map = new HashMap<Integer, Character>();
        for(int i = 0; i < indices.length; i++) {
            map.put(indices[i], s.charAt(i));
        }
        for(int i = 0; i < indices.length; i++) {
            sb.append(map.get(i));
        }
        return sb.toString();
    }
}
