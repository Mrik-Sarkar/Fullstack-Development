console.log(document.body)
console.log(document.body.childNodes)

//you have to use it on browser's console. In node.js the document is not defined will be shown.

let container=document.body.childNodes[1];
console.log(container.firstChild)    //here the output will be #text(the spaces in html code is considered text)
console.log(container.firstElementChild)  //it will ignore the #text(which is space in html code) and return the value of firstchild excluding text.


console.log(container.lastElenetChild.style.color="red")   //to change the style of a particular element using DOM.

console.log(container.childNodes)    //it will give you the child nodes of the parent container including text element.
console.log(container.children)   //it will give you the childnodes(only elements) ignoring text,comments etc