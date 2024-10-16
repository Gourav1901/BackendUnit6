const Movie = require('../models/movies');

exports.createMovie = async(req,res)=>{
  try{
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  }catch(error){
    res.status(400).json({message:error.message});
  }
};
exports.getMovies = async(req,res) =>{
  try{
    const {title,rating,q,sortBy,page=1,limit =10} =req.body;
    const query ={};
    if(title)query.title = title;
    if(rating) query.rating = rating;
    if(q) query.title ={$regex:q, $options:'i'};
     
  const movies = await Movies.find(query)
  .sort(sortBy ?{[sortBy]:1}:{})
  .skip((page-1)*limit)
  .limit(parseInt(limit));
  res.json(movies);
  
  }catch(error){
    res.status(500).json({message:error.message});
  }
};

exports.getMoviesById = async(req,res)=>{
  try{
    const movie = await Movie.findById(req,params.id);
    if(!movie) return res.status(404).json({message:'Movie not found'});
    res.json(movie);
  } catch(error){
    res.status(500).json({message:error.message});
  }
};

exports.updateMovie = async(req,res)=> {
   try{
    const updatedMovie = await Movie.findByIdAndupdate(req.params.id,req.body,{new:true});
    if(!updateedMovie) return res.status(404).json({message:'Movie not found'});
    res.json(updatedMovie);
   } catch(error){
    res.status(500).json({message:error.message});
   }
};

exports.deleteMovie = async(req,res) =>{
  try{
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if(!movie) return res.status(404).json({message:`Movie not found`});
    res.json({message:`Movie deleted`});
  }catch (error){
    res.status(500).json({message:error.message});
  }
};