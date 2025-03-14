// console.log("Hello World");

let age = 17;
let grace=2;
age+=grace; // meaning age= age+grace;
console.log(age +grace);
console.log(age-grace);
console.log(age/grace);
console.log(age*grace);
console.log(age**grace); // ** is used as component (eg- age to the power grace meaning square of 19)
console.log(age%grace); // % is a modulus operator used to get remainder value

if(age>18){
    console.log("You can drive");
}
// if{} is a if block. in if(age>18) , (age>18) is condition  

else{
    console.log("You are underage");
}
// else{} is an else block 


let a=9;
let b=3;


let c= a>b ? (a-b):(b-a);
console.log(c);
/* translates to:
if(a>b){
    let c=(a-b);
}

else{
    let c=(b-a);
}
*/
