import React, { useEffect, useState } from "react";

function Search(){
  const [query,setQuery]=useState("");
  const [result,setResult]=useState([]);

  useEffect(()=>{
    const timer=setTimeout(()=>{
        if(query) {
            setResult(["apple","orange","banana"].filter(item=>item.includes(query)));
        }
 //item.includes(query)
// Ye string method hai, jo check karta hai ki kya ek string ke andar doosri string present hai ya nahi.
// Example:
// "apple".includes("a")   // true
// "orange".includes("a") 
// Matlab jo bhi filtered result mile — setResults(["apple","orange","banana"].filter(item => item.includes(query)));
// wo results state me store ho jata hai,
// aur React UI me re-render ho kar list dikha deta hai. 
    },500);
    return ()=>clearTimeout(timer);
  },[query]);
}


return (
    <div>
        <input value={query} type="text" onChange={e=>setQuery(e.target.value)} placeholder="search..."/>
        <ul>
            {result.map((item,i)=><li key={i}>{items}</li>)}
        </ul>
    </div>
);
// Debounce ka role yahan ye hai — agar tu fast type karta hai, jaise “or” likhta hai, toh har ek character pe call nahi jayega.
// Wo wait karega 500ms, aur sirf last waale “or” pe result print karega.