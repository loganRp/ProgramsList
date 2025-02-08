let arr = [34,5,3,245,4,5,61]

let largestNumber = arr[0]

for (let index = 0; index < arr.length; index++) {
    if(largestNumber<arr[index]){
        largestNumber = arr[index]
    }
}

console.log(largestNumber)
