//LOOPS

let b=[7,6,"tanu"];
let c=[1,2,3,4,5,6]


for (let index = 0; index < c.length; index++) {
    const element = c[index];
    console.log(element)
    
}


b.forEach((value,index,array)=>{   //to print value ,index number and the array of an array altogether , we use forEach loop
    console.log(value,index,array)
})

//forof loop
for (const element of b) {   //to print the elements of an array using forof loop
    console.log(element)
}