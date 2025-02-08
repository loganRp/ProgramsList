// let arr = [1,2,3,4,5,6,7,8,9,10];
// let sum = 15; newArr = []

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(j!=i){
//             for(let k=0;k<arr.length;k++){
//                 if(arr[i]+arr[j]+arr[k]==sum && k!=i && k!=j){
//                     let arrnum = []
//                     arrnum.push(arr[i])
//                     arrnum.push(arr[j])
//                     arrnum.push(arr[k])
//                     arrnum.sort((a,b)=>a-b)
//                     const sortedTupleStr = `(${arrnum.join(',')})`;

//                     if(!newArr.includes(sortedTupleStr)){
//                         newArr.push(sortedTupleStr);
//                     }

//                 }
//             }
//         }
//     }
// }
// console.log(newArr)



// 2nd method


function checkAge(data) {
    if (data === { age: 18 }) {
        console.log("You are an adult!");
    } else if (data == { age: 18 }) {
        console.log("You are still an adult.");
    } else {
        console.log(`Hmm.. You don't have an age I guess`);
    }
}

checkAge({ age: 18 });



function fn() {
    return 4 + 5;
}

fn(3, 7);