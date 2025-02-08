// binary search in unsorted array;
function twoSum(arr, t, ini){
    let newArr = [];
    while(ini<arr.length-1){
        for (let i = ini+1; i < arr.length; i++) {
            if(arr[i]+arr[ini] == t){
                newArr.push(ini, i);
                return newArr;
            }
        }
        ini++;
    }
}

function main(){
    let arr = [2,4,1,3,6,11];
    let target = 17;
    let ini = 0
    return twoSum(arr,target,ini);
}

let sortedArr = main();

console.log(sortedArr);
