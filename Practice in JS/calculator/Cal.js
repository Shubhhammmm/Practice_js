function calculateValue(e){
     console.log(e.value);

}


function display (e){
    
    
   let b = document.getElementById('hi')
   b.value += e;


}


function result(){
    let b = document.getElementById('hi')
    b.value = eval(b.value); 
}
