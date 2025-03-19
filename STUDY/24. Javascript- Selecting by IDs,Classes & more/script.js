//GET ELEMENTS BY CLASS NAME

let boxes=document.getElementsByClassName("box")   //searching elements by class name
console.log(boxes)

boxes[2].style.backgroundColor="aqua"



//GET ELEMENT BY ID

document.getElementById("green").style.backgroundColor="palegreen"  //searching by Ids & changing style



//QUERY SELECTOR

document.querySelector(".box").style.backgroundColor="blue"   //querySelector returns the first element for the given CSS selector. An efficient version of elem.querySelectorAll(CSS)[0]



//QUERY SELECTOR ALL

document.querySelectorAll(".box")   //querySelectorAll is a HTML element , so we can't style this traditional way using ".style" , to style all the elements inside the queryselectorall we have to use for-loop.

//for example-
document.querySelectorAll(".box").forEach(e=>{
    e.style.border="2px solid black"
})



//GET ELEMENTS BY TAG NAME

let divs=document.getElementsByTagName("div")   //searching elements by tag name (div,p,h2,a etc...)
console.log(divs)