//  VARIABLE,LET & CONST

var a=5;
var b=8;
// var is variable

var c="mrik";
// here "mrik" is a string , whatever is within "", is a string 

console.log(typeof a,typeof b,typeof c);
// to know the type of data , typeof is used 


{
    var a =7
}
console.log(a+b);
// here console.log(a+b) will give 15 (7+8). as var is not blocked but globally scoped , so no matter if var is in a block or outside of block, whatever latest value is put within a var is declared the latest value.

let x =5;
let y = 5;

{
    let x=1;
    console.log(x+y);
    // in this case console.log(x+y)=console.log (1+5). as within the block the value of x is 1 as we used let instead of var. 
}

console.log(x+y);
// here console.log(x+y)= console.log(5+5), as the value of x is 5 outside of the block. so let is block scoped element.


// PRIMITIVE DATATYPE

let m= "mrik";
let n= 5;
let o=3.77;
const p= true;
let q= undefined;
let r= null;

console.log(m,n,o,p,q,r);
console.log(typeof m,typeof n,typeof o,typeof p,typeof q,typeof r);
// This stands since the beginning of JavaScript
// typeof null === 'object';
// In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the "object" typeof return value. (reference)

// A fix was proposed for ECMAScript (via an opt-in), but was rejected. It would have resulted in typeof null === 'null'.


// OBJECTS

let v ={
    "name":"Mrik",
    "job code":5700,
    "is_handsome" :true,
}

console.log(v);

v.salary= "60 lpa",
// to add or edit object we use Item.key="value",

console.log(v);



// QUICK QUIZ   

// Write a javascript program to store name , phone number & mark of a student using object 

let student={
    "name":"Mrik Sarkar",
    "Phone Number":"7001228685",
    "Mark": "587"
}

console.log(student);