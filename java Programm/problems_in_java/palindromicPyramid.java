import java.util.*;
public class palindromicPyramid{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();     
        
        //         1 
        //       2 1 2 
        //     3 2 1 2 3
        //   4 3 2 1 2 3 4
        // 5 4 3 2 1 2 3 4 5  
         int k = n;
        for(int i=1; i<=n; i++){
            for(int j=1;j<=k;j++){
                if(j>n+1-i){
                    System.out.print(i);
                    i--;
                }else if(j==n){
                     System.out.print(i);
                }else{
                    i++;
                    System.out.print(i);
                }
            }
            k++;
            System.out.println();
        }
    }
}