const express = require('express');
const mongoose  = require('mongoose');
const router = express.Router();

router.get('/users',async(req,res)=>{
  try{
    let query = {};
    if(req.query.age){
      const age = parseInt(req.query.age,10);
      if(isNaN(age)){
        return res.status(400).json({error:"Age must be a number"})
      }
      query.age = age;
    }
    const user= await mongoose.connection.collection('user').find(query).toArray();

    if(users.length ===0){
      return res.status(404).json({message:'No users found'});
    }
      res.status(200).json(users);
    }catch(error){
      console.error("Enter fetching users:",error);
      res.status(500).json({error:'server error'});
    }
 
});

module.exports = router;