let arr = [34,5,3,245,4,5,61]

// console.log(arr.reverse())

// let newArr = [];
// for (let index = arr.length-1; index >=0; index--) {
//    newArr.push(arr[index])
// }

for (let index = 0; index < arr.length;) {
    if(arr.length == 0) return;
    console.log(arr.pop());
}

// console.log(newArr)
