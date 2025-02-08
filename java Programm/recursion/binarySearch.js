
function sorting(arr, s, e, t){
    let mid = Math.floor(s+(e-s)/2);
    if(arr[mid] == t){
        return mid;
    }else if(arr[mid]<t){
        return sorting(arr,mid++,e,t)
    }else{
        return sorting(arr,s,mid--,t);
    }

}

function main(){
    let arr = [2,3,5,6,7,9,10];
    let start = 0;
    let end = arr.length;
    let target = 7;
    let sortedArr = arr.sort((a,b)=>a-b);
    return sorting(sortedArr, start, end, target);
}

let sortedArr = main();

console.log(sortedArr);
