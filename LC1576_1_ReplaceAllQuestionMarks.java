public class LC1576_1_ReplaceAllQuestionMarks {
    public String modifyString(String s) {
        var result = new StringBuilder();
        char prevChar = s.charAt(0) == '?'
                ? 'a' : s.charAt(0) == 'a' ? 'b' : 'a';
        for (int i = 0; i < s.length(); i++) {
            char curChar = s.charAt(i);
            if (curChar == '?') {
                result.append((char) (prevChar + 1));
                prevChar = prevChar == 'z'
                        ? 'a' : (char) (prevChar + 1);
            } else {
                if (prevChar == curChar) {
                    result.deleteCharAt(result.length() - 1);
                    result.append((char) (curChar + 1));
                }
                result.append(curChar);
                prevChar = curChar;
            }
        }

        return result.toString();
    }
}
