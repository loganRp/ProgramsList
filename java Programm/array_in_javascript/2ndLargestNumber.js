let arr = [34,52,83,245,41,59,61]

// 1St method
// let largestNumber = arr[0];

// for (let index = 0; index < arr.length; index++) {
//     if(largestNumber<arr[index]){
//         largestNumber = arr[index]
//     }
// }
// let index = arr.indexOf(largestNumber)
// arr.splice(index,1)
// let secondLarg = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if(secondLarg<arr[i]){
//         secondLarg = arr[i]
//     } 
// }

// console.log(secondLarg)


// 2nd Method

// let secondLarg = arr.sort((a,b)=>b-a)
// console.log(secondLarg[1]);


// 3rd method
// let newArray = [];
// for (let index = 0; index < arr.length-1; index++) {
//     for (let i = index+1; i < arr.length; i++) {
//         if(arr[index]<arr[i]){
//             newArray.push(arr[i]);
//         }
//     }
// }
// console.log(newArray[1]);

