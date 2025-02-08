
// --------- shallow copy --------------------------
// let obj = {
//     name : "Rahul",
//     rupee : 372
// }
// let user = {...obj}
// user.name = "Rana";

// console.log(obj);
// console.log(user);
// --------------------------------------------------- //

// -------------------- DEEP COPY ----------------------- //

// let obj = {
//     name : "Rahul",
//     rupee : 372,
//     class :{
//         roll :67,
//         books : "Chamestry"
//     },
//     fun(){
//         return "hello";
//     }
// }
// let user = {...obj} /// its only copy the one laver on object data

// let user = JSON.parse(JSON.stringify(obj));       // in this method if object have a function then it's not copy the function

// once more method that is lodash (import and use) , its copy the function as well as nested object
// let data = lodash(obj)

// user.name = "Rana";
// user.class.roll = 1;

// console.log(obj.fun());
// console.log(user);


// using loop
let obj = {
    name : "Rahul",
    rupee : 372,
    com :{
        company : "google",
        exp : 10,
        ctc : {
            cctc : 40,
            ectc : 60
        }
    }
}

let user = JSON.parse(JSON.stringify(obj))
user.name = "Ram";
user.com.company = "Amazon";
user.com.ctc.cctc = 80;

console.log(obj);
console.log(user);