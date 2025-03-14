//FOR LOOP

let a=1;
for (let i = 0; i < 10; i++) {
   
   console.log(a+i);
    
}


//FOR IN LOOP

let obj={
    "Name":"Mrik Sarkar",
    "Phone Number":"7001228685",   // Nmae,Phone Number,Job Code are key. MrikSarkar,7001228685,3699 are element(obj[key]).
    "Job Code":"3699"
}

for (const key in obj) {
    {
        const element=obj[key];
        console.log(key,element);
        
    }
}



//FOR OF LOOP

for (const char of "Mrik") {
    
    console.log(char);
}



//WHILE LOOP

let x=5;

while (x!=0) {
    console.log(x);
    x--;
    
}



//DO WHILE LOOP

let y=10;

do {
    console.log(y);
    y++;
} while(y<6);