const myPromise = new Promise((resolve, reject) => { 
// Asynchronous operation 
if (value) { 
resolve(value); // Fulfills the promise 
} else { 
reject(error); // Rejects the promise 
} 
}); 



//promise.all()
Promise.all([promise1,promise2,promise3])
.then(([result1,reuslt2,result3])=>{
    //all promises resolved succesfully
})
.catch(error=>{
    //any one promise failed rejected then 
})

//example
function fetchUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({name:riya,id:23}),1000
        })
    }) //function k andr ek promise bana rh h 
  
}

function fetchComments(){
    return new Promise((resolve)=>{
      setInterval(()=>{
        resolve([comments1,comments2]),2000
      })
    })
}

Promise.all([fetchUser(),fetchComments()])
.then(([user,comments])=>{
    console.log('all data fetched');
    console.log('user',user);
    console.log('comments',comments)
})
.catch(error=>{
    console.log('one of the promise failed',error)
})




//promise.race() Promise.race() ek static method hai jo multiple promises ko ek saath run karta hai,
// lekin result tabhi deta hai jab sabse pehla promise (resolve ya reject) complete ho jaata hai**.**
// So — “race” ka matlab literally ek race hai promises ke beech.
// Jo pehle finish karega, wahi result return karega 🏁
Promise.race([promise1, promise2, promise3])
  .then(result => console.log(result))
  .catch(error => console.error(error));


  //example
Promise.race([fetch('/resourse'),new Promise((_,reject)=>   //do not want ot use resolve because mujhe reject p function chlna hai settTimeOut wala isliye __
setTimeout(()=>{
    reject(new Error('timeout')),5000
})
)])
.then(reponse=>console.log(response))
.catch(error=>console.log(error));

// Case 1: Fetch resolves first (fast internet)
// Agar /resource server response 5 seconds se pehle aa gaya,
// then fetch() resolve karega successfully.
// Promise.race() usi pe react karega — aur .then() chalega.
// Second (timeout) promise ignore ho jaayega (kyunki race khatam ho gayi).
// ✅ Output:
// Response { ... }   // (fetch result)
// 🧩 Case 2: Fetch is slow (timeout wins)
// Agar 5 seconds tak response nahi aaya,
// to second promise reject karega → new Error('Timeout')
// Promise.race() immediately reject ho jaata hai (kyunki koi ek race winner mil gaya).
// .catch() block trigger hota hai.



//promise.allSettled()
// Promise.allSettled() takes an iterable of Promises and returns a Promise that resolves 
// after all of the given promises have either fulfilled or rejected. Unlike Promise.all(), it will 
// never reject. The returned promise resolves with an array of objects describing the outcome 
// of each promise. 



// Tum bilkul sahi keh rahi ho — humne manually kahin bhi new Promise() nahi banaya.
// Lekin JavaScript automatically promise create kar deta hai jab hum async keyword use karte hain!
// ⚙️ Concept: async function = function that returns a Promise
// Jab bhi tum kisi function ke aage async likhti ho 👇
// async function something() { ... }


// Async/await is a syntactic sugar on top of Promises, making asynchronous code look and 
// behave more like synchronous code. An async function returns a Promise implicitly, and the 
// await keyword can be used inside async functions to pause execution until the Promise 
// resolves. 
async function fetchUserData() {
    try{
        const reponse=await fetch('/api/user');
        const userData=await reponse.json();
        return userData;
    }
    catch(error){
        console.log("error fetching user data",error);
    }
}

// sync/await is built on top of Promises: 
// • async functions always return a Promise 
// • await can only be used inside async functions 
// • await expression pauses the execution until the Promise resolves or rejects 
// • Async/await makes Promise-based code more readable and easier to reason about 



// 🚀 Step 1: Function call hua
// Tumne likha:
// const result = fetchData();
// 👉 Jaisi hi ye line chali, JavaScript fetchData() function ke andar chala gaya.
// But: Because function async hai, wo turant ek Promise return kar deta hai (pending state me).
// Iska matlab — function chalu hai background me, par calling line ko ek pending promise mil gaya.
// ⚙️ Step 2: First line run hoti hai
// const response = await fetch('/api/data');
// fetch('/api/data') chalti hai → ye server pe network request bhejti hai.
// Ye ek Promise return karti hai, kyunki fetch asynchronous hai.
// Ab await likha hai → to function yahin ruk jaata hai temporarily
// (function background me pause ho jaata hai jab tak fetch complete nahi hota)
// Meanwhile JS engine baaki code (function ke bahar wala) execute karta rehta hai.
// ⚙️ Step 3: Server se Response aaya
// Thodi der baad server ne answer bheja →
// fetch ka promise resolve ho gaya with a Response object.
// Ab await line resume hoti hai (function wapas chalu hota hai) 🔁
// const response = <Response object>;
// ⚙️ Step 4: Check hua – response.ok
// if (!response.ok) {
//   throw new Error(`HTTP error! Status: ${response.status}`);
// }
// response.ok → true hota hai agar server ne 200 (success) bheja ho.
// Agar false (e.g. 404, 500 error) aaya → throw new Error(...) chalega.
// 👉 throw hone ka matlab: function me error hua → ab ye direct catch block me jump karega.
// Agar throw nahi hua (response OK hai), to next line chalegi.
// ⚙️ Step 5: Parse JSON
// const data = await response.json();
// .json() bhi ek asynchronous method hai → ye bhi ek Promise return karta hai.
// Isliye fir se await likha hai → function fir se pause ho jaata hai** 😴
// Jab tak JSON data properly parse nahi hota, function wait karega.
// ⚙️ Step 6: JSON mil gaya
// Jab .json() ka promise resolve hota hai, tab data variable me parsed JS object aa jaata hai:
// const data = { name: "Riya", age: 22 }; // example
// ⚙️ Step 7: Return data
// return data;
// Ab function normally return kar raha hai, lekin kyunki ye async hai,
// return value automatically Promise.resolve(data) me convert ho jaati hai.
// Matlab: function ke bahar tum agar likho:
// fetchData().then(result => console.log(result));
// to console me milega:
// { name: "Riya", age: 22 }
// ⚠️ Step 8: Agar kahin error hua toh…