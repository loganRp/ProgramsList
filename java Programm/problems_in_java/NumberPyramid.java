import java.util.*;
public class NumberPyramid{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();     
        
        //         1 
        //       2   2 
        //     3   3   3
        //   4   4   4   4
        // 5   5   5   5    5
         int k = n;
        for(int i=1; i<=n; i++){
            for(int j=1;j<=k;j++){
                int sum = i+j;
                if(sum>=6 && sum%2==0){
                    System.out.print(i);
                }else{
                    System.out.print(" ");
                }
            }
            k++;
            System.out.println();
        }
    }
}