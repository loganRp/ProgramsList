import java.util.*;
public class stringTask{
    public static void main(String args[]){
    
        Scanner sc = new Scanner(System.in);
        // int size = sc.nextInt();
        // String [] name = new String[size];
       
// 1. Take an array of Strings input from the user & find the cumulative (combined) length of all those strings.
        // int totalLength = 0;
        // for(int i=0;i<size;i++){
        //     name[i] = sc.next();
        //     totalLength +=name[i].length();
        // }
        // System.out.println(totalLength);

// 2. Input a string from the user. Create a new string called ‘result’ in which you will replace the letter ‘e’ 
// in the original string with letter ‘i’. 
        String name = sc.next();
        String result = "";

        // 1. method
        for(int i= 0 ; i < name.length();i++){
            if(name.charAt(i) == 'e'){
                result += 'i';
            }else{
                result +=name.charAt(i); 
            }
        }
        // 2. method
        // String result = name.replace("e", "i");

       
        System.out.println(result);
            



// 3. Input an email from the user. You have to create a username from 
// the email by deleting the part that comes after ‘@’. Display that username to the user.

        // String email = sc.next();
        // String userName = "";
        // for(int i=0;i<email.length();i++){
        //     if(email.charAt(i) == '@'){
        //         break;
        //     }else{
        //         userName += email.charAt(i);
        //     }
        // }
        // System.out.println(userName);
    }
}