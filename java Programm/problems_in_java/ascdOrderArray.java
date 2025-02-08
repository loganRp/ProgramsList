import java.util.*;

public class ascdOrderArray{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();

        int [] number = new int[size];
    // input
        for(int i=0;i<size;i++){
           number[i] = sc.nextInt();
        }

    // output
       
       
        for(int i=0;i<number.length-1;i++){
            if(number[i] > number[i+1]){         // 36 90 32 7 22     // 3 2 4 8
                int temp = number[i];
                number[i] = number[i+1];
                number[i+1] = temp;
                i = -1;
            } 
        }
        for(int k=0 ; k<number.length ; k++){
            System.out.print(number[k]+" ");
        }
    }
}