let arr2 = [1,2,3,4,56]
let a = arr2.map(e => e+5)
console.log(a);

let arr1 = [2,34,6,78,3]
let b = arr1.filter(val => val > 5 )
console.log(b);

let arr  = [3,2,7,5,4,9,6,1,11]
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
             
        }
      
    }

}
console.log(arr)