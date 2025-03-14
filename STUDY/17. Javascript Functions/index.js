function myfunc(name) {   //syntax: function function_name (var){code to be executed}
    console.log("Hey "+name+", How are you?");
}

myfunc("Tanu")  //set value for var in function_name(var)

function sum(a,b) {
    console.log(a+b);
}

sum(60,30)


//same sum program with return value

function add(a,b) {
    return a+b;
}

result=add(60,40);
console.log("The sum of the above values are: ",result);



//ARROW FUNCTION

const func1=(x)=>{
    console.log(x);
}

func1(34)
func1(48)
func1(67)
func1(48)