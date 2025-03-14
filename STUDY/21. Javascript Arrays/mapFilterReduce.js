let a=[1,5,3,8,6,9]



//the classic 'for loop' way to store the square value of the element of an array 'a' into a new array

let newarr=[]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    newarr.push(element**2)
    
}
console.log(newarr)



//using map() to store the square value of an array 'a' into a new array
//map() creates a new array by performing some operation on each element of an existing array
//SYNTAX- array.map((value,index,array)=>{return (value,index,array,value*value,value/index, and so on...)})

let c=a.map(e=>{
    return e**2
})
console.log(c)




//FILTER()
const greaterThanSeven=(e)=>{
    if(e>7){
        return true
    }
    return false
}

let x=a.filter(greaterThanSeven)   //filters an array with elements that satisfy some condition and creates a new array with those elements
console.log(x)