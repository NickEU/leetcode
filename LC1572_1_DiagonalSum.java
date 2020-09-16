public class LC1572_1_DiagonalSum {
    public int diagonalSum(int[][] mat) {
        final int size = mat.length;
        int sum = 0;
        for (int i = 0, j = 0; i < size; i++, j++) {
            sum += mat[i][j] + mat[size - 1 - i][j];
        }
        return size % 2 == 0
                ? sum
                : sum - mat[size / 2][size / 2];
    }
}
