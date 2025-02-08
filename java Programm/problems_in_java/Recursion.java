import java.util.*;
public class Recursion{

    // public static void febonacci(int a, int b, int n){
    //     if(n==0){
    //         return;
    //     }
    //     int c = a+b;
    //     System.out.print(","+c);
    //     febonacci(b,c,n-1);
    // }

    public static void powerExpo(int power, int x, int n){
        if(n==0){
            System.out.print(power);
            return;
        }
        power *= x;
        powerExpo(power,x,n-1);
    }

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();        
        int n = sc.nextInt();
        // int a = 0,b = 1;
        // System.out.print(a+","+b);
        // febonacci(a,b,n-2);
        int power = 1;
        powerExpo(power,x,n);
    }
}