let arr = [-3, 2, 3, 1, 6]

let sum;
let sumOfSubArr = (...arr)=>{
    for(let i=0;i<arr.length;i++){
        sum = arr[i];
        for(let j=i+1;j<arr.length;j++){
            sum += arr[j];
            if(sum == 10){
                return {
                    firstIndex : i,
                    lastIndex : j,
                    result: sum
                };
            }
        }
    }
}

let data = sumOfSubArr(...arr)

console.log(data)
console.log(`sum of index ${data.firstIndex} to ${data.lastIndex} = ${data.result}`)