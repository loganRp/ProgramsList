import java.util.*;

public class sortedArray{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();

        int [] number = new int[size];
    // input
        for(int i=0;i<size;i++){
           number[i] = sc.nextInt();
        }

    // output
        boolean isSorted = true;
        for(int i=0;i<number.length-1;i++){
            if(number[i] > number[i+1]){
                isSorted = false;
            }
        }
        if(isSorted) System.out.println("This array is sorted");
        else System.out.println("This array is not sorted");
    }
}