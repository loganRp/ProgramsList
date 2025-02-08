import java.util.*;

public class primeNumber{

    public static void checkPrime(int n){
        boolean division = false;
        int num = 0;
        if(n==2){
            System.out.println("Prime Number is : "+n);
            return;
        }

        for(int k=2 ; k<=n ; k++){
            for(int i=2 ; i<k ; i++){
                if(k%i==0){
                    division = true;
                    break;
                }else{
                   division = false;  
                }
            }
            if(!division){
                num +=1;
                System.out.print(k+",");                
            } 
        }
        System.out.println(); 
        System.out.println("Total Prime numbers are : "+num);
    }

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        checkPrime(num);
    }
}