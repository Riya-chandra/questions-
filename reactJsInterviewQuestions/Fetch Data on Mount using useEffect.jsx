import React,{useEffect,useState} from "react";

function User(){ 
    const [users,setUsers]=useState([]);   //Initially users = [] → empty array
    
    useEffect(()=>{
        fetch("httpa://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data));
    },[]);

    return (
    <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
    );
}

export default Users;

// useState → store API data
// useEffect → call API once on mount
// map → render the data dynamically in JSX