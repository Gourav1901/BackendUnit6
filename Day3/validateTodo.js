const validateTodo = (req,res,next) =>{
  const{ID,Name,Rating,Description,Genre,Cast} = req.body;

  let errors =[];

  if(typeof ID != 'number'){
    errors.push('ID must be a number');

  }

  if (typeof Name !=='string'){
    errors.push('Name must be a string');
  }
  if(typeof Rating !=='number'){
    error.push('Rating must be a number');
  }
  if(typeof Description !=='string'){
    error.push('Description must be a string')
  }
  if(typeof Genre !=='string'){
    error.push('Genre must be a string')
  }
  if(!Array.isArray(Cast) || !Cast.every(castMember =>typeof castMember ==='string')){
    errors.push('Cast must be an array of strings');
  }

  if(errors.length > 0) {
    return res.status(400).json({message:'bad request. some data is incorrect.',errors});
  }
  next();
};

module.exports = validateTodo;