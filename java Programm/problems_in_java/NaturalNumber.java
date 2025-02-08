import java.util.*;
public class NaturalNumber{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();

        // int sum = 0;
        // for (int i = 1; i <= num; i++) {
        //     sum+= i;
        // }
        int sum = num*(num+1)/2;
        System.out.println(sum);
    }
}