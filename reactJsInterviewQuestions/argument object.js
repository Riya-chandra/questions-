// Toh JavaScript internally ek object banata hai jiska naam arguments hota hai.


function sum(){
    let total =0;
    for(let i=0;i<arguments.length;i++){
     total+=arguments[i];
    }
    return total;
}
sum(1,2,3,4); //10 