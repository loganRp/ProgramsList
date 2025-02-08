// EX- 121,1331,15551,111,181,8778
const readLine = require('readline');
// let number = Number(readLine("Enter your number : "));
let number = 1222;
let pal = '';
function pallindrome(num){
    if(num/10!==0){
        pal += num % 10;
        num = (num / 10).toFixed();
        pallindrome(num)
    }
    return pal;
}
let data = pallindrome(number)
if(number == data){
    console.log("Number is pallindrome")
}else{
    console.log('Not a pallindrome.')
}