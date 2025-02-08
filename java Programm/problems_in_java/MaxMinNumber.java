import java.util.*;

public class MaxMinNumber{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();

        int [] number = new int[size];
    // input
        for(int i=0;i<size;i++){
           number[i] = sc.nextInt();
        }

    // output
        int maxValue = number[0], minvalue = number[0];
        for(int i=0;i<number.length;i++){
            if(maxValue<number[i]){
                maxValue = number[i];
            }else if(minvalue>number[i]){
                minvalue = number[i];
            }
        }
        System.out.println("Max value is  : "+maxValue);
        System.out.println("Min value is  : "+minvalue);
    }
}