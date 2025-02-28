let random=document.getElementById("random")
console.log(random);
    
random.addEventListener("click",()=>{
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//    console.log(randomColor);
    document.body.style.background=`${randomColor}`
   
})