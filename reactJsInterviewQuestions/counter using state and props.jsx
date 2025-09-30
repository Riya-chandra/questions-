// Question: Build a counter component with increment button.

const { useState } = require("react");

function counter({intial=0}){
    const[count,setCount]=useState(initial);
    return (
        <div>
            <h3>count:{count}</h3>
            <button onClick={()=>setCount(count+1)}>increment</button>
        </div>
    )
}

export default function app(){
    return <Counter initial={5}></Counter>
}