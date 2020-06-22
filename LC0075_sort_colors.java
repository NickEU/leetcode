import java.util.Arrays;

// Given an array with n objects colored red, white or blue,
// sort them in-place so that objects of the same color are adjacent,
// with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent
// the color red, white, and blue respectively.

public class LC0075_sort_colors {
    public static void main(String[] args) {
        int[] actual = sortColors(new int[] {2,0,2,1,1,0});
        int[] expected = {0,0,1,1,2,2};   
        System.out.println(Arrays.equals(actual, expected));
    }

    public static int[] sortColors(int[] input) {
        int headPtr = 0;
        int tailPtr = input.length - 1;
  
        for (int i = 0; i <= tailPtr; ) {
          int currEl = input[i];
          if (currEl == 2 && i < tailPtr) {
              swap(input, i, tailPtr--);            
          } else if (currEl == 0 && i > headPtr) {
              swap(input, i, headPtr++);
          } else {
            i++;          
          }
        }    

        return input;
      }
    
      private static void swap(int[] input, int i, int j) {
        int temp = input[i];
        input[i] = input[j];
        input[j] = temp;
      }    
}