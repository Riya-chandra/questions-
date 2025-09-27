// remove duplicate with and wihtou set
//Set ek Set object deta hai, array nahi.



const arr=[1,2,2,3,4,5,5,8,8,9]

const unique=[...new Set(arr)];
console.log(unique)  // [1,2,3,4,5,8,9]

//... ka use karke hum Set ke andar ki saari values ko phir se ek array me daal dete hain.

// now without set

const arr2=[1,2,2,3,4,5,5,8,8,9]
const unique2=arr2.filter((item,index)=>arr2.indexOf(item)===index)
console.log(unique2);
//filter ka kaam

// filter ek loop jaisa function hai jo array ke har element pe callback chalata hai.

// Agar callback true return kare → wo element result array me add hota hai.

// Agar callback false return kare → wo element skip ho jata hai.

//with map

const arr3=[1,2,2,3,4,5,5,8,8,9]
const map=new Map();
const unique3=[];
for(let num of arr3){
    if(!map.has(num)){
        map.set(num,true);
        unique3.push(num);
    }
}
console.log(unique3);