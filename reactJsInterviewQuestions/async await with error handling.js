//Question: Fetch API using async/await with try/catch.

async function fetchData(url){
try{
    const res= await fetch(url);
    if(!res.ok) throw new Error("network error");
    const data=await res.json();
    console.log(data);
}
catch(err){
    console.log("Error:",err.meessage);
}
}
fetchData("https://jsonplaceholder.typicode.com/posts/1");


// res ek Response object hai jo fetch se aata hai.
// res.ok → boolean value, true agar HTTP status 200–299 ke beech hai, false agar error (like 404, 500…).

// throw new Error("network error") → ek Error object create karta hai jisko catch block ya promise .catch() me handle kar sakte ho.
// res.json() → ek asynchronous function hai jo response ka body ko JavaScript object me convert karta hai.
// await → promise resolve hone ka wait karta hai.