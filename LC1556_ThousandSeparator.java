import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class LC1556_ThousandSeparator {
    public String thousandSeparator(int n) {
        char[] digits = String.valueOf(n).toCharArray();
        StringBuilder result = new StringBuilder();
        int withoutSeparator = 0;
        for (int i = digits.length - 1; i >= 0; i--) {
            if (withoutSeparator++ == 3) {
                withoutSeparator = 1;
                result.append('.');
            }
            result.append(digits[i]);
        }
        return result.reverse().toString();
    }

    // slow, but fun ( not rly )
    public String thousandSeparator2(int n) {
        char[] chars = String.valueOf(n).toCharArray();
        int lastElIdx = chars.length - 1;
        return new StringBuilder(IntStream.iterate(lastElIdx, i -> i >= 0, i -> i - 1)
                .mapToObj(i -> i != lastElIdx && (lastElIdx - i) % 3 == 0
                        ? '.' + String.valueOf(chars[i])
                        : String.valueOf(chars[i]))
                .collect(Collectors.joining())).reverse().toString();
    }
}
