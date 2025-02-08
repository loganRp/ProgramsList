import java.util.*;
public class NumberPattern{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();     
        
        // 1
        // 1 2
        // 1 2 3
        // 1 2 3 4 

        // for(int i=1; i<=n; i++){                          i
        //     for(int j=1;j<=i;j++){
        //        System.out.print(j);
        //     }
        //     System.out.println();
        // }

        
        // 1 2 3 4 
        // 1 2 3
        // 1 2
        // 1
        // 1st Method
        // for(int i=n; i>=1; i--){
        //     for(int j=1;j<=i;j++){
        //        System.out.print(j+" ");
        //     }
        //     System.out.println();
        // }

        // 2nd Method
        for(int i=1; i<=n; i++){
            for(int j=1;j<=n+1-i;j++){
               System.out.print(j+" ");
            }
            System.out.println();
        }
    }
}