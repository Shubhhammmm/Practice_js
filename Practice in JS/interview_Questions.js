// let a = []
// let b  = []
// console.log(a == b); // true // false
// console.log(a === b); // false


// let a = []
// let b = a;
// console.log(a == b); // true
// console.log( a === b); // true

// let a = [20]
// let b = [20]
// console.log(a[0] == b[0]); // true
// console.log(a[0] === b[0]); // false // true

// let z = [1,2,3,4];
// let a = {name : "anil"};
// console.log(...z); // [1234] or undefined 

// console.log(typeof NaN); // number

// let data = 10 - -10; // - - => + so is 20.
// console.log(data); // 20 

// const set  = new Set([1,1,2,3,4]); // set will remove the duplicate value
// console.log(set); // Set(){1,2,3,4}

// let data  = {name: "Anil"};
// console.log(delete data.name);// undefined // true

// let data  = {name : "Anil"}
// console.log(delete data); // false

// const data  = ['peter' , 'anil' , 'hero']
// const [y] = data;
// console.log(y); // name

// const data  = ['peter' , 'anil' , 'hero']
// const [y , z  , a] = data; // how to get 2nd element
// console.log(a);

// const data = {name : "anil" , age: 22, skills: "RJ"}
// const {name} = data;
// console.log(name);
 
// let data = {name : "Anil" , age: 33, skils :"RJ"}
// let info = {city : "Noida"};
// data ={data,...info}
// console.log(data); //

// let data = {name : "Anil" , age: 33, skils :"RJ"}
// let info = {city : "Noida"};
// data ={...data,...info}
// console.log(data);

// const name = 'anil';
// console.log(name()); // not a function 

// const result = false || {} || null;
// console.log(result); // 

// let are = null || false || ""
// console.log(are); // null // " "

// let res = [] || 0 || true;
// console.log(res); // true // []

// console.log(Promise.resolve(5)); 

// let arr = [1,2,3,45,4]
// let a = arr.splice(3);
// console.log(a);

// let arr1 = [1,2,3,4]
// let b = arr1.slice(3);
// console.log(b);

// let name = 'sidhu'

// function getName(){
//     console.log(name);
//     let name = 'anil';
// }
// getName(); // {} undefined

// let name = 'sidhu'

// function getName(){
//     console.log(name);
   
// }
// getName(); // undefined

// console.log(`${(x => x)('I love')} to program`) ;//


// let data = {
//     name : 'anil'
// }
// delete data.name;
// console.log(data); // {name : anil}

// let data = "true";
// console.log(typeof !data);

// let data = "true";
// console.log(!!typeof data);

// let data = ['anil' , 'peter' , 'parker']
// delete data[1];
// console.log(data); // [anil parker]
// console.log(data.length); // 3

// let a = [1,2,3]
// let b = [4,5,6]
// let c = [...a , ...b]
// console.log(c); // [1,2,3,4,5,6]

// let c = 3 ** 3;
// console.log(c); //  3 * 3 * 3

// let a = 2;
// setTimeout(() => console.log(a),0);
// a = 100; //  

// let a = 20;
// let A = 30;
// console.log(A); // 30 

// let a = "like";
// let b = `like`;
// console.log(a === b); // false // true

// let a = 1
// let c = 2
// console.log(--c === a); // false

// let a = 1;
// let b = 1;
// let c = 2;
// console.log(a === b === --c); // 1 === 1 // true

// console.log(a);
// var a; // undefined

// console.log(b); // undefined // intialization error

// console.log([[[[]]]]); // [[[[[]]]]]

// console.log(NaN == NaN); // true
// console.log( 2 ** 5);

//  const newPromise  = new Promise((resolve , reject)=>{
  
//     const randomNumber = Math.floor(Math.random() * 10);

//     if(randomNumber > 5){
//         resolve(` Suceess`)
//     } else{
//         reject(`eRROr`)
//     }
//     console.log(randomNumber);

//  },1000)
//  newPromise.then((done)=>{
//  console.log(done);
//  })
//  .catch((error)=>{
//    console.log(error);
// })


// let str = 'abcabc'
// function nonrepeat(str){
//     for(let i = 0; i<str.length; i++){
//         let j = str.charAt(i)
//        if(str.indexOf(j) === str.lastIndexOf(j)){
//         return j
//        }
//     } 
    
    
// }

// console.log(nonrepeat(str));

// console.log(isNaN(parseInt("123hii")))

// console.log(isNaN(parseInt("123abc")));

// console.log(1);
// setTimeout(function(){console.log(2)} , 1000)
// setTimeout(function(){console.log(3)} , 0)
// console.log(4) // 1 4 3 2;

// function x(){
//     setTimeout(function () {
//       console.log(i);  
//     } , 1000);
//     let i  = 1;

    
// }
// x(); // 0
// console.log(e);
// let e = 5;

// a = 75; // 75    // initialization error
// console.log(a);
// // let   a; 
//   // undefined  
  
//   let a;
//   {
//     a = 75;
//   }

//   {
//     a = 56;
//   }
//  console.log(a);


    // let a = 55;
    // console.log(a);

    // var a = 75;
    // console.log(b);

    // var c = 35;
    // console.log(d);

    // const c = 35;
    // console.log(c);

    // function userItem(){
    //     console.log(this.name)
    // }

    // let user1 = {
    //     name : "Shubham"
    // }
    // userItem.call(user1 , 'hi')
  
    // function userName(){
    //     console.log(this.name)
    // }
    
   
    // userName.call(user1)

    //call apply bind 
    // let user1 = {
    //     name : "Shubham"
    // }

    // let user2 = {
    //     name : "Shanu"
    // }

    // let user3  = {
    //     name : "chinki"
    //  } 
    
    // function greatUser(greating){
    //     console.log(greating  + "  " + this.name)
    // }
    // greatUser.call(user1 , 'hi')
    // greatUser.apply(user2 , ['hello'])
    
    // let newUser = greatUser.bind(user3 , 'hey')
    // newUser()

    // function userName(greating){
    //     console.log( greating + " " +  this.name);
    // }

    // let user1 = {
    //     name : "Shubham",

    // }
    // userName.call(user1 , `my name is` )

    // let user2 = {
    //     name : "Raaz"
    // }
    //  let newUser  = userName.bind(user2 , 'Hii')
    //  newUser();

    // let curryingExample = (a) => (b) => (c) => a * b * c;
    // console.log(curryingExample(2)(2)(2));


    // let Xurry = ((a)=>{
    //   return  (b) => (c) => a+b+c
    // })
    // console.log(Xurry(2)(3)(4)); // 


    
// console.log(1 + '2' + '2'); // 122 or 5
// console.log(1 + +'2' + '2'); // 32
// console.log(1 + -'1' + '2'); // 02
// console.log(+'1' + '1' + '2'); // 112
// console.log('A' - 'B' + '2'); // NaN2


// var x = 1;
// var y = 2;
// console.log(x++ + ++x); // 1+1  + 2 = 4
// console.log(y++ + y++); // 2+1 + 2 = 5

// var x = [typeof x, typeof y][1]; //
// console.log(typeof typeof x); // string , array

// var foo = function () {
//   console.log(foo === foo);
// };
// foo();  // true

// console.log(1 < 2 < 3); // true
//    console.log(3 > 2 > 1); // false

// var a = [1, 2, 3];
// console.log(a[6]); // [1 , 2, 3, <empty> , []] // undefined

// console.log(Number(null)); // false // 0
// console.log(Number(undefined)); // false  // NaN
// console.log(null == undefined); // false // true

// function outerFunction(){
//   let user = "shubham"
//   function innerFunction(){
//     console.log(user);
//   }
//   innerFunction();
// }

// outerFunction();








    
    










