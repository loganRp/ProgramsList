//0 1 1 2 3 5 8 13 21
 function fab(n,a,b,sum){
    sum += `,${a+b}`;
    add = a+b ;
    if(n==1){
        return console.log(sum); 
    }
    fab(n-1,b,add,sum);
   
 }

function main(){
    let n = 5, a = 0, b = 1, s = 3;
    let sum = `${a},${b}`
    fab(n,a,b,sum);
}

main();
