import React,{useState} from "react";

function Login(){
    const [email, setEmail]=useState("");
    const [password,setPossword]=useState("");

    const handleLogin =async(e) =>{
        e.preventDefault();
        const res=await fetch("http://localhost:5000/login",{
            method:"POST",
            headers:{"content-type": "application/json"},
            body:JSON.stringify({email,password})
        });
        const data=await res.json();
        localStorage.setItem("token",data.token);
        alert("Login Successful");
    };
    return (
          <form onSubmit={handleLogin}>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}

  export default Login;