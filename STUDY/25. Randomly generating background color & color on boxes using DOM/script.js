
for (let index = 0; index < document.getElementsByClassName("box").length; index++) {
    let random=Math.random();
    console.log(random)
    const element = document.getElementsByClassName("box")[index];
    if (random<0.33) {
        element.style.backgroundColor="red";
    }
    else if(random>0.33 && random<0.66) {
        element.style.backgroundColor="aqua";
    }
    else {
        element.style.backgroundColor="yellow";
    }
    
}

for (let index = 0; index < document.getElementsByClassName("box").length; index++) {
    let random=Math.random();
    console.log(random)
    const element = document.getElementsByClassName("box")[index];
    if (random<0.33) {
        element.style.color="green";
    }
    else if(random>0.33 && random<0.66) {
        element.style.color="blueviolet";
    }
    else {
        element.style.colorolor="brown";
    }
    
}