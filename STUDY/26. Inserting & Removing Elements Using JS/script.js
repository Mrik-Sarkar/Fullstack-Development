document.designMode ="on"  //to edit the webpage directly on the browser

document.querySelector(".box").innerHTML  //to know what is inside the .box element , use it on browser console

document.querySelector(".container").innerHTML  //the same way we can also check what's inside .container

document.querySelector(".box").innerHTML="Hey I am Mrik"  //to change the inner HTML of particular element

document.querySelector(".container").innerText  //to know only the text element inside a div , here the div is .container

document.querySelector(".container").outerHTML  // it shows the inner HTML of container with the container itself , meaning container+the elements inside the container

document.querySelector(".container").tagName  //to know the HTML tag name of a particular element

document.querySelector(".container").nodeName  //it works same as tagName , but tagName is only applicable on elements , nodeName can be applied on any nodes including text , comments etc.

document.querySelector(".box").hidden  //to know if the element is hidden or not

document.querySelector(".box").hidden=true  //to make an element hidden



//ATTRIBUTE METHODS

document.querySelector(".box").hasAttribute("style")  //to check for existense of an attribute. It will return true or false

document.querySelector(".box").getAttribute("style")  // method used to get the value of an attribute. Here it checks what kind of style is present in .box

document.querySelector(".container").setAttribute("style","display:flex")  //method used to set the value of an attribute

document.querySelector(".box").removeAttribute("style")  //method to remove attribute from element

document.querySelector(".container").attributes  //method to get the collection of all attributes



//INSERTION METHOD

let d=document.createElement("div")  //creating a div

d.className="demo"  //setting class

d.innerHTML="I have been inserted by <b>Mrik Sarkar</b>"  //inserting content into div

document.querySelector(".container").append(d)  //append inserts the element at the end of the node
document.querySelector(".container").prepend(d)  //prepend inserts the element at the beginning of the node
document.querySelector(".container").before(d)  //before inserts the element before node
document.querySelector(".container").after(d)  //after inserts the element after node
document.querySelector(".container").replaceWith(d)  //replaceWith replaces the node with the given node



// INSERT ADJACENT HTML/TEXT/ELEMENT

let c =document.querySelector(".container")

c.insertAdjacentHTML("beforebegin","<b>hello boss</b>")  //insert HTML immediately before element
c.insertAdjacentHTML("afterbegin","<b>hello boss</b>")  //insert HTML into element at the beginning
c.insertAdjacentHTML("beforeend","<b>hello boss</b>")  //insert HTML into element at the end
c.insertAdjacentHTML("afterend","<b>hello boss</b>")  //insert HTML immediately after element



//NODE REMOVAL

document.querySelector(".box").remove()   //node.remmove() is used to remove a node



//className & classList

document.querySelector(".container").className  // node.className will give the string of class of the element. Multiple class on the same element is recommended for better understanding

document.querySelector(".container").classList  // node.classList will give the list of className assigned to the element.

document.querySelector(".container").classList.add("mrik")  //node.classList.add("className") is used to add new class on the element

document.querySelector(".container").classList.remove("mrik")  //node.classList.remove("className") is used to remove existing class from the element

document.querySelector(".container").classList.toggle("mrik")  //node.classList.toggle("className") adds the class if it doesn't exist, otherwise removes it

document.querySelector(".container").classList.contains("mrik")  //node.classList.contains("className") checks for the given class , returns true/false




