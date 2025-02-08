import java.util.*;

public class TestExercise{

// 1.Enter 3 numbers from the user & make a function to print their average.
    // public static void average(int a, int b, int c){
    //     float avg = (a+b+c)/2;
    //     System.out.println(avg);
    // }

// 2. Write a function to print the sum of all odd numbers from 1 to n
    // public static void sumOfOddNumber(int a){
    //     int oddSum = 0;
    //     for(int i=1; i<=a; i++){
    //         if(i%2 != 0){
    //             oddSum +=i;
    //             System.out.print(i+",");
    //         } 
    //     }
    //     System.out.println();
    //     System.out.println(oddSum);
    // }

// 3. Write a function which takes in 2 numbers and returns the greater of those two.
    // public static void greaterNumber(int a, int b){
    //     if(a>b){
    //         System.out.println("greater number is : "+a);
    //     }else{
    //         System.out.println("greater number is :"+b);
    //     }
        
    // }

// 4. Write a function that takes in the radius as input and returns the circumference of a circle
    // public static void circumference(int radius){
    //     double circleOfCircumference  = 2 * (3.14 * radius);
    //     System.out.println(circleOfCircumference);
    // }

// 5. Two numbers are entered by the user, x and n. Write a function to find the value of one number raised to the power of another i.e. xn.
    // public static void powerNo(int a, int n){
    //     double power = Math.pow(a,n);
    //     System.out.println(power);
    // }

// 6. Write a program to print Fibonacci series of n terms where n is input by user :
    // 0 1 1 2 3 5 8 13 21 ..... 
    // In the Fibonacci series, a number is the sum of the previous 2 numbers that came before it.
    public static void FibonacciSeries(int n){
        int feb = 0;
        int feb1 = 1;
        System.out.print(feb+","+feb1);                        
        for(int i=3; i<=n; i++){
            int cal = feb + feb1; 
            System.out.print(","+cal);
            feb = feb1; 
            feb1 = cal; 
        }
    }

// 7. Write a function that calculates the Greatest Common Divisor of 2 numbers. 
    public static void GCF(int n, int m){
        int gcd = 1;
        for(int i=2; i<=n && i<=m ; i++){
            if(n%i==0 && m%i==0){
                gcd = i;
            }
        }
        System.out.print(gcd);
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        // int c = sc.nextInt();
        // average(a,b,c);
        // sumOfOddNumber(a);
        // greaterNumber(a,b);
        // circumference(a);
        // powerNo(a,b);
        // FibonacciSeries(a);
        GCF(a, b);
    }
}