import java.util.*;
public class solidRhombus{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();     
        
        //        * * * * *
        //      * * * * *
        //    * * * * *
        //  * * * * *
        //* * * * *
        for(int i=1; i<=n; i++){
            int k = n*2-1;
            for(int j=1;j<=k;j++){
                if(j>=n+1-i && j<=k+1-i){
                    System.out.print("* ");
                }else{
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}