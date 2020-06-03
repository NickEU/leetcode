import java.util.HashSet;
import java.util.Set;

// Given a string, find the length of the longest substring
// without repeating characters.

// O(n) time O(m) space 
// where m is the count of unique chars in a str
public class LC0003_2_longest_substring {
    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring(" ") == 1);
        System.out.println(lengthOfLongestSubstring("abcabcbb") == 3);
        System.out.println(lengthOfLongestSubstring("pwwkew") == 3);
        System.out.println(lengthOfLongestSubstring("bbbbb") == 1);
    }
    public static int lengthOfLongestSubstring(String s) {
        Set<Character> charsInCurrSubstr = new HashSet<>();
        int currSubstrLen = 0;
        int maxSubstrLen = 0;
        for (int i = 0; i < s.length(); i++) {
          char currChar = s.charAt(i);
          
          if (charsInCurrSubstr.contains(currChar)) {
            while (true) {
              charsInCurrSubstr.remove(s.charAt(i - currSubstrLen));
              currSubstrLen--;
              if (!charsInCurrSubstr.contains(currChar)) {
                charsInCurrSubstr.add(currChar);
                currSubstrLen++;
                break;
              }
            }
          } else {
            charsInCurrSubstr.add(currChar);
            currSubstrLen++;
          }
          
          if (currSubstrLen > maxSubstrLen) {
            maxSubstrLen = currSubstrLen;
          }
        }
        return maxSubstrLen;
      }
}