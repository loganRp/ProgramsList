let a = [1,2,3,-4,-1,4,-8,9,-3,-7]

let arr = a.filter((ele)=>ele<0).sort((a,b)=>a-b);
let arr1 = a.filter((ele)=>ele>0).sort((a,b)=>a-b);
let finalArr = [];
for(let i=0;;i++){
    if(i<arr.length){
        finalArr.push(arr[i]);
        finalArr.push(arr1[i]);
    }else if(i==arr.length+1){
        break;
    }else{
        for(let j=i;j<arr1.length;j++){
            finalArr.push(arr1[j]);
        }
    }
}

console.log(finalArr)


// output : [
//     -8,  1, -7,  2, -4,
//      3, -3,  4, -1,  9
//   ]