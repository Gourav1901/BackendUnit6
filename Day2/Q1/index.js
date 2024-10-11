const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.arguments(express.json());

const readTodosFromFile =() =>{
  const data = fs.readFileSync("db.json");
  return JSON.parse(data);
};


const writeTodosToFile = (data)=> {
  fs.writeFileSync("db.json",JSON.stringify(data,null,2));

};

app.get("/todos",(req,res)=>{
  const todosData =readTodosFromFile();
  res.json(todosData.todos);
});

app.post("/todos",(req,res)=>{
  const newTodo = req.body;
  if(!newTodo.task){
    return res.status(400).json({error:"Task filed is required"});
  }
  const todosData = readTodoFromFile();
  newTodo.id = todosData.todos.length + 1;
  newTodo.status = flase;
  todosData.todos.push(newTodo);

  writeTodosToFile(todosData);
  res.status(201).json({message:"Todo added successfully",todo:newTodo});
});

app.patch("/todos/update-even-status",(req,res)=>{
  const todosData = readTodosFromFile();
  let updated = false;
  todosData.todos = todosData.todos.map((todo) =>{
    if (todo.id % 2 == 0  && todo.status == false){
      todo.status = true;
      updated = true;
    }
    return todo;
  });
  if(updated){
    writeTodosToFile(todosData);
    res.json({message:
    "Status of even ID todos updated to true"
    });
  } else{
    res.status(400).json({message:"No even ID with false status found"});
  }
});

app.delete("/todos/delete-true-status",(req,res)=>{
  const todosData = readTodosFromFile();
  const initialLength = todosData.todos.length;

  todosData.todos = todosData.todos.filter((todo)=>!todo.status);

if (todosData.todos.length<initialLength) {
  writeTodosToFile(todosData);
  res.json({message:"Todos with true status deleted successfully"});
} else {
  res.status(400).json({message:"No todos true status found"});
}

});
app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:{PORT}`);
});