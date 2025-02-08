// var createCounter = function(init) {
//     let val=init;
//     return {
//         increment : function(){ 
//             return ++val;
//         },
//         reset :function(){
//             val = init
//             return val;
//         },
//         decrement : function(){
//             return --val;
//         }
//     }
    
// };

// const counter = createCounter(5)
// console.log(counter.increment()); // 1
// console.log(counter.reset()); // 0
// console.log(counter.decrement()); // 0



// var arr = [0,10,20,30];

// let data = function main(arr,fn){
//     let result = [];
//     for(let i=0;i<arr.length;i++){
//         if(fn(arr[i],i)){
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

// console.log(data(arr,function greaterThan10(n){
//     return n>10;
// }))

// composite function
var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => {
            return fn(acc);
        }, x);
    }
};
const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9


// const compose = (functions) => {
//     return (input) => {
//       return functions.reduceRight((acc, fn) => {
//         return fn(acc);
//       }, input);
//     };
//   };

// const composedFunction = compose([x=> x+5, x=> x*5, x=> x-5,]);
// const result = composedFunction(7);

// console.log(result); // Output: 36