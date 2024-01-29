let screen = document.getElementById("screen")

let buttons = document.querySelectorAll("button")

let screenValue = ''

for(item of buttons){
    item.addEventListener("click" , (e)=>{
        buttonText = e.target.innerText;
        console.log('clicked' , buttonText);

    });

  
}