//question: copy the obj in new address
// normally when we use const  copy=obj....thne it only refrence copy hota h 
//but we have to implement ki naya obj create ho and naye address p and then copy ho value

const obj={a:1,b:{c:2}};
const deepCopy=JSON.parse(JSON.stringify(obj));
deepCopy.b.c=10;
console.log(obj.b.c);  

// deepCopy = {
//   a: 1,
//   b: { c: 10 }   // 👈 updated
// }