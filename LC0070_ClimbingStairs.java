public class LC0070_ClimbingStairs {
    // You are climbing a stair case.
    // It takes n steps to reach to the top.
    //
    // Each time you can either climb 1 or 2 steps.
    // In how many distinct ways can you climb to the top?

    // Constraints:
    // 1 <= n <= 45
    public int climbStairs(int n) {
        int steps = 1;
        int newSteps = 1;
        int totalSteps = 1;
        for (int i = 2; i <= n; i++) {
            totalSteps = steps + newSteps;
            steps = newSteps;
            newSteps = totalSteps;
        }
        return totalSteps;
    }
}
