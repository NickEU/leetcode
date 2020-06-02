public class LC1464_2 {
  public int maxProduct(int[] nums) {
    int max = Integer.MIN_VALUE, maxSecond = max;

    for (int number : nums) {
      if (number > maxSecond) {
        if (number > max) {
          maxSecond = max;
          max = number;
        } else {
          maxSecond = number;
        }
      }
    }

    return (max - 1) * (maxSecond - 1);
  }
}
