import React, { useEffect, useState } from "react";

function todo(){
    const [task,setTask]=useState("");
    const[todos,setTodos]=useState([]);
    

    useEffect(()=>{
        fetch("http://loaclhost:5000/todos")
        .then(res=>res.json())
        .then(setTodos);
    },[]);
}


const addTodo=async()=>{
    if(!task) return;
    const res=await fetch("http://localhost:5000/todos" ,{
        method:"POST",
        headers:{"content-Type":"applicxation/json"},
        body:JSON.stringify({text:task,completed:false})
    });
    const newTodo=await res.json();
    setTodos([...todos,newTodo])
    setTask("");
};

return (
    <div>
        <input value={task} onChange={e=>setTask(e.target.value)} type="text" />
        <button onClick={addTodo}>Add</button>
        <ul>{todos.map(t=><li key={t.id}>{t.text}</li>)}</ul>
    </div>
)
export default todo;