// Given two binary strings, return their sum (also a binary string).
// The input strings are both non-empty and contains only characters 1 or 0.

// Constraints:

// Each string consists only of '0' or '1' characters.
// 1 <= a.length, b.length <= 10^4
// Each string is either "0" or doesn't contain any leading zero.

class LC0067_1_add_binary {
    public static void main(String[] args) {
        System.out.println(addBinary("1010", "1011").equals("10101"));
        System.out.println(addBinary("11", "1").equals("100"));
    }

    public static String addBinary(String a, String b) {
      int i = a.length() - 1;
      int j = b.length() - 1;      
      StringBuilder result = new StringBuilder();
      int carryVal = 0;
      String winner = null;
      int winnerIdx = -1;
      
      while (true) {
        if (i == -1) {
          winner = b;
          winnerIdx = j;
          break;          
        } 
        
        if (j == -1) {
          winner = a;
          winnerIdx = i;
          break;          
        }
        
        char binA = a.charAt(i);
        char binB = b.charAt(j);
        
        if (binA == '0' && binB == '0') {
          if (carryVal > 0) {
            result.append('1');
            carryVal--;
          } else {
            result.append('0');
          }
        } else if (binA == '1' && binB == '1'){
          if (carryVal > 0) {
            result.append('1');
          } else {
            result.append('0');
            carryVal++;
          }
        } else {
          result.append(carryVal > 0 ? '0' : '1');
        }              
                     
        i--;
        j--;
      }
      
      if (winner != null) {
        while (winnerIdx >= 0) {
          char next = winner.charAt(winnerIdx);
          if (carryVal > 0) {
            if (next == '1') {
              result.append('0');
            } else {
              result.append('1');
              carryVal--;
            }
          } else {
            result.append(next);
          }
          winnerIdx--;
        }
      }
      
      while (carryVal > 0) {
        result.append('1');
        carryVal--;
      }
      
      result.reverse();      
      return result.toString();              
    }
}