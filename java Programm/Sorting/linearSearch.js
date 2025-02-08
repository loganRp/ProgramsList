function main(){
    let arr = [2,4,1,9,3,6];
    return sorting(arr);
}

function sorting(arr){
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }
    return arr
}

let sortedArr = main();

console.log(sortedArr);
