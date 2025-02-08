// let arr = [34,54,89,245,345,395,461]
let arr = [1, 2, 3]

// let largestNumber = arr[0];
// let newarr = []
// for (let index = 1; index < arr.length; index++) {
//     if(largestNumber<arr[index]){
//         largestNumber = arr[index];
//         if((largestNumber>arr[index-1] && largestNumber>arr[index+1])){
//             newarr.push(arr[index]);
//         }
//     }
// }
// console.log(newarr.length>0 ? newarr : largestNumber);


let unique = (arr,n)=>{
    let findIndex = arr.indexOf(n);
    let sortedArr = arr.sort((a,b)=>b-a);
    let newd = sortedArr[findIndex]
    if((findIndex==0 && sortedArr[1]< newd ) || (findIndex == sortedArr.length-1 && sortedArr[sortedArr.length-2]<newd)){
        return console.log(true);
    }else{
        for (let index = findIndex; index < sortedArr.length; index++) {
            if(sortedArr[index-1]<newd && n>sortedArr[index+1]){
                return console.log(true);  
            }else{
                return console.log(false);
            }
             
        }
    } 
}
unique(arr,3)