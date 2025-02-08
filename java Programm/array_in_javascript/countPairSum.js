let array = [1,3,4,9,-1,-3,8];
let sum = 2, output = 0,arrList = [];

for (let index = 0; index < array.length; index++) {
    for (let i = index+1; i < array.length; i++) {
        if(array[index]+array[i] == sum){
            output +=1;
            arrList.push(`(${array[index]},${array[i]})`)
        }
    }
}
console.log(output);
console.log(arrList);



