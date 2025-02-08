factorial = (n,r)=>{
    if(n==1 || n==0) return r;
    if(n<0){
        `-${r*=n}`;
        return factorial(n+1,r);
    }else{
        r *= n
        return factorial(n-1,r);
    }
    
}
function main(){
    let n = 4;
    let result = 1;
    let re = factorial(n,result);
    console.log(re);
}
main()