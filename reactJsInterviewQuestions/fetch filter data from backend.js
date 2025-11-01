

const users=[
    {
        id:1,
        name:"Riya",
    },
    {
        id:2,
        name:"Ammm",
    }
];

app.get("/users",(req,res)=>{
    const q=req.query.search || "";  //access the query parameter of url
    res.json(users.filter(u=>u.name.toLowerCase().includes(q.toLowerCase())));
});