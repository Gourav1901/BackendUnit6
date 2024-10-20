const Movie = require('../model/movie');
 exports.getAllMovies = async(req,res,next) =>{
  try{
    const movies = await Movie.findAll();
    res.json(movies);
  }catch(error){
    next(error);
  }
 };

 exports.createMovies = async(req,res,next) => {
  try{
        const newMovie = await Movie.create({title, director, genre});
      res.json(newMovie);
  }catch(error){
    next(error);
  }
 };