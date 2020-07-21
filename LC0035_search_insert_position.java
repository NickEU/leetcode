public class LC0035_search_insert_position {
    public static void main(String[] args) {
        var o = new LC0035_search_insert_position();
        System.out.println(o.searchInsert(new int[] {1, 3}, 0) == 0);
        int[] input = {1,3,5,6};
        System.out.println(o.searchInsert(input, 5) == 2);
        System.out.println(o.searchInsert(input, 2) == 1);
        System.out.println(o.searchInsert(input, 7) == 4);
        System.out.println(o.searchInsert(input, 0) == 0);
    }
    public int searchInsert(int[] nums, int target) {
        int start = 0;
        int end = nums.length - 1;

        while (true) {
            int mid = start + (end - start) / 2;
            int curEl = nums[mid];

            if (start >= end) {
                return curEl > target || curEl == target ? mid : mid + 1;
            }

            if (curEl > target) {
                end = mid - 1;
            } else if (curEl < target) {
                start = mid + 1;
            } else {
                return mid;
            }
        }
    }
}
