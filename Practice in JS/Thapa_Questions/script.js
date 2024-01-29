// question -1 remove null & undefined

// const obj = {
//   a: 2,
//   b: null,
//   c: "john",
//   d: undefined,
// };

// let newObj = Object.fromEntries(
//   Object.entries(obj).filter(([_, val]) => {
//     return val != null;
//   })
// );

// console.log(newObj);

// question - 2  create an object from the pairs of the key and value

// const ArrData = (arr) => {
//   return Object.fromEntries(arr);
// };

// console.log(
//   ArrData([
//     ["a", 1],
//     ["b", 2],
//     ["c", 3],
//     ["d", 4],
//   ])
// );

// question - 3

// const arr = [1,2,3,4,5,9]

// let min = Math.min(...arr)
// console.log(min);

// let maxArray = arr.reduce((prev, curr) =>{
//     return prev < curr ? prev : curr

// })

// console.log(`${maxArray} is the largest number from this array ${arr}`);

// question - 4

let arr1 = [1,2,3,4,5,5]
// let arr2 = [2,3,5,6,7,8,9]

// let concatArray = [...arr1,...arr2]

// let removeDuplicates = [...new Set(concatArray)]

// console.log(removeDuplicates);
// console.log(concatArray);


// question - 5 

// let a = 7;
// let b = 8;

// [a , b] = [b , a]

// console.log( a, b);

// let num1 = 10;
// let num2 = 20;

// let temp = num1;
// num1 = num2 ;
// num2 = temp;
// console.log(num1 , num2);

// function factorial(num){
//     let fact = 1;

//     for(let i=1 ;i<=num; i++){
//         fact = fact * i
//     }
//     return fact;
// }

// console.log(factorial(5));


// const user = {
//     name : "Shubham",
//     age : 32

// }


// console.log(user?.age);
