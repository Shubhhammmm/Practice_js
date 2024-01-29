// ques-1

// const array = [1,1,12,2,2,23,3,3,5]

// const duplicate = array.filter((elem,index,arr) => arr.indexOf(elem)!==index)
// console.log(duplicate);

// Ques-2

// const arrNumber = [1,1,1,2,2,3,3,4,5,5,6,6,7,77,7,8]

// const maxfunction = function(arr){
//     return  arr.reduce(function(prev,curr){
//      return   prev < curr ? prev : curr

//     })

// }

// console.log(maxfunction(arrNumber));

// const arrayNumber = [1,2,3,4,4,5,6,7,8]

// const maxNumber = Math.max(...arrayNumber)

// console.log(maxNumber);

// let x = 1
// let y = "1"

// console.log(x == y);
// console.log(x === y);

// question-4

// const intArray = [1,2,3,4]

// const LargestNumber = function(arr){
//  firstLargest =  Math.max(...arr)
//   index = arr.indexOf(firstLargest);

//  arr.splice(index , 1)
//  secondLargest =  Math.max(...arr)
//  return(secondLargest)

// }

// console.log(LargestNumber(intArray));

// question-5

// const number = [1,2,3,4,5,7]

// let missArray = []

// const missingValue = function(arr){
//     let maxNumber = Math.max(...arr)
//     let minNumber = Math.min(...arr)
//     for(let i = minNumber; i<maxNumber; i++){
//         if( arr.indexOf(i) < 0){
//             missArray.push(i)
//         }
//     }

//     return missArray

// }

// console.log(missingValue(number));

// question - 6

// const number = [1,2,3,4,5,6,7,889,2,2,3,4]

// const evenNumber = number.filter((val,index, arr) =>{
//     return val%2 == 0

// })

// console.log(evenNumber);

// question - 7

// const number = [1,2,3,4]

// const totalSum = (arr) =>{
//     return arr.reduce((prev, curr) =>{
//         return prev + curr
//     })

// }

// console.log(totalSum(number));

// question -8

// const number = 5;

//  fact = 1;

// if(fact < 0){
//     console.log('print proper number');
// }else{
//     for( let i = 1; i<=number ; i++){
//         fact = fact * i
//     }
//     console.log(`factorial of ${number} is ${fact}`);
// }

// const arryNnumber = [1,2,3,4,45,5]

// const EvenNumber = () =>{
//     return arryNnumber.filter((val,index,arr) =>{
//         return val%2 === 0

//     })
// }

// console.log(EvenNumber(arryNnumber));

// question - 9

//  str = ["shubham"]

// // var strToArray = str[0].split("")
// // console.log(strToArray);

// const reverseStr = str.toString().split("").reverse().join('').toLocaleUpperCase().toLocaleLowerCase()

// console.log(reverseStr);

// const str = ["nitin"]

// const isPalindrome = (num) =>{
//     return num[0] === num[0].split("").reverse().join("")

// }

// console.log(isPalindrome(str));

// question - 14

// let a = 7;
// let b = 14;
// // let c = a;
// // a = b;
// // b = c;
// // console.log(a);
// // console.log(b);

// [a,b] = [b,a]

// console.log(`${a} ${b}`);

// question - 15

// const arr1 = [1,2,3,4]

// const arr2 = [5,6,7,8]

// let mergedArray = arr1.concat(arr2)
// let merge = [...arr1 , ...arr2]

// console.log(mergedArray);
// console.log(merge);

// question-16

// const num = 12;
// for(let i =0; i<=num;i++){
//     if(num %i === 0){
//         console.log(i);
//     }
// }

// question-17

// let num = 5 + '5' - 5

// console.log(num);
// console.log(typeof(num));

// const obj = {
//     a : 1,
//     b : null,
//     c : undefined,
//     d : 'hello'
// };

// let object = (Object.entries(obj).filter(([_, val]) => val != null))

// console.log(object);

// const num = 14;

// for(let i = 0;i<=num; i++){
//     if(num % i == 0){
//         console.log(i);
//     }
// }

// questions-19 intersection 2 arry

// const arr1 = [1,2,3,4,5,5]
// const arr2 = [3,4,5,6,7,5]

// const intersectionArray = arr2.filter((elem)=>{

//     return arr1.includes(elem)

// })

// console.log([...new Set(intersectionArray) ]);

// const arr1 = [1,2,3,4]
// const arr2 = [2,3,4,5,6]

// const unionArray =  [...arr1 ,...arr2]

// console.log([...new Set (unionArray)]);

// var number = 6;

// const number2 = 34

// const calculation = number*1.8+32

// const calculateToFer = 5/9*(number2 - 32)

// console.log(calculation);
// console.log(calculateToFer);

// const num = 10;
// const convertToKm = num * 0.62

// console.log(`${convertToKm} to mileslll`);

// q-23 convert it into uppercase

// const inputString = "hello world";
// const result = capitalizeFirstLetter(inputString);

// console.log(result);

// function outer(a){

//     return function inner(b){
//        return a + b;
//     }

// }

// let sum = outer(3,4)
// let sum1 = sum(4)

// console.log(sum);
// console.log(sum1);

// Question - 24  fibooncacci

// let a = 0;
// let b = 1;
// for(let  i = a; i<= 5; i++){
//     let temp = a + b;
//     a = b;
//     b = temp
//     console.log(temp);

// }

//question - 25 patterns

// for(let  i = 1; i<=6; i++){
//     for(let j = 1; j<= i;j++ ){
//        document.write("*")

//     }

//     document.write("<br>")

// }

//question - 26

// let str = "121"

// let reverseNum = str.toString().split('').reverse().join("") == str;
// console.log(reverseNum);

// question - 27 table

// const table = (num) => {
//   for (let i = 1; i <= 10; i++) {
//     let res = num * i;

//     console.table(`${num} X ${i} = ${res}`);
//   }
// };

// table(5);

// question  armStrong Number

// output Question
// var i = 10;
// setTimeout(() =>{
//     console.log(i);

// },1000)

// let count  = 0;
// function printCount(){
//     if(count == 0){
//         let count = 3;
//         console.log("count1" , count);
//     }
//     console.log("count2" , count);
// }

// printCount()

// let arr = [1,2,3]
// let sum  = 0

// arr.forEach((num) =>{

//     sum   += num;
//     console.log(sum);

// })

// let arr = [1,2,3,4,'s',true]

// let sum = 0;

// arr.forEach((str) =>{
//     if(typeof str === "number"){
//         sum += str

//     }

// })

// console.log(sum);

// let result = Array.from("Shubham")

// console.log(result);

// let sets = new Set([1,2,3])

// console.log(Array.from(sets));\

// let array = ['shubham']

// let result  = Array.from(array)

// console.log(result);

// let set = [ ...new Set([result])]

// console.log(Array.from(set));

// console.log(typeof Array.isArray(['shubham']));

// let arr = [1,2,4,5]

// console.log( Array.isArray (arr));
// console.log(arr instanceof Array);

// function cloning(inp){

//  console.log([...inp].flat(Infinity));
// }

// cloning([1,2,3,4,[5,6,[7,8]]])

// let arr = [1,2,3,4,[5,6,[7,8]]]

// console.log(arr.flat(Infinity));

// let arr = [ [1,2,3,4] , "shubham" , true ,{
//     names : "Bawa",
//     address : "Tehelka"
// } , NaN , undefined ]

// console.log(arr[0]);

// let user = {name : "kohli"}
// let userList = [user];
// user  = null;

// console.log(userList);

// (function(){
//     var a = b = 3;
// })()

// console.log(a);
// console.log(typeof a !== 'undefined');
// console.log(typeof b !== 'undefined');

// var a = {};
// b  = {key : 'b'};
// c ={ key : 'c'};

// a[b] = 123,
// a[c] = 456;
// console.log(a[b]);

// function showData(){
//     console.log(name);
//     console.log(age);
//     var name = 'vinod'
//     let age = 25;
// }

// showData()

// const income = {
//     skills: 108,
//     monthly(){
//         return this.skills * 108;
//     },
//     yearly: () => 888 * this.skills,
// };

// console.log(income.monthly());
// console.log(income.yearly());

// console.log(+true);
// console.log(+true + 2);
// console.log(!'js'); // negation

// let a = 108;
// let b = new Number(108);
// let c = 108;

// console.log(a == b);
// console.log(a === b);
// console.log(b===c);

// function sum(a,b){
//     return a + b;
// }

// console.log(sum(10, "10"));

// let data = [..."apple"]

// console.log(data);

// let set = Array.from(new Set(data))

// console.log(parseInt("9+10+2"));
// console.log(parseInt('7FM'));
// console.log(parseInt("10.09"));

// let arr = [1,2,3]

// let result =  arr.map((num) =>{
//     if(num > 0) return

//     return num * 2;

// })
// console.log(result);

// function countVowels(word) {
//   const vowels = word.match(/[aeiou]/g);

//   return vowels ? vowels.length : 0;
// }

// console.log(countVowels("Hey ! whats up"));

// const obj = {

// };

// Object.defineProperty(obj , "a" ,{
//     value : "char"
// });

// console.log(obj.a);

// console.log(Object.keys(obj));

// const  {fName : feDev} = {fName:"MX"}
// console.log(feDev);

// function sum(n1,  n2 = n1){
//     console.log(n1 + n2);

// }

// sum(10)

//  const newList = [2,3].push(4)

//  console.log(newList.push(5));

// console.log(0.1 + 0.2);

// const pets = ['dog' , 'cat'];
// ({ item : pets[2]} = {item : 'cat'});

// console.log(pets);

// const FOO = 'frontendMaster';

// console.log(!typeof FOO == 'object');
// console.log(!typeof FOO == 'string');

// const add = x => y => z => {
//    console.log(x,y,z);
//     return x + y +z;

// }

// add(10)(20)(30)

// const obj = {name : 'js'}

// // obj.ref = obj;

// const str = JSON.stringify(obj)

// console.log(str);

// var magic = 900;

// function magic(){
//     console.log("magic");
// }

// console.log(magic);

// let z = a = {};
// a.name = 'js';
// console.log(z.name);
// console.log(a.name);

// let arr = ["c" , "a" ,"b"]
// let sorted = arr.toSorted()

// let reversed = arr.toReversed()

// console.log(sorted);
// console.log(arr);

// console.log(arr.reverse());
// console.log(reversed);

// let promise = new Promise((resolve, reject) => {
//   let num = Math.floor(Math.random() * 10);
// //   console.log(num);

//   if (num < 10) {
//     resolve(`${num} is less then 10`);
//   } else {
//     reject("failed");
//   }
// })
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e, "try again"));

// let con  = document.getElementById("container")
// let love = document.querySelector("i")

// const promise = new Promise((resolve, reject) =>{

//     let a  = ~~(Math.random() * 10)
//     if(a <= 9){
//         resolve(`working for this number ${a}`)
//     }
//     else{
//         reject(`will not work for this number ${a}`)
//     }

// })
// .then((res) => console.log(res))
// .catch((e) => console.log(`opps try harder ${e}`))

// var age = 99;
// // console.log(window.age);
// console.table(age);

// let str = ["bhai" , "yr" ,"kya" , "bt" ,"hein" ,"ye"]

// let obj = {}

// for(let x of str){
//     if(obj[x]){
//         obj[x] += 1;
//     }
//     else{
//         obj[x] = 1
//     }
// }

// console.log(obj);

//  let a = 1;
//  let b = new Number(1)

//  console.log(a == b);
//  console.log(a === b);
//  console.log(typeof b);

// let array = [1,2,3,[4,5,6,[7,8]]]

// let flat = array.flat(Infinity)
// console.log(flat);

// print A to Z

// const arr = [...new Array(26)];

// let start = 65;

// arr.forEach((_,i) =>{

//     console.log(String.fromCharCode(start++));
// });

// const arr = Array.from(new Array(26));

// let start = 65; // ASCII code for 'A'

// arr.forEach((_, i) => {
//     console.log(String.fromCharCode(start++));
// });

//

// let filled = Array(5).fill("JS").join(" ")

// console.log(filled);

// let repeat = "js, ".repeat(5)
// console.log(filled);

// console.log(~~21);
// console.log(~~21.22);

// console.log(~32);
// console.log(~"2");

// console.log(~~~32);

// let  num = ~~(Math.random() * 10)
// console.log(num);

// console.log(5 + 4 + "4" + 2 + 40);

// function show(){
//     console.log('js is 💞di');
// }

// new

// let num = 5 + "5" -5
// console.log(num);
// console.log(typeof num);

// remove all the undefined n null value

const obj = {
  a: 1,
  b: null,
  c: "John",
  d: undefined,
};

let newObj = Object.fromEntries(Object.entries(obj).filter(([_, val]) => {
    return val != null;
  }))

console.log(newObj);
