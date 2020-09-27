import java.util.HashMap;
import java.util.Map;

public class LC1582_1_Special_Pos_In_Binary_Matrix {
    private int potentialSpecElemColumn;
    private final Map<Integer, Integer> colSums = new HashMap<>();

    public int numSpecial(int[][] matrix) {
        int result = 0;
        for (int row = 0; row < matrix.length; row++) {
            if (rowSum(matrix, row) == 1
                    && colSum(matrix, potentialSpecElemColumn) == 1) {
                result++;
            }
        }
        return result;
    }

    private int rowSum(int[][] matrix, int row) {
        int sum = 0;
        for (int col = 0; col < matrix[row].length; col++) {
            int curEl = matrix[row][col];
            if (curEl == 1) {
                potentialSpecElemColumn = col;
            }
            sum += curEl;
            if (sum > 1) {
                return sum;
            }
        }
        return sum;
    }

    private int colSum(int[][] matrix, int col) {
        if (colSums.get(col) != null) {
            return colSums.get(col);
        }
        int sum = 0;
        for (int[] el : matrix) {
            sum += el[col];
            if (sum > 1) {
                break;
            }
        }
        colSums.put(col, sum);
        return sum;
    }
}
