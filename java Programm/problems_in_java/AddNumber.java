import java.util.*;

public class AddNumber{
    public static int addTwoNo(int a, int b){
        int sum = a + b ;   
        return sum;
    }

    public static int MultiTwoNo(int a, int b){
        int Mul = a * b ;   
        return Mul;
    }

    public static void FactorialNumber(int a){
        long fact = 1;
        if(a==0){
            System.out.println("Invalid Number");
            return;
        }else{
            for(int i=a; i>=1; i--){
                fact *= i;
            } 
            System.out.println("Factorial Of "+a+" is : "+fact);
        }
    }
    // public static float floatNumber(float a, float b){
    //     float sum = a + b;
    //     return sum;
    // }

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        // int b = sc.nextInt();
        
        //  int sum = addTwoNo(a,b);       
        //  float sum = floatNumber(a,b); 
        //  int mul = MultiTwoNo(a,b);
        FactorialNumber(a);



       
    }
}