let button=document.getElementById("btn")



//ADD EVENTLISTENER

// addEventListener is used to assign multiple handler to an event.
//SYNTAX- elem.addEventListener(event,handler). here event is like operator (eg- click, double click, hover) & handler is like operation (basically a function which is declared to do some operation). For better understanding look at the code below-
button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML="<b>Fuck you motherfucker!!!</b>"
})
//above, it is declared that on click , inner HTML of class box will be changed as "<b>Fuck you motherfucker!!!</b>". above from the syntax , here the event is "click" & handler is the function-  ()=>{document.querySelector(".box").innerHTML="<b>Fuck you motherfucker!!!</b>"}

//List of mouse events- https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events



// SET INTERVAL & SET TIMEOUT

//SYNTAX - setInterval(()=>{function}, intervalTime in milisecond)

function getRandomColor() {
    let val1=Math.ceil(0+Math.random()*255)
    let val2=Math.ceil(0+Math.random()*255)
    let val3=Math.ceil(0+Math.random()*255)
    return `rgb(${val1},${val2},${val3})`
}

setInterval(()=>{
    document.querySelector(".box").style.backgroundColor=getRandomColor()
},3000)  //here setInterval will run the getRandomColor() on .box with the interval of 3000ms or 3s

setTimeout(() => {
    document.querySelector(".container").style.backgroundColor=getRandomColor() 
}, 5000);  //setTimeout() is same as setInterval(). The difference is setTimeout() will run only once.