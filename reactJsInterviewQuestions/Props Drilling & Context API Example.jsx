// Problem: Passing props deeply can be tedious.
// Solution (Context API):


// createContext() ek React ka built-in function hai (imported from react).

function App() {
  return <Parent user="Riya" />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <p>User: {user}</p>;
}



import React,{createContext,useContext} from "react";
const Random=createContext();

function child(){
    const user=useContext(Random);
    return 
    <p>User:{user}</p>

}

export default function app(){
    return (
        <Random.provider value="riya">
            <Child/>
        </Random.provider>
    )
}