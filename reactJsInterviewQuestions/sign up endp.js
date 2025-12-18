//sign up page

const express=require("express");
const app=express();



app.use(express.json()) //read the body of json

//now building the mock data
const user = [
   {
        name:"Riya Chandra",
        email:"2fgh",
        password:"xcvwfwfwt434y3n"
    },
     {
        name:"Rdfghj",
        email:"2fgh",
        password:"xc123245vbn"
    },
      {
        name:"sdfgh",
        email:"2fgh",
        password:"xcvbn"
    },
]
// we can also make interface for the validity of the data
// now makeing the api endpoint

app.post("/signup",(req,res)=>{
  const{name,email,password}=req.body;
  if(!name|| !email || !password){
    return res.status(400).json({
        message:"all fields are required"
    })
  }
  const exist=user.find((u)=>u.email==email);

  if(exist){
    return res.status(409).json({
        message:"user already exits"
    })
  }
  const newUses={
    name:name,
    email:email,
    password:password,
  }
  user.push(newUses);
  return res.status(201).json({
    message:"signup successful",
    user:{
        name:newUses.name,
        email:newUses.email,
    },
  });
})




//starting server
app.listen(3000,()=>{
    console.log("server running on port 3000");
});