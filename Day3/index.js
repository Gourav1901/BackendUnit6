const express = require('express')
const app = express()
const PORT = 5000;

app.use(express.json());

const validateTodo = require('./validateTodo');

app.post('/',validateTodo,(req,res)=>{
  res.status(200).json({message:'data received'});
});


app.listen(PORT,()=>{
  console.log('Server running')
})