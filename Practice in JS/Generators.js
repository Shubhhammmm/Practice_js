// function *Generator(){
//     console.log('done');
//     yield 20;
// }
//  let as = Generator();
//  console.log(as.next());
//  console.log(as.next());


// let x = 10;
// y = 40;
// x =(y+= 20, y);
// console.log(x);

// for(var i  = 0 ;i<3;i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1);
// }

// for(let i  = 0 ;i<=3;i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1);
// }

// console.log(+true);
// console.log(typeof +true);

// let data  = "size";
// const bird = {
// size : 'small',
// };
// console.log(bird[data]);// small
// console.log(bird['size']); // small
// console.log(bird.size); // small
// console.log(bird.data); // undefined

// let c = {name: 'peter'};

// c.name = 'anil';
// let d;
// d = c;
// console.log(d.name); // anil



// var x;
// var x = 10;
// console.log(x); // 10


// let a = 3;
// let b = new Number(3);
// console.log(a == b); // false // true 
// console.log( typeof a  ===  typeof b); // false

// let name;
// naem = {};
// console.log(name); // undefined


// function fruit(){
//     console.log('woof!');
// }

// fruit.name = 'apple'
// console.log(fruit());  //{name : apple woof!} // woof undefined

// function sum(a , b){
//     return a + b;
// }

//  console.log(sum(1 , '2')); // 1 2

// let number = 0 ;
// console.log(number++);// 1 // 0
// console.log(++number); // 1 // 2
// console.log(number); // 0 // 2

// function getAge(...args){
//     console.log(typeof args);
//     console.log(args);
// }
// getAge(21);  // object

// function getAge(){
//     'use strict'
//       age = 21;
//     console.log(age);
// }
// getAge(); // undefined

// const sum = eval('10*10+5');
// console.log(sum); // 105  or 10105

// const obj = {1 : 'a' , 2: 'b' , 3: 'c'};
//  console.log( obj.hasOwnProperty('1')); // '1'
//  console.log(obj.hasOwnProperty(1)); // a


// for ( let  i = 1 ; i <= 5 ; i++){
//     if(i === 3) continue;
//     console.log(i); //  1 2 4 5
// }

// const foo = () => console.log('First');
// const bar =() => setTimeout(()=> console.log("second"),2000)
// const baz =() => console.log('third');

// bar();

// baz(); 
// foo(); // 1st 3rd 2nd

// const person = {name : "lydia"};

// function sayHi(age){
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person , 21));
// console.log(sayHi.bind(person , 21)());

// function sayHi(){
//     return (()=> 0 )();
// }
// console.log( typeof sayHi()); // number

// 25   function sayHi(){
//     return () => 0;
// }
// console.log(typeof sayHi()); // number // function

// console.log(typeof typeof 1); // string

// const numbers = [1,2,3]
// numbers[9] = 11;
// console.log(numbers);

// const numbers  =[1,2,3]
// numbers[4] = numbers;
// console.log(numbers); // [1 ,2 ,3,empty,]

// console.log(!!null); 
// console.log(!!"");
// console.log(!!1);

// console.log( setInterval (()=> console.log('Hi'),1000));
// console.log( setInterval (()=> console.log('Hi'),1000));
// console.log( setInterval (()=> console.log('Hi'),1000));


// console.log([...'anil']);

// let data = 3 + 4 + '5';
// console.log(typeof data);//number // string

// console.log( typeof 3 + 4 + '5' ); // number

// console.log(typeof(3 + 4 + + '5')); // object/function12
 
// console.log(typeof []); // object

// let data  = [1 , 2, 3].map(num =>{
//     if(typeof num === 'number') return;
//     return num * 2;
// });
// console.log(data); // undefined

// function getInfo(member){
//     member.name = "anil";
// }
// const person = {name : "sarah"}

// getInfo(person)
// console.log(person); // anil


// function Car(){
//     this.make = 'tata';
//     return {make : 'kia'}
// }

// const myCar  = new Car();
// console.log(myCar.make); // kia

// (()=>{
//     let x = ( y = 10);
    
// })();
// console.log(typeof x); // number or undefined

// console.log(!true   - true); //  0 - 1 => -1

// console.log(true + + "10"); // 11