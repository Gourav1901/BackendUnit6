const express = require('express')
const router = express.Router();
const moviecontroller = require('../controllers/moviescontroller');

router.post('/',moviecontroller.getMovies);

router.get('/',movieController.getMovies);
router.get('/:id',movieController.getMovieById);
router.put('/:id',movieController.updateMovie);

router.delete('/:id',movieController.deleteMovie);

module.exports =router;