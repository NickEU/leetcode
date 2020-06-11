import java.util.Deque;
import java.util.LinkedList;

public class LC0020_2_valid_parentheses {
  public static void main(String[] args) {
    System.out.println(isValid("{}[]()"));
    System.out.println(isValid("{[]()}"));
    System.out.println(!isValid("{}[]((()"));
    System.out.println(!isValid("([)]"));

  }

  public static boolean isValid(String s) {
    Deque<Character> braces = new LinkedList<>();

    for (int i = 0; i < s.length(); i++) {
      char currChar = s.charAt(i);
      if (currChar == ']' || currChar == '}' || currChar == ')') {
        Character oldestChar = braces.peekFirst();
        if (oldestChar == null || currChar == ']' && oldestChar != '['
        || currChar == ')' && oldestChar != '('
        || currChar == '}' && oldestChar != '{') {
          return false;
        }

        braces.pollFirst();
      } else {
        braces.push(currChar);
      }
    }

    return braces.isEmpty();
  }
}