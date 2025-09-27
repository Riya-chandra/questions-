//Merge Two Arrays and Remove Duplicates
//or finding union of two arrays

const arr=[1,2,3,4];
const arr2=[2,3,6,0,1,7,8,4];

const unionOrMerged=[...new set([...arr,...arr2])];   //phele dono merge hogye [1,2,3,4,2,3,6,0,1,7,8,4] now thorugh set removed duplicates

//Abhi result ek Set object hai (na ki array).
// Set me normal array jaisi operations (map, filter, indexing) directly nahi hoti.
// Isliye hum ... spread operator se uske andar ke values nikal ke wapas ek array bana dete hain.
console.log(unionOrMerged);

//[1,2,3,4,6,0,1,7,8]
