class LC0231_1_power_of_two {
    public static void main(String[] args) {
        System.out.println(isPowerOfTwo(32) == true);
        System.out.println(isPowerOfTwo(298) == false);
        System.out.println(isPowerOfTwo(1) == true);
    }
    public static boolean isPowerOfTwo(int n) {
        return n > 0 && (n & (n - 1)) == 0;
    }
}