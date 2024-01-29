// console.log(escape("mother fucker luck "));
// console.log(unescape("mother%20fucker%20luck%20behenkelaude"));//

// output

// let courser = ["js" , 'java' , 'py' , "c"]

// delete courser[2] //

// console.log(courser);

// console.log(courser.length);

// let age = "27";
// console.log(typeof age);
// console.log(typeof +age);

// let array = [1,1,1,12,22,3,3,4,4,5,5,5]

// let duplicateArr = array.filter((elem,index,arr) =>
//  arr.indexOf(elem) !== index)

// console.log([... new Set(duplicateArr)]);

// question count duplicates

// const Month = ["A" , "B" , "c" ,'d' , 'f' ,"A" , "B" , "c" ]

// let count = Month.reduce((obj, month) =>{
//     if(obj[month] == undefined){
//         obj[month] = 1;
//         return obj;
//     }
//     else{
//         obj[month]++
//         return obj;

//     }

// },{})

// console.log(count);

// ques - check given number is an integer ?
// let data = [
//     { id: 1, name: 'John', age: 25, hobbies: { hobby1: 'Reading', hobby2: 'Gaming' } },
//     { id: 2, name: 'Alice', age: 30, hobbies: { hobby1: 'Painting', hobby2: 'Traveling' } },
//     { id: 3, name: 'Bob', age: 28, hobbies: { hobby1: 'Cooking', hobby2: 'Photography' } },
//     { id: 4, name: 'Eva', age: 22, hobbies: { hobby1: 'Cycling', hobby2: 'Writing' } },
//     { id: 5, name: 'Mike', age: 35, hobbies: { hobby1: 'Hiking', hobby2: 'Music' } },
//     { id: 6, name: 'Sophie', age: 29, hobbies: { hobby1: 'Dancing', hobby2: 'Movies' } },
//     { id: 7, name: 'Chris', age: 26, hobbies: { hobby1: 'Swimming', hobby2: 'Programming' } },
//     { id: 8, name: 'Olivia', age: 32, hobbies: { hobby1: 'Singing', hobby2: 'Yoga' } },
//     { id: 9, name: 'Daniel', age: 31, hobbies: { hobby1: 'Fishing', hobby2: 'Chess' } },
//     { id: 10, name: 'Emily', age: 27, hobbies: { hobby1: 'Gardening', hobby2: 'Shopping' } }
// ];

// let names = data.map((items) => {
//     return items.hobbies.hobby1;

// })

// console.log(names.sort());

// ques - maximum value

// let arr = [1,2,3,4,5,2,3,4,67,99]

// let max =  arr.reduce((prev , curr) =>{

//    return prev + curr

// },0)

// let length = arr.length
// console.log(length);

// let average =  max / length
// console.log(average);

// let days = ["sun" , 'mond' ,'tus' , 'wed']

// days.forEach((elem) =>{

//    let  day = elem.charAt(0).toUpperCase() + elem.substring(1)

//    console.log(day);

// })

// let firstUpperCase = days.map((element) => {
//   return  element.charAt(0).toUpperCase() + element.substring(1)

// });

// console.log(firstUpperCase);

// let dayss = ["sun" , 'mond' ,'tus' , 'wed']
// for(let day of dayss){
//   day =  day.charAt(0).toUpperCase() + day.substring(1)
//     console.log(day);
// }

// console.log(dayss);

// const arr = ["hi" , 'there']

// console.log(arr.toString(""));
// console.log(arr.join(" "));

// let arr1 = [1,2,3,4]
// let arr2 = [3,4,5,6,7]

// let result = arr1.some(ele => arr2.includes(ele) )
// console.log(result);

// const name1 = "mary";
// const name2 = 'army';

// function checkAnagram(name1 , name2){
//     let a = name1.toLowerCase();
//     let b = name2.toLowerCase();

//     a = a.split("").sort().join("")
//     b = b.split("").sort().join("")

//     return a === b;

// }

// console.log(checkAnagram(name1 , name2))

// const arr = [1,2,3,4]

// console.log(Array.isArray(arr));

// let str = "10"

// let reverse = str.toString().split("").reverse().join("") == str

// console.log(reverse);

// (function array(){

//     console.log('hii');

// })()

// const arr = [1,2,3,43]

// let remove = arr.pop()
// console.log(remove);
// console.log(arr);

// let sliced = arr.slice(0,-1)

// console.log(sliced);

// let spliced = arr.slice(0 , -1)
// console.log(spliced);
// console.log(arr);

// let arr = ['bhai yr kya bt de raha hain tu aaj ke din']

// let splittedArray = arr.toString().split(" ").reverse()
// console.log(splittedArray);

// let obj = {
//   name: "Shubham",
//   age: 26,
//   id: 908,
//   school: "NJHS",
// };

// let modifiedObject = {
//   address: "civil ward  no.7",
// };

// let combinedObj = {
//   ...obj,
//   ...modifiedObject,
// };
// console.log(combinedObj);
// // console.log(obj);
// console.log(modifiedObject);

// let arr = [1,2,3,4]

// let removeArray = arr.slice(1)
// console.log(removeArray);
// console.log(arr);

// questn -

// let num = 9.986

// let decimalNum = num.toFixed(2);
// console.log(decimalNum);

// let obj = {
//  name :   'Shubham is a Coder',
//  message : "Welcome Abroad",
// };

// const newSet = new WeakSet([obj]);

// console.log(newSet);

// function outer(q, w) {
//   let a = 20;
//   return function inner(z) {
//     x = q * w + z;

//     console.log(x);
//     console.log(a);
//   };
// }

// outer(1, 5)(2);

// let str = ["Shubham bhai kya bt hein be"];

// let replaced = str[0].replace("Shubham" ,"Shanu")

// console.log(replaced);

// console.log(-23/0);

// console.log(Navigator.appVersion());

/* 
number
boolean
string
null
undefined
NaN

*/