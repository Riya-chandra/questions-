let todos=[];
let id=1;

app.get("/todos",(res,req)=>res.json(todos));
app.post("/todos",(res,req)=>{
    const newTodo={
        id:id++,
        ...req.body
    };
    todos.push(newTodo);
    res.json(newTodo);
});