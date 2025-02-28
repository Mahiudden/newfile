let Completed=document.querySelectorAll(".Completed")
let title=document.querySelectorAll(".title")
let text=[];
title.forEach((val)=>{
    text.push(val.innerText)
})



Completed.forEach((val,len)=>{
    val.addEventListener('click',()=>{
        let history=document.getElementById("history")
        let task=parseInt(document.getElementById("task").innerText)
        let taskadd=parseInt(document.getElementById("taskadd").innerText)
        alert("Board updated Successfully")
        val.disabled = true
        val.classList.add("bg-[#ccc]")
        // console.log(text[len]);
        document.getElementById("task").innerText=`0${task-1}`
        if(task<2){
            alert("congrates!! you have completed all the current task")
        }
        document.getElementById("taskadd").innerText=taskadd+1
        
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = hours >= 12 ? "PM" : "AM";
        
        hours = hours % 12;
        hours = hours ? hours : 12; 
        
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        let time12 = `${hours}:${minutes}:${seconds} ${ampm}`;
        // console.log(time12);
        
        let p=document.createElement("p")
        p.innerText=`You have completed the task ${text[len]} to ${time12}`
        history.appendChild(p)
    })
    
})
let clear=document.getElementById("clear")
clear.addEventListener('click',()=>{
    let clearHistory=document.getElementById("history")
    clearHistory.innerHTML = ""; 
})

let Discover=document.getElementById("Discover")
Discover.addEventListener('click',()=>{
    window.location.href="./main.html"  
})



let now = new Date();
let day = now.getDate();
let year = now.getFullYear();

let dayName = now.toLocaleString("en-US", { weekday: "short" });

let monthName = now.toLocaleString("en-US", { month: "short" });


day = day < 10 ? "0" + day : day;

let formattedDate = `${monthName} ${day}  ${year}`;

let dat=document.getElementById('dat')
dat.innerText=`${formattedDate}`

let days=document.getElementById("day")
days.innerText=`${dayName}`
