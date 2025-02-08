// You have a bucket containing multiple coins, some of which may be duplicates, and a target amount. What is the minimum number of coins you need to pick in order to achieve the exact target amount?
//  20*4,10*1,5*1,2*2
let target = 99;
let a = [ 20,10,5,2];
function check_minimumCoin(arr,tar){
    let coin = '',i=0;
    while(tar>0){
        let count =  Math.floor(tar/arr[i])
         coin += `${arr[i]} - ${count} ,`;
         tar = Math.floor(tar%arr[i]);
         i++
     }
     return coin;
}

function main(){
    console.log(check_minimumCoin(a,target));
}

main();
