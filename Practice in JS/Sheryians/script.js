// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(()=>{
//     console.log(4);
// },0);
// console.log(5);

// var x;

// function getName (){
//     console.log("hello");
// }

// getName();
// console.log(x);
// console.log(getName);

// console.log(3 + "3"); //33
// console.log("3" + 3); //33
// console.log(3 + + "3");//6

// console.log( 3 - "3"); //0
// console.log("3" - 3);//0

// console.log(+"3" + 3);//6

// let b  = document.getElementById("p")
// b.addEventListener("input" ,()=>{
//     let a = this.value
//     console.log(a);
// })

// var x = 7

// let a = (()=>{
//     var x = 8;
//     console.log(x);
// })

// console.log(x);

// let a = 7;
// console.log(a);
// var b = 8;

// var a = 8;
// let a = 9;
// console.log(a);

//  var a = 10;
//  {
//     console.log(a);
//     var a = 20;
//     console.log(a);
//  }

// function checkArray(inp){
//     return Array.isArray(inp)
// }
// console.log(checkArray[1,2,3,4,5]);

// function checkArray(inpp){
//     return inpp instanceof Array;
// }
// console.log(checkArray[1,2,3]);

// function clone(inp){
//     var cloned  = [...inp]
//     return cloned;
// }
// console.log(clone[1,2,3,4,5]);

// Thapa Questions of js interview--------->>>>>

// let num = 5 + '5' - 5
// console.log(num); // 50
// console.log(typeof(num)); //number

// const obj = {
//    a : 1,
//    b : null,
//    c : undefined,
//    d :'hello'
// }

// let newObj =  Object.fromEntries(Object.entries(obj).filter(([_,val]) =>
// val != null))
// console.log(newObj);

// const ArrData = (arr)=>{
//    return  Object.fromEntries(arr)

// }

// console.log( ArrData([
//     ['a',1],
//     ['b',2],
//     ['c',3],
//     ['d',4],
// ]));

// ques find smallest and largest -->

// const arr = [1, 2, 3, 4, 67, 3];

// const smallnumber = (arr) => {
// return arr.reduce((smallNumber, num) => {
//     return Math.min(smallNumber, num);
//   });
// };
// console.log(smallnumber(arr));

//remove duplicates -->

// let arr1 = [1,2,3,4,4]
// let arr2  = [3,4,5,5,6,7]

// let arr3 = [...arr1,...arr2]
// arr3.sort ((a,b)=> a -b)
// arr3 = [...new mySet(arr3)]
// console.log(arr3);

//swap number
// let num1 = 50;
// let num2  =  60;

// [num1, num2] = [num2,num1]
// console.log(num1,num2);

// let arr = [num1,num2]
// arr.sort((a,b)=> b-a)
// console.log(arr);

//SET

// const mySet = new Set()

// mySet.add(1)
// mySet.add(2)
// mySet.add(3)
// mySet.add(4)
// mySet.add(5)

// console.log(mySet);

// console.log(mySet.delete(8));
// console.log(mySet.size);
// console.log(mySet.has(2));

// for(let data of mySet){
//     console.log(data);
// }

// const array = [1,1,2,2,3,3,4,5,6,7,7,8]
// const mySet = new Set(array)
// console.log(mySet.size);
// console.log([...mySet]);

// const myName = "vinod";
// for(let char of Object.keys(myName)){
//     console.log(`my characters are ${char}`);
// }

// for(let name in myName){
//     console.log(`My name is ${name}`);
// }\

//Optional Chaining

// const users = [
//     {
//         name : "john" , age : 30,
//     },
//     {
//         name : "jene" , age : 29,
//     }, {
//         name : "jonnhy" , age : 31,
//     },
// ]

// let newUser = users.map((e)=>e.name)

// console.log(newUser);

// let myVal = 0;
// const  num1 = myVal || 10;
// const num2 = myVal ?? 10;

// console.log(num1);
// // console.log(num2);

// const arr1 = [1,2,3,4,5,6]
// const arr2 = [3,4,5,6,7,8]

// let newArr =  arr1.filter((currElem)=>{
//     return arr2.includes(currElem)

// })
// console.log(newArr);

// let union = [...new Set([...arr1 , ...arr2])];
// console.log(union);

// console.log(typeof[1,2,3]);

// let names = 'Shubh'
// let newName = names;
// names = "Shubham";
// console.log(newName);

// const obj1 = {
//     id : 1,
//     name : "Shubham"
// }

// const obj2 = obj1;
// obj2.name = "Shu"
// console.log(obj2);// Shu

// let arrName = [
//     {
//         name : "Shubham",
//         pass : "happy",
//     },
//     {
//         name : "happy",
//         pass : "happiest",
//     },
// ]

// console.log(arrName.indexOf({
//      name : "happy",
//      pass : "happiest"
// }) ); //

// a =5;
// b =a;
// b++
// ++b;
// console.log(b);

// let arr1 = [1,3,5,7]
// let arr2 =[2,4,6,8]
// // let arr3 = [...new Set([...arr1,...arr2])]
// // console.log(arr3);
// let arr3 = [...arr1,...arr2]
// console.log(arr3.sort((a,b)=>a-b));

// const  mult = (a,b=2,c=5)=>{
//     console.log(a*b*c);
// }
// mult(4) // 40

// Rest parameter

// function add(...args){
//     let total = 0;
//     for(let i of args){
//         total += i;
//     }
//     console.log(total);
// }add(1,2,3,3,4)

// function fun(a,b,...c){
//     console.log(`${a} ${b}`); // R N
//     console.log(c);  //[ p  m e ]
//     console.log(c[0]); // p
//     console.log(c.length); // 3
//     console.log(c.indexOf("Edan")); // 2
// }fun('Ronaldo' , 'Nyemar' , 'pele','Messi',"Edan")

// function outerFunction (){
//     let a = 2;
//     function innerFunction(){
//         console.log(a);
//     }
//     innerFunction();

// }outerFunction()

//  (function (){
// console.log("HII");
// })()

// function x(){
//     for(let i = 1;i<=5;i++){
//         setTimeout(()=>{
//             console.log(i);

//         },i * 1000)
//     }
// }x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i)
//   }
// }
// x();

// let i = 5;
// let  j = null;
// console.log(i == j);

// var myName = "thapa"
// const guessMyName=()=>{
//     console.log(myName);
//     var myName =  "vinod"

// }
// guessMyName(); // undefined

//   var arr1 = [1,2,3,4]
//   var arr2 = [4,3,2,1]

//   if(arr1.length == arr2.length &&
//     arr1.every((currElem)=>{
//        if(arr2.indexOf(currElem) > -1 ){
//         return (currElem = arr2[arr2.indexOf(currElem)])
//        }
//     })){
//     console.log("Both are same");
//   }else{
//     console.log("Not same");
//   }

// let arr = [1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3]
// let newArr = [...new Set([...arr])]
// console.log(newArr)

// let rev = (num)=>{
//     let newRev = num.toString().split("").join("")
//     if(newRev.endsWith("-")){
//         newRev = "-" + newRev
//     return parseInt(newRev)
//     }else{
//         return parseInt(newRev)
//     }

// }
// console.log(rev(123));

// let num = 10;
// var isPrimeNumber = true;
// for(let i =2;i< num;i++){
//     if(num % i == 0){
//         isPrimeNumber = false;

//     }
// }

// if(isPrimeNumber == true){
//     console.log(`${num} is a prime`);
// }else{
//   console.log( `${num} not a prime`)
// }

// let num = 4;
// console.time(`codeStart`)
// for(let i =num;i>1;) {
//     i = i-1;
//     var fact = num * i;
//     num = fact;

// }
// console.log(fact);
// console.timeEnd("Code Start")

// let num = 3;
// for(let i =num;i > 1;)
// {    i = i -1;
//     var facNt = num * i;
//     num = fact;

// }   console.log(fact);

// let num = 5;
// console.time("CodeStart")
// for(var fact = 1; num > 1;num--){
//     fact = fact * num;
// }console.log(fact);
// console.timeEnd("codestart")

//UNION

// let nums1 = [1,2,3]
// let nums2 =[2,4,5]

// let intersectionArray = nums1.filter((currElem)=>{
//    return nums2.includes(currElem);
// })
// console.log([ ...new Set(intersectionArray)]);

// let getSum = (a) => (b) => (c) => (d) => (e)=> a + b + c + d + e


// let total = getSum(1)(2)(3)(4)(5);
// console.log(total);

// function x(){
//     var a = 7;
//     function y (){

//     }
//     return y;
// }
// var z = x();
// console.log(x);
// z();

// function x(){
//      let a  = 7;
//     function y (){
//         console.log(a);
//     }
//     return y;
// }
// let z = x()
// console.log(z);
// z();

// const num = 100;

// let x = 0;
// let y = 1;
// let fn = x + y;
// console.log(x);
// while (fn < num){
//     console.log(fn);
//     fn = x + y;
//     x =y;
//     y = fn;
// }
// let sum = (a,b)=> console.log( a + b);

// sum(5,10)

// let sum = (a)=>(b)=>(c)=>(d)=> console.log(a+b+c+d);
// sum(5)(10)(7)(3)

// var 
// a 
// =
// 10
// console
// .
// log
// (a)
// ;

// function asi(){
//     return   {
//       foo  : 1
// } 

// }
// let a =  asi()
// console.log(a);

// let name1 = {
//     firstname : "john",
//     lastname : "doe",

// }

// let printName =  function(country){
//     console.log(this.firstname + " " + this.lastname + " from " + country );
// }
// printName.call(name1 , "America")

// let name2 = {
//     firstname : "Sachin",
//     lastname : "tendulkar",  
// }

// printName.call(name2 , "Aus")
// printName.apply(name2 , ["NewYork"])

// let name3 = {
//     firstname : "Sachin",
//     lastname : "lappo",  
// }

// let p = printName.bind(name3 , "Aurangabad")
// p();

// function Student (first,last){
//     this.firstName = first;
//     this.lastName = last

// }

// let Student1 = new Student("john", "deo");
// console.log(Student1);


// Define the property of object

// let person = {
//     name : "ranga"
// }

// Object.defineProperty(person , "id", {
//     value : 1
//     //writable : true
// });

// console.log(person.id);
// person.id = 4;
// console.log(person.id);

// let aim = new Promise((resolve,reject)=>{
//     const num = Math.random();

//     if(num > 0.5){
//         resolve(`Resolved`)
//         // console.log(num);
//     }else{
//       reject (`Rejected`)
//     }

// })
// aim
// .then((res)=>console.log(res))
// .catch((err)=>console.log( err))

// let a = 20;
// let b = 30;

// let arr = [a,b]
// arr.sort((a,b)=>b-a)
// console.log(arr);

// let arr = [1,2,3,4,5,6]

// let sum = arr.reduce((accum,curr)=>accum + curr)
// console.log(sum);

// console.log(Nan === NaN);

// console.log(0 == false);

// let a = 5;
// let b = "5";
// console.log(typeof(a));
// console.log(typeof(b));

// console.log(a == b);
// console.log(a === b);

// let a =  (()=>{

// })

// const unaryFunction = (a) => console.log(a + 10);

function getPersonInfo(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
  }
  
  const person = 'Lydia';
  const age = 21;
  
  getPersonInfo`${person} is ${age} years old`;
