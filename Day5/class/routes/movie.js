const {Router} = require("express")

const movie = Router();
movie.get("/movies",(req,res)=>{
  return res.json({
    list:[1,2,3,4],
  });
});
module.exports = movie;


