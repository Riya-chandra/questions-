import React, { useEffect } from "react";

function searchUser(){
    const  [query,setQuery]=useState("");
    const [result,setResult]=useState([]); //list of users
}

  useEffect(() => {
    fetch(`http://localhost:5000/users?search=${query}`)
      .then(res=>res.json())
      .then(data=>setResults(data));
  }, [query]); //why this is written 
//Yaani ye effect sirf tab chalega jab query state change hogi.
// Har baar nahi.
//   Pehla part — ek function (jo side-effect perform karta hai)
// Dusra part — ek array of dependencies (jisme likha hota hai kab effect chale)