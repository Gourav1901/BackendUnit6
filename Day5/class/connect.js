const mongoose = require("mongoose");

const main = async()=>{
  try{
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/newdb");
    console.log("Connected to Database");

    await connection.disconnect();
    console.log("Disconnected");
  } catch(err){
    console.log("Error connecting to DB");
    console.log(err);
  }
  };

  main();
