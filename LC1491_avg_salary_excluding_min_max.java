import java.util.Arrays;

public class LC1491_avg_salary_excluding_min_max {

    public static void main(String[] args) {
        var o = new LC1491_avg_salary_excluding_min_max();
        System.out.println(o.average(new int[] {4000,3000,1000,2000}) == 2500);
        System.out.println(o.average(new int[] {8000,9000,2000,3000,6000,1000}) == 4750);
        System.out.println(o.average(new int[] {6000,5000,4000,3000,2000,1000}) == 3500);
    }

    public double average(int[] salary) {
        // streams are slow, but fun
        return Arrays.stream(salary)
                .sorted().limit(salary.length - 1).skip(1)
                .average().orElseThrow();
    }
}
