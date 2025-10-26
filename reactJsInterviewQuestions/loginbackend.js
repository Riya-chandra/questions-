const express=require("express");
const jwt=require("jsonwebtoken");

const app=express();
app.use(express.json());

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    if(email==="test@test.com" && password==="123500"){
        const token=jwt.sign({email},"secret_key");
        res.json({token});
    } else {
        res.status(401).json({message:"invalid credetial"});
    }
})
app.listen(5000,()=>console.log("serever is runng on 5000"))