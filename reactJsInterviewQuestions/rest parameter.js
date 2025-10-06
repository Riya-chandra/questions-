// Rest parameters, introduced in ES6, allow you to represent an indefinite number of 
// arguments as an array. They're indicated by three dots (...) followed by the parameter name: 


function sum(...numbers){
    return numbers.reduce((total,num)=>total+num,0);
}

sum(1,2,3,4) //10 



//  What is method chaining?
class Calculator { 
constructor() { 
this.value = 0; 
} 
add(n) { 
this.value += n; 
return this; 
} 
subtract(n) { 
this.value -= n; 
return this; 
} 
multiply(n) { 
this.value *= n; 
return this; 
} 
getValue() { 
return this.value; 
} 
} 
// Method chaining 
new Calculator() 
.add(5) 
.multiply(2) 
.subtract(3) 
.getValue(); // 7 


// return this hone ki wajh se smae obj next method ko pass hota h 