//default parameter
const greet=((name='guest', greeting='hello')=>{
    return `{greeting}`,`{name}!`;
});

greet(); //hello guest
greet('alice')//hello alice
greet('bob','hi')


//destructing assignment
const[first,second,...rest]=[1,2,3,4,5,6,6,7,5,4];
//first=1, second=2 and rest is the rest
const{name,age,country='unknown'}={name:'alice',age:'23'};

//rest parameter accpet indefinte numbe of arguments as an array
function sum(...numbers){
    return numbers.reduce((total,num)=>total+num,0)
}
sum(1,2,3,4,5,6,7,3,1); //su kr dega
sum(23,24);//get the sum 


//to declare a map 
const Userrole=new map();
Userrole.set('john','admin');//key value
Userrole.set('ghj','2345');
Userrole.get('john');


//to decalre a set
const uniquenumber=new set([1,2,3,4,5,67,1,2,32,,12,34,42,1234,311,,1,1,1,11,]);
//uniquennumber contains ,1,2,3,4,5,67,32,12,34,42,1234,311,11
uniquenumber.add(5);
uniquenumber.has(3)//true


//concept of weak map and weak sets
//weap map is also a key value pair but the key must be  object 
//free the space when the data is null
//if obj=null then “Is object ka koi reference nahi bacha → delete kar deta hoon.”
const userMetadata=new WeakMap();
let user={name:'john'};
userMetadata.set(user,{lastActive:Date.now()});

const normalMap = new Map();
const obj = { id: 1 };
normalMap.set(obj, "John");

const weakMap = new WeakMap();
let user1 = { id: 1 };
weakMap.set(user, "data");
