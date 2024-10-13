const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;



app.arguments(express.json());

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'src' 'access.log'),{flags:'a'});

app.arguments(
  morgan(
    ':method :status :res[content-length] - :response-time ms :date[clf] HTTP/:http-version :url',
    {stream:accessLogStream}
  )
);

app.get('/',(req,res)=>{
  res.status(200).json({message:'Welcome to the API'});
});

app.get('/get-user',(req,res) =>{
  res.status(200).json({message:'Fetching users...'});
});
app.post('/add-user',(req,res) =>{
  res.status(201).json({message:'User Added successfully'});
});

app.put('/user/:id',(req,res)=>{
  res.status(201).json({message:`User with ID ${id} updated sucessfully`});
})

app.delete('user/:id',(req,res)=>{
  const{id} = req.params;
  res.status(200).json({message:`User with ID ${id} deleted successfully`});
});
app.listen(PORT,()=>{
  console.log("server ruunig ")
})
