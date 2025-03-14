let a="Tanushri";
console.log(a[0]) //a[0]=first character of the string 'a'
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a[7])  

console.log(a.length) //to know the length of a string




let student="Bikash";
let dept="CSE";

//normal way to print
console.log("The student's name is "+student+ " and he studies "+dept)

//way to print using template literals
console.log(`The student's name is ${student} and he studies ${dept}`)




let b="krishna";
console.log(b.toUpperCase())    //to convert the string in uppercase
console.log(b.toLowerCase())   //to convert the string into lowercase

console.log(b.slice(1,4))   //to slice the string , here in (1,4) means 1 to 4 , 4 is not included
console.log(b.slice(1))  //it will slice the string from 1 to the end of the string

console.log(b.replace("kr","55"))   //to replace the content of the string with something else, eg- here in b string "kr" will be replaced with "55"

console.log(b.concat(a,"Mrik"))   //to concat two or more strings together