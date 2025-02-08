let array = [1, 2, 4, 6, 3, 7, 8];

//1 method
// let max = Math.max(...array);
// let totalNo = max*(max+1)/2;
// let TotalArr = array.reduce((ele,acc)=>{
//     return acc+=ele
// })
// let missingNumber = totalNo -TotalArr
// console.log(missingNumber);

// 2nd Method
let sortedArr = array.sort((a,b)=>a-b);
for (let index = 0; index < sortedArr.length; index++) {
    let compare = index+1
    if(sortedArr[index]!= compare){
        return console.log('missing number :',compare);
    }
    
}


