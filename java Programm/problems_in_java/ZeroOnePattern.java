import java.util.*;
public class ZeroOnePattern{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();     
        
        // 1
        // 0 1
        // 1 0 1 
        // 0 1 0 1
        // 1 0 1 0 1
        for(int i=1; i<=n; i++){
            for(int j=1;j<=i;j++){
                // 1st method
                // if((i%2==0 && j%2==0) || (i%2!=0 && j%2!=0)){
                //     System.out.print("1 ");
                // }else{
                //     System.out.print("0 ");
                // }

                // 2nd Method
                int sum = i+j;
                if(sum%2==0){
                    System.out.print("1 ");
                }else{
                    System.out.print("0 ");
                }
            }
            System.out.println();
        }
    }
}