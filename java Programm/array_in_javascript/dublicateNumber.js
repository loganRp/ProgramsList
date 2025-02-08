let input = [1,1,1,2,2,5,3,3,1,4,5,2];
// 1:4    1111,222,33,55,4 
// 2:3
// 3:2
// 4:1
// 5:2
let udpatedArr = [],newArr = [];
for(let i=0;i<input.length;i++){             
    let count = 1;
    for(let j=i+1;j<input.length;){           
        if(input[i]==input[j]){
            count += 1;
            input.splice(j,1);
        }else{
            j++;
        }
    }
    let d = {
        data :input[i],
        count : count
    }
    newArr.push(d);
}
let sortedData = newArr.sort((a,b)=>{
    return a.count-b.count;                       
})

for (let index = 0; index < sortedData.length; index++) {
    for (let p = 0; p < sortedData[index].count; p++) {
        udpatedArr.push(sortedData[index].data);
    }
}


console.log(udpatedArr)








