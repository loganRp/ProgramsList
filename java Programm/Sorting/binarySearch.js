// binary search in unsorted array;
function sorting(arr, t){
    for (let i = 0; i < arr.length; i++) {
       if(arr[i]==t){
        return i;
       }
    }
    return -1;
}

function main(){
    let arr = [2,4,1,9,3,6];
    let target = 9;
    return sorting(arr,target);
}

let sortedArr = main();

console.log(sortedArr);
