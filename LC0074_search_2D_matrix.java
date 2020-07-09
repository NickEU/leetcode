public class LC0074_search_2D_matrix {
    public static void main(String[] args) {
        var o = new LC0074_search_2D_matrix();
        System.out.println(o.searchMatrix(new int[][] {{1, 3}}, 3));
        int[][] input = {
                {1,   3,  5,  7},
                {10, 11, 16, 20},
                {23, 30, 34, 50}};
        System.out.println(o.searchMatrix(input, 3));
        System.out.println(!o.searchMatrix(input, 13));
    }
    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return false;
        }

        if (matrix[0][0] > target
                || matrix[matrix.length - 1][matrix[0].length - 1] < target) {
            return false;
        }

        int row = findTargetRow(matrix, target);
        int col = findTargetCol(matrix[row], target);

        return col != -1;
    }

    private int findTargetRow(int[][] matrix, int target) {
        int start = 0;
        int end = matrix.length - 1;

        while (true) {
            int mid = start + (end - start) / 2;
            int curEl = matrix[mid][0];
            if (curEl > target) {
                end = mid - 1;
            } else if (curEl < target) {
                start = mid + 1;
            } else {
                return mid;
            }
            if (start > end) {
                return curEl > target ? mid - 1 : mid;
            }
        }
    }

    private int findTargetCol(int[] row, int target) {
        int start = 0;
        int end = row.length - 1;

        while (start <= end) {
            int mid = start + (end - start) / 2;
            int curEl = row[mid];
            if (curEl == target) {
                return mid;
            } else if (curEl > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return -1;
    }
}
