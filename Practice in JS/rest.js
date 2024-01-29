// let arr1 = [1,2,3,4]
// let arr2 = [...arr1,5,6,7]
// console.log(arr2)


// function sum (...args){
//     let sum   =  0;
//      for(let i in args){
//         sum += args[i]
       
        

//     }
//     console.log(sum);

// }sum(1,2,3,4,56,6)


// let arr = [1,2,3,45,]
// let a = arr.map( e => e + 5);
// console.log(a)

// let arr = [12,3,4,5,60]
// let a = arr.filter(e =>  e > 5)
// console.log(a)


 //1+2+3=6,6+2+3=11,11+3+4=18,18+5+6=29,
 
// let arr = [1,2,3,4,5,6]// 21
// let a = arr.reduce((e,f,g) =>{

//   return e + f;
// })
// console.log(a); // 36


// let aim = new Promise(function(resolve, reject){
//    setTimeout(()=>{
//     // resolve("done")
//     reject("fail")
//    })
    

// })
// aim.then((e)=>{
// console.log(e)
// }).catch((error)=>{
// console.log(error);
// })

function outerFunction(){
    let a = 5;
    function innerFunction(){
        console.log(a);
    }
    return innerFunction()
}
outerFunction()