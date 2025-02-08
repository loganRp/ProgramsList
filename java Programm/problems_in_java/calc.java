import java.util.*;
public class calc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();        
        int b = sc.nextInt();
        String clc = sc.next();


        switch (clc) {
            case "sum" : int sum1 = a + b;
                System.out.println(sum1);
                break;
            case "sub" : int diff = a-b;
                System.out.println(diff);
                break;
            case "mul" : int mul = a*b;
                System.out.println(mul);
                break;
            case "div" : int div = a/b;
                System.out.println(div);
                break;
            default:  int mod = a%b;
                System.out.println(mod);
                break;
        }
    }
    
} 