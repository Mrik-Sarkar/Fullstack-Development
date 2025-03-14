let arr=[1,2,3,4,5,6,7];

console.log(arr)

console.log(arr.length)   //to know the length of the array

console.log(arr[0])
console.log(arr[1])
console.log(arr[3])
console.log(arr[5])


arr[0]=7001;
console.log(arr[0])

console.log(arr.toString())   //to convert array into string

console.log(arr.join(" and "))   //join() is used to join array with separator

console.log(arr.pop())   //to bring out the last element of the array and remove it from the array
console.log(arr)

console.log(arr.push(420))   //to push an element into the array
console.log(arr)

console.log(arr.shift())   //shift() is the opposite of pop().It brings out & remove the first element from the array
console.log(arr)  

console.log(arr.unshift("Mrik"))   //adds a new element at the beginning of the array
console.log(arr)

console.log(delete arr[5])   //by using delete() , we can delete any element from the array. NOTE- BY USING THIS THE ELEMENT WILL BE DELETED BUT THE ALLOCATED MEMORY WILL NOT BE ERASED
console.log(arr)

let a=[0,9,8];
let b=[7,6,"tanu"];
console.log(arr.concat(a,b))   //to concat multiple arrays together.BUT DOES NOT ORIGINALLY CHANGE EXISTING ARRAY (TO SHOWCASE THIS , I'VE PRINTED THE ARRAY ITSELF IN THE NEXT LINE.)
console.log(arr)

console.log(arr.sort())  //to sort the array alphabetically

//CHECK NOTEBOOK FOR SPLICE()

let c=[1,2,3,4,5,6]
console.log(c.slice(2))   //slice()is used to slice out a piece from an array and create a new one. Here, c.slice(2) means from the index number 2 of c array , the elements will be sliced out and will be created as a new array [3,4,5,6]
console.log(c.slice(2,4))   //c.slice(2,4) means from the index number 2 to number 4 of array c , the elements will be sliced out and will be created as new array [3,4] (not including index number 4).

console.log(c.reverse())   //to reverse the elements of an array



