let arr = [12,34,67,90];
let student = 2,sum,d;
let newA=[], newA1 = [];
for(let i=0;i<arr.length-1;i++){   // for cal max
    newA = []
    for(let stu=0;stu<student;stu++){ // for student
        sum = 0;
        stu = stu==0 ? 0 : stu+i;
        for(let book=stu;book<arr.length;book++){  // cal sum
           sum += arr[book];
          if(book == i && stu !== 1) {
            break;
          }
        }
        newA.push(sum);
        console.log(sum);
    }
    newA1.push(Math.max(...newA));
    console.log(newA1);
}
console.log(Math.min(...newA1));