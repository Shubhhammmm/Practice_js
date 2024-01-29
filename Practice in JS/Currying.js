let curryingExample = (a) => (b) => (c) => a*b*c
console.log(curryingExample(2)(3)(4)); 

// let curryingExample = (a) => (b) => (c) => a * b * c;
//     console.log(curryingExample(2)(2)(2));


//     let Xurry = ((a)=>{
//       return  (b) => (c) => a+b+c
//     })
//     console.log(Xurry(2)(3)(4));