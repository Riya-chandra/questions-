// Question: Convert a callback function to Promise-based.

const { renderToStaticMarkup } = require("react-dom/server")


function doSomethingPromise(data) {
  return new Promise((resolve, reject) => {  // reject(error) when operation fails and resolve when (value)
    setTimeout(() => {
      resolve(data * 2);   // 🔥 multiplication yahin ho raha hai
    }, 1000);
  });
}

//prev
doSomething(5,(result1)=>{
    console.log(result1); //10
    doSomething(result1,(result2)=>{  
        console.log(result2); //20 
        doSomething(result2,(result3)=>{
            console.log(result3);
        });
    });
});



// NOw due to the callback and promise
doSomethingPromise(5)
.then(result1=>{
    console.log(result1); //10
    return doSomethingPromise(result1);
})
.then(result2=>{
    console.log(result2); //20
    return doSomethingPromise(result2);
})
.then(result3=>{
    console.log(result1); //40
    return doSomethingPromise(result3);
})
.catch(error=> console.log(error));


//Promise sirf sugar nahi hai, balki:

// Yeh ek object hai jo future value represent karta hai. Matlab tum usko pass kar sakte ho, return kar sakte ho, reuse kar sakte ho.

// Callback sirf ek function hota hai jo ek jagah call hoga.

// Promises modern async tools (async/await) ka base hain.


async function run() {
  const result1 = await doSomethingPromise(5);
  const result2 = await doSomethingPromise(result1);
  const result3 = await doSomethingPromise(result2);
  console.log(result3); // 40
}
run();


//resolve = promise success ka result dene ke liye.

// reject = promise failure/error dene ke liye.

// then handle karta hai resolve result.

// catch handle karta hai reject error.



// Callback version
function doSomething(data, callback) {
  setTimeout(() => {
    callback(data * 2);
  }, 1000);
}

// Promise version
function doSomethingPromise(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data * 2);
    }, 1000);
  });
}

// Usage
doSomethingPromise(5).then(result => console.log(result)); // 10
