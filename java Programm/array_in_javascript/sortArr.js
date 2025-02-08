let array = [34,3,245,4,5,61]

for (let index = 0; index < array.length-1;index++) {
   for (let i=index+1; i < array.length; i++) {
        if(array[index]>array[i]){
            let temp = array[index];
            array[index] = array[i];
            array[i] = temp
        }
   }
}

console.log(array)
